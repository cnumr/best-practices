'use client';

import { MentionsLegalesQuery } from '../../tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { MdxComponents } from '../mdx/mdx-components';

export function MentionsLegalesPage(props: {
  data: MentionsLegalesQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);
  return (
    <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
      <div data-tina-field={tinaField(data.mentionsLegales, 'body')}>
        {data.mentionsLegales.body && (
          <TinaMarkdown
            content={data.mentionsLegales.body}
            components={MdxComponents}
          />
        )}
      </div>
    </main>
  );
}
