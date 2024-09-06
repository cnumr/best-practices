import { client } from '../../../../tina/__generated__/databaseClient';
import { FichesPage } from '../../../../components/pages/fiches-page';

export default async function Page({ params }) {
  const { lang, slug } = params;
  const res = await client.queries.fiches({
    relativePath: `${lang}/${slug}.mdx`,
  });

  return (
    <FichesPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
      params={params}
    />
  );
}
