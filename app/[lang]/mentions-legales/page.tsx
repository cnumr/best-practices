import { MentionsLegalesPage } from '../../../components/pages/mentions-legales-page';
import { client } from '../../../tina/__generated__/databaseClient';

export default async function Page({ params }) {
  const { lang } = params;
  const res = await client.queries.mentionsLegales({
    relativePath: `${lang}.mdx`,
  });

  return (
    <MentionsLegalesPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
