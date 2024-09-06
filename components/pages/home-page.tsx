'use client';

import { HomeQuery } from '../../tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { MdxComponents } from '../mdx/mdx-components';

export function HomePage(props: {
  data: HomeQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);
  return (
    <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
      <h1 data-tina-field={tinaField(data.home, 'title')}>{data.home.title}</h1>
      <div data-tina-field={tinaField(data.home, 'body')}>
        {data.home.body && (
          <TinaMarkdown
            content={data.home.body}
            components={MdxComponents}
          />
        )}
      </div>
    </main>
  );
}
