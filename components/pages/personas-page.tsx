'use client';

import { tinaField, useTina } from 'tinacms/dist/react';

import { MdxComponents } from '../mdx/mdx-components';
import { PersonasQuery } from '../../tina/__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { ui } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';

export function PersonasPage(props: {
  data: PersonasQuery;
  variables: object;
  query: string;
  lang?: keyof typeof ui;
}) {
  const { data } = useTina(props);
  const lang = props.lang || 'fr';
  const t = useTranslations(lang);

  return (
    <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
      <article
        data-pagefind-body
        data-pagefind-meta={`title:${data.personas.title}`}
        data-tina-field={tinaField(data.personas, 'body')}>
        <span className="hidden" data-pagefind-filter="type">
          {t('Personas')}
        </span>
        <span className="hidden" data-pagefind-filter="lang">
          {lang}
        </span>
        <h1>{data.personas.title}</h1>
        {data.personas.body && (
          <div className="markdown-content">
            <TinaMarkdown
              content={data.personas.body}
              components={MdxComponents}
            />
          </div>
        )}
      </article>
    </main>
  );
}
