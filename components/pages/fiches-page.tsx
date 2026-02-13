'use client';

import { formatDate, slugify } from '../../src/js/utils';
import { tinaField, useTina } from 'tinacms/dist/react';

import { FicheMetaDisplay } from './fiche/MetaCard';
import { FichePermalink } from './fiche/Permalink';
import { FicheTableValidations } from './fiche/TableValidation';
import { FicheVersionDisplay } from './fiche/VersionDisplay';
import { FichesQuery } from '../../tina/__generated__/types';
import { LexiqueProvider } from '../mdx/LexiqueContext';
import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { cn } from '../../utils/cn';
import { getMdxComponents } from '../mdx/mdx-components';
import { getRefConfig } from '../../referentiel-config';
import { ui } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';

function ConditionalLexiqueWrapper({
  enabled,
  lang,
  lexiqueData,
  children,
}: {
  enabled: boolean;
  lang: keyof typeof ui;
  lexiqueData?: Record<string, any>;
  children: React.ReactNode;
}) {
  if (enabled) {
    return (
      <LexiqueProvider
        lang={lang}
        lexiqueData={lexiqueData}>
        <div className="markdown-content">{children}</div>
      </LexiqueProvider>
    );
  }
  return <div className="markdown-content">{children}</div>;
}

const REF_NAME = process.env.NEXT_PUBLIC_REF_NAME
  ? process.env.NEXT_PUBLIC_REF_NAME
  : '';
export function FichesPage(props: {
  data: FichesQuery;
  variables: object;
  query: string;
  params: { lang: keyof typeof ui };
  lexiqueData?: Record<string, any>;
}) {
  const { data } = useTina(props);
  const t = useTranslations(props.params.lang);
  const anchors = data?.fiches.body.children
    .filter((child: any) => child.type && ['h1', 'h2'].includes(child.type))
    .map((child: any) => ({
      slug: '#' + slugify(child.children[0].text),
      depth: (child.type && parseInt(child.type.replace('h', ''), 0)) ?? 0,
      text: child.children[0].text,
    }));

  return (
    <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
      <article
        className="lg:grid lg:grid-cols-[1fr_5fr] lg:gap-4"
        data-pagefind-body
        data-pagefind-meta={`title:${data.fiches.title}`}>
        <span className="hidden" data-pagefind-meta={`refid:${data.fiches.refID}`} />
        <i className="flex items-center">
          {t('Mise à jour le')}{' '}
          {formatDate(data.fiches.updatedAt || data.fiches.updatedAt)}
        </i>
        <span className="hidden" data-pagefind-filter="type">
          {t('Bonnes pratiques')}
        </span>
        <span className="hidden" data-pagefind-filter="lang">
          {props.params.lang}
        </span>
        <FichePermalink />
        <h1 className="flex flex-col items-start gap-2 lg:col-span-2 lg:flex-row lg:items-center lg:gap-0">
          <span
            className="badge mr-2 whitespace-nowrap border-primary bg-primary"
            data-tina-field={tinaField(data.fiches, 'refID')}>
            {REF_NAME} {data.fiches['refID']}
          </span>
          <span data-tina-field={tinaField(data.fiches, 'title')}>
            {data.fiches.title}
          </span>
        </h1>
        <FicheVersionDisplay
          // @ts-ignore - TinaCMS generated types don't include 'versions' field
          versions={data.fiches['versions']}
          data={data}
        />
        <FicheMetaDisplay
          fiches={data}
          lang={props.params.lang}
          className=""
          tableOfContents={anchors}
        />
        <div
          data-tina-field={tinaField(data.fiches, 'body')}
          className={cn('markdown-content lg:col-span-1')}>
          {data.fiches.body && (
            <ConditionalLexiqueWrapper
              enabled={getRefConfig().featuresEnabled.lexique_tooltips && Object.keys(props.lexiqueData || {}).length > 0}
              lang={props.params.lang}
              lexiqueData={props.lexiqueData}>
              <TinaMarkdown
                content={data.fiches.body}
                // @ts-ignore - TinaMarkdown components type doesn't match custom MDX components
                components={getMdxComponents(props.params.lang)}
              />
            </ConditionalLexiqueWrapper>
          )}
          <FicheTableValidations
            validations={data.fiches.validations}
            lang={props.params.lang}
          />
        </div>
      </article>
    </main>
  );
}
