import { FichesPage } from '../../../../components/pages/fiches-page';
import { InternalNavigation } from '../../../../components/pages/fiche/InternalNav';
import { client } from '../../../../tina/__generated__/databaseClient';
import { FichesConnectionQuery } from '../../../../tina/__generated__/types';
import fichesData from '../fiches.preval';
export async function generateStaticParams() {
  const { data }: { data: FichesConnectionQuery } = fichesData;
  return data.fichesConnection.edges?.map((e) => ({ lang: e?.node?.language, slug: e?.node?._sys.filename }))
}
export default async function Page({ params }) {
  const { lang, slug } = params;

  const res = await client.queries.fiches({
    relativePath: `${lang}/${slug}.mdx`,
  });


  const cursor = btoa(res.data.fiches.id.replaceAll('\\','/'));
  const {data:dataAfter} =  await client.queries.fichesConnection({
    filter :{
      language: {
        eq: lang
      }
    },
    first: 1,
    after: cursor
  });
  const {data: dataBefore} =  await client.queries.fichesConnection({
    filter :{
      language: {
        eq: lang
      }
    },
    first: 1,
    before: cursor
  });
  const nextPage = dataAfter.fichesConnection.edges && dataAfter.fichesConnection.edges[0];
  const previousPage = dataBefore.fichesConnection.edges && dataBefore.fichesConnection.edges[0];

  return (
    <>

    <FichesPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
      params={params}
    />
    <InternalNavigation lang={lang} previousPage={previousPage} nextPage={nextPage} className='' />
    </>
  );
}
