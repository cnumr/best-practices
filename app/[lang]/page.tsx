import { HomePage } from '../../components/pages/home-page';
import { client } from '../../tina/__generated__/databaseClient';
import { code_languages } from '../../i18n/ui';

export async function generateStaticParams() {
  return code_languages.map((lang) => ({ lang }));
}
export default async function Home({ params }) {
  const { lang } = params;
  const res = await client.queries.home({ relativePath: `${lang}.mdx` });

  return (
    <HomePage
      // https://github.com/vercel/next.js/issues/47447
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
