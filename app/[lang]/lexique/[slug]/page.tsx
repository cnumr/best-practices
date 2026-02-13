import { client } from '../../../../tina/__generated__/databaseClient';
import { getRefConfig } from '../../../../referentiel-config';
import { LexiquePage } from '../../../../components/pages/lexique-page';
import { getStaticPathsFromFilesystem } from '../../../../utils/get-static-paths';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  if (!getRefConfig().featuresEnabled.lexique) {
    return [];
  }
  return getStaticPathsFromFilesystem('lexique');
}

export default async function Page({ params }) {
  if (!getRefConfig().featuresEnabled.lexique) {
    notFound();
  }

  const { lang, slug } = params;

  try {
    const res = await client.queries.lexique({
      relativePath: `${lang}/${slug}.mdx`,
    });

    return (
      <LexiquePage
        data={JSON.parse(JSON.stringify(res.data))}
        query={res.query}
        variables={res.variables}
        lang={lang}
      />
    );
  } catch {
    notFound();
  }
}
