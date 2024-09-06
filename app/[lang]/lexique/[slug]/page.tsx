import { client } from '../../../../tina/__generated__/databaseClient';
import { LexiquePage } from '../../../../components/pages/lexique-page';

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
