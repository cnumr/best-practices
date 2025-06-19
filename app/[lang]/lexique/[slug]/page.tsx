import { client } from '../../../../tina/__generated__/databaseClient';
import { LexiquePage } from '../../../../components/pages/lexique-page';

export async function generateStaticParams() {
  const res = await client.queries.lexiqueConnection({
    first: 1000
  });
  return res.data.lexiqueConnection.edges?.map((e) => ({ lang: e?.node?.language, slug: e?.node?._sys.filename }))
}
export default async function Page({ params }) {
  const { lang, slug } = params;
  const res = await client.queries.lexique({
    relativePath: `${lang}/${slug}.mdx`,
  });

  return (
    <LexiquePage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
