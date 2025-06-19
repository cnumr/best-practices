import { client } from '../../../../tina/__generated__/databaseClient';
import { PersonasPage } from '../../../../components/pages/personas-page';

export async function generateStaticParams() {
  const res = await client.queries.personasConnection({
    first: 1000
  });
  return res.data.personasConnection.edges?.map((e) => ({ lang: e?.node?.language, slug: e?.node?._sys.filename }))
}

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
