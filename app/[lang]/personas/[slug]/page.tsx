import { client } from '../../../../tina/__generated__/databaseClient';
import { PersonasPage } from '../../../../components/pages/personas-page';

export default async function Page({ params }) {
  const { lang, slug } = params;
  const res = await client.queries.personas({
    relativePath: `${lang}/${slug}.mdx`,
  });

  return (
    <PersonasPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
