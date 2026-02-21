'use client';

import { tinaField, useTina } from 'tinacms/dist/react';

import { LexiqueQuery } from '../../tina/__generated__/types';
import { MdxComponents } from '../mdx/mdx-components';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { ui } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';

export function LexiquePage(props: {
  data: LexiqueQuery;
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
        data-pagefind-meta={`title:${data.lexique.title}`}
        data-tina-field={tinaField(data.lexique, 'body')}>
        <span className="hidden" data-pagefind-filter="type">
          {t('Lexique')}
        </span>
        <span className="hidden" data-pagefind-filter="lang">
          {lang}
        </span>
        <h1>{data.lexique.title}</h1>
        {data.lexique.body && (
          <div className="markdown-content">
            <TinaMarkdown
              content={data.lexique.body}
              components={MdxComponents}
            />
          </div>
        )}
      </article>
    </main>
  );
}
