'use client';

import { formatDate, slugify } from '../../src/js/utils';
import { tinaField, useTina } from 'tinacms/dist/react';

import { FicheMetaDisplay } from './fiche/MetaCard';
import { FichePermalink } from './fiche/Permalink';
import { FicheTableValidations } from './fiche/TableValidation';
import { FicheVersionDisplay } from './fiche/VersionDisplay';
import { FichesQuery } from '../../tina/__generated__/types';
import { MdxComponents } from '../mdx/mdx-components';
import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { cn } from '../../utils/cn';
import { ui } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';

const REF_NAME = process.env.NEXT_PUBLIC_REF_NAME
  ? process.env.NEXT_PUBLIC_REF_NAME
  : '';
export function FichesPage(props: {
  data: FichesQuery;
  variables: object;
  query: string;
  params: { lang: keyof typeof ui };
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
      <article className="lg:grid lg:grid-cols-[1fr_5fr] lg:gap-4">
        <i className="flex items-center">
          {t('Mise à jour le')}{' '}
          {formatDate(data.fiches.updatedAt || data.fiches.updatedAt)}
        </i>
        <span
          className="hidden"
          data-pagefind-filter="type">
          {t('Bonnes pratiques')}
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
          // @ts-ignore
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
            <div className="markdown-content">
              <TinaMarkdown
                content={data.fiches.body}
                // @ts-ignore
                components={MdxComponents}
              />
            </div>
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
