'use client';

import { PersonasQuery } from '../../tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { MdxComponents } from '../mdx/mdx-components';

export function PersonasPage(props: {
  data: PersonasQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);
  return (
    <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
      <div data-tina-field={tinaField(data.personas, 'body')}>
        {data.personas.body && (
          <TinaMarkdown
            content={data.personas.body}
            components={MdxComponents}
          />
        )}
      </div>
    </main>
  );
}
