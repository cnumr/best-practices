import { client } from '../../../../tina/__generated__/databaseClient';
import {ChaptersConnectionQuery} from "../../../../tina/__generated__/types";
import chaptersData from "../chapters.preval";
import {tinaField} from "tinacms/dist/react";
import {cn} from "../../../../utils/cn";
import {TinaMarkdown} from "tinacms/dist/rich-text";
import {MdxComponents} from "../../../../components/mdx/mdx-components";
import React from "react";
export async function generateStaticParams() {
  const { data }: { data: ChaptersConnectionQuery } = chaptersData;
  return data.chaptersConnection.edges?.map((e) => ({ lang: e?.node?.language, slug: e?.node?._sys.filename }))
}
export default async function Page({ params }) {
  const { lang, slug } = params;

  const res = await client.queries.chapters({
    relativePath: `${lang}/${slug}.md`,
  });

  const data = JSON.parse(JSON.stringify(res.data));

  const cursor = btoa(res.data.chapters.id.replaceAll('\\','/'));
  const {data:dataAfter} =  await client.queries.chaptersConnection({
    filter :{
      language: {
        eq: lang
      }
    },
    first: 1,
    after: cursor
  });
  const {data: dataBefore} =  await client.queries.chaptersConnection({
    filter :{
      language: {
        eq: lang
      }
    },
    first: 1,
    before: cursor
  });
  const nextPage = dataAfter.chaptersConnection.edges && dataAfter.chaptersConnection.edges[0];
  const previousPage = dataBefore.chaptersConnection.edges && dataBefore.chaptersConnection.edges[0];

  return (
    <div className={"p-4"}>
      <div
        data-tina-field={tinaField(data.chapters.body, 'body')}
        className={cn('markdown-content lg:col-span-1')}>
        {data.chapters.body && (
          <TinaMarkdown
            content={data.chapters.body}
            components={MdxComponents}
          />
        )}
      </div>
    </div>
  );
}
