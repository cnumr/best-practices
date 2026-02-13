'use client';

import React, { useEffect, useRef, useState } from 'react';

import { LexiqueQuery } from '../../tina/__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { getMdxComponents } from './mdx-components';
import { ui } from '../../i18n/ui';
import { useLexiqueContext } from './LexiqueContext';
import { useTranslations } from '../../i18n/utils';

interface LexiqueReferenceProps {
  lexiqueKey: string;
  displayText: string;
  lang: string;
}

export function LexiqueReference({
  lexiqueKey,
  displayText,
  lang,
}: LexiqueReferenceProps) {
  const { lexiqueData: preloadedLexiqueData } = useLexiqueContext();
  const [lexiqueData, setLexiqueData] = useState<LexiqueQuery | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipId = `lexique-tooltip-${lexiqueKey}-${Math.random().toString(36).substr(2, 9)}`;
  const t = useTranslations(lang as keyof typeof ui);

  useEffect(() => {
    // Si les données sont pré-chargées, les utiliser directement
    if (
      preloadedLexiqueData &&
      preloadedLexiqueData[lexiqueKey] !== undefined
    ) {
      const data = preloadedLexiqueData[lexiqueKey];
      if (data) {
        setLexiqueData({ lexique: data } as LexiqueQuery);
      } else {
        setError(true);
      }
      setLoading(false);
      return;
    }

    // Sinon, charger via l'API (fallback pour le mode dev)
    async function loadLexique() {
      try {
        setLoading(true);
        setError(false);
        // Utiliser l'API route TinaCMS
        const response = await fetch('/api/tina/gql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query Lexique($relativePath: String!) {
                lexique(relativePath: $relativePath) {
                  id
                  title
                  body
                  language
                  published
                }
              }
            `,
            variables: {
              relativePath: `${lang}/${lexiqueKey}.mdx`,
            },
          }),
        });

        if (!response.ok) {
          throw new Error('Erreur lors du chargement du lexique');
        }

        const result = await response.json();
        if (result.errors) {
          throw new Error(result.errors[0]?.message || 'Erreur inconnue');
        }

        setLexiqueData({ lexique: result.data.lexique } as LexiqueQuery);
      } catch (err) {
        console.error('Erreur lors du chargement du lexique:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadLexique();
  }, [lexiqueKey, lang, preloadedLexiqueData]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        tooltipRef.current &&
        triggerRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setShowTooltip(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && showTooltip) {
        setShowTooltip(false);
        triggerRef.current?.focus();
      }
    }

    if (showTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [showTooltip]);

  const hasError = error || (!loading && !lexiqueData?.lexique);
  const borderColor = hasError ? 'border-red-500' : 'border-gray-600';
  const textColor = hasError ? 'text-red-500' : 'text-inherit';

  return (
    <span className="relative inline-block">
      <span
        ref={triggerRef}
        className={`cursor-help border-b border-dotted ${borderColor} ${textColor} hover:border-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
        role="button"
        tabIndex={0}
        aria-expanded={showTooltip}
        aria-haspopup="dialog"
        aria-describedby={showTooltip ? tooltipId : undefined}
        aria-label={t('lexique.aria-label').replace('{term}', displayText)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setShowTooltip(!showTooltip);
          }
        }}>
        {displayText}
      </span>
      {showTooltip && (
        <div
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          aria-live="polite"
          aria-label={t('lexique.aria-label-tooltip').replace(
            '{term}',
            displayText
          )}
          className="absolute bottom-full left-1/2 z-50 mb-2 w-80 -translate-x-1/2 rounded-lg bg-gray-100 p-4 shadow-lg focus:outline-none"
          style={{
            pointerEvents: 'auto',
          }}>
          <div className="relative">
            {/* Flèche pointant vers le bas */}
            <div
              className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-100"
              aria-hidden="true"></div>
            {loading ? (
              <div
                className="text-sm text-gray-600"
                role="status"
                aria-live="polite">
                {t('lexique.loading')}
              </div>
            ) : hasError ? (
              <div
                className="text-sm text-red-600"
                role="alert"
                aria-live="assertive">
                {t('lexique.not-found').replace('{term}', lexiqueKey)}
              </div>
            ) : lexiqueData?.lexique?.body ? (
              <div className="text-sm text-gray-700">
                <TinaMarkdown
                  content={lexiqueData.lexique.body}
                  // @ts-ignore
                  components={getMdxComponents(lang)}
                />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </span>
  );
}
