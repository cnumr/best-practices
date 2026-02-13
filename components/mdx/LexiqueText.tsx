'use client';

import { LexiqueReference } from './LexiqueTooltip';
import React from 'react';
import { ui } from '../../i18n/ui';
import { useLexiqueContext } from './LexiqueContext';

type Lang = keyof typeof ui;

/**
 * Parse le texte pour trouver les références au lexique au format [[key|displayText]] ou [[key]]
 * et les remplace par le composant LexiqueReference
 */
export function parseLexiqueReferences(
  text: string,
  lang: Lang
): React.ReactNode[] {
  const regex = /\[\[([^\|\]]+)(?:\|([^\]]+))?\]\]/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let matchIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    // Ajouter le texte avant la référence
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const lexiqueKey = match[1];
    const displayText = match[2] || lexiqueKey;

    parts.push(
      <LexiqueReference
        key={`lexique-${matchIndex++}`}
        lexiqueKey={String(lexiqueKey)}
        displayText={String(displayText)}
        lang={String(lang)}
      />
    );

    lastIndex = regex.lastIndex;
  }

  // Ajouter le texte restant
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

/**
 * Fonction récursive pour extraire tout le texte d'un nœud
 */
export function extractAllText(node: any, depth: number = 0): string {
  if (node === null || node === undefined) {
    return '';
  }

  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map((item) => extractAllText(item, depth + 1)).join('');
  }

  if (node && typeof node === 'object') {
    let text = '';

    // Si c'est un nœud avec une propriété text (structure TinaMarkdown)
    if ('text' in node && typeof (node as any).text === 'string') {
      text += (node as any).text;
    }

    // Si c'est un élément React avec des enfants
    if (React.isValidElement(node)) {
      const props = node.props as any;
      if (props) {
        // Extraire les children
        if (props.children !== undefined && props.children !== null) {
          text += extractAllText(props.children, depth + 1);
        }
        // Aussi vérifier les props directement
        if (typeof props.text === 'string') {
          text += props.text;
        }
        // Vérifier content (structure possible de TinaMarkdown)
        if (props.content && Array.isArray(props.content)) {
          text += props.content
            .map((item: any) => {
              if (item && typeof item === 'object' && 'text' in item) {
                return item.text || '';
              }
              return extractAllText(item, depth + 1);
            })
            .join('');
        }
      }
    } else {
      // Si c'est un objet avec des children (structure TinaMarkdown)
      if ('children' in node && (node as any).children) {
        const nodeChildren = (node as any).children;
        if (Array.isArray(nodeChildren)) {
          text += nodeChildren
            .map((item: any) => extractAllText(item, depth + 1))
            .join('');
        } else {
          text += extractAllText(nodeChildren, depth + 1);
        }
      }
      // Vérifier content directement
      if ('content' in node && Array.isArray((node as any).content)) {
        text += (node as any).content
          .map((item: any) => {
            if (item && typeof item === 'object' && 'text' in item) {
              return item.text || '';
            }
            return extractAllText(item, depth + 1);
          })
          .join('');
      }
    }

    return text;
  }

  return '';
}

/**
 * Fonction récursive pour traiter les enfants et parser les références
 */
export function processChildren(
  children: React.ReactNode,
  lang: Lang
): React.ReactNode {
  // D'abord, extraire tout le texte
  const fullText = extractAllText(children);

  // Si pas de références, retourner tel quel
  if (!fullText.includes('[[') || !fullText.includes(']]')) {
    return children;
  }

  // Parser le texte complet et remplacer complètement le contenu
  const parsed = parseLexiqueReferences(fullText, lang);

  // Si le texte n'a pas changé, retourner tel quel
  if (parsed.length === 1 && parsed[0] === fullText) {
    return children;
  }

  // Retourner le texte parsé qui remplace tout le contenu
  return parsed;
}

interface LexiqueTextProps {
  children?: React.ReactNode;
  props?: any;
  tag?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}

/**
 * Composant générique pour parser les références au lexique dans n'importe quel élément HTML
 */
export function LexiqueText({
  children,
  props,
  tag = 'span',
  ...rest
}: LexiqueTextProps) {
  const { lang } = useLexiqueContext();

  // TinaMarkdown peut passer { props, children } comme pour les headings
  // ou juste { children } directement
  let actualChildren = children;

  // Si children est un objet avec props.children (structure HeadingsH1)
  if (
    children &&
    typeof children === 'object' &&
    'props' in children &&
    children.props?.children
  ) {
    actualChildren = children.props.children;
  }
  // Si props.children existe (autre structure possible)
  else if (props && props.children) {
    actualChildren = props.children;
  }

  const processedChildren = processChildren(actualChildren, lang);

  // Utiliser props si disponible (comme HeadingsH1), sinon rest
  const finalProps = props || rest;

  // Créer l'élément avec le tag spécifié
  return React.createElement(tag, finalProps, processedChildren);
}
