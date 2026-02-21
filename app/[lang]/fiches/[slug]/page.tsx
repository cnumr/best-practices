import { FichesPage } from '../../../../components/pages/fiches-page';
import { InternalNavigation } from '../../../../components/pages/fiche/InternalNav';
import { Metadata } from 'next';
import { client } from '../../../../tina/__generated__/databaseClient';
import { getRefConfig } from '../../../../referentiel-config';
import { getStaticPathsFromFilesystem } from '../../../../utils/get-static-paths';
import { ui } from '../../../../i18n/ui';
import { useTranslations } from '../../../../i18n/utils';

export function generateStaticParams() {
  return getStaticPathsFromFilesystem('fiches');
}

export async function generateMetadata({
  params,
}: {
  params: { lang: keyof typeof ui; slug: string };
}): Promise<Metadata> {
  const { lang, slug } = params;
  const t = useTranslations(lang);

  try {
    const res = await client.queries.fiches({
      relativePath: `${lang}/${slug}.mdx`,
    });

    const fiche = res.data.fiches;
    const title = `${fiche.refID} - ${fiche.title} | ${t('seo.site_name')}`;
    const description = fiche.title;
    const imageUrl = t('seo.fb.image.url');
    const siteUrl = t('seo.url');

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `${siteUrl}/${lang}/fiches/${slug}`,
        siteName: t('seo.site_name'),
        images: [
          {
            url: imageUrl,
            alt: fiche.title,
          },
        ],
        locale: lang,
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [t('seo.tw.image.url')],
      },
    };
  } catch {
    return {
      title: t('seo.site_name'),
      description: t('seo.default.description'),
    };
  }
}
export default async function Page({ params }) {
  const { lang, slug } = params;

  const res = await client.queries.fiches({
    relativePath: `${lang}/${slug}.mdx`,
  });

  // Charger toutes les entrées du lexique pour cette langue
  const lexiqueData: Record<string, any> = {};
  if (getRefConfig().featuresEnabled.lexique_tooltips) {
    try {
      const lexiqueRes = await client.queries.lexiqueConnection({
        filter: {
          language: {
            eq: lang,
          },
        },
        first: 1000,
      });

      // Créer un dictionnaire des entrées du lexique par clé (filename sans extension)
      if (lexiqueRes && lexiqueRes.data.lexiqueConnection.edges) {
        for (const edge of lexiqueRes.data.lexiqueConnection.edges) {
          if (edge?.node) {
            // Normaliser la clé en enlevant l'extension .mdx si présente
            const key = edge.node._sys.filename.replace(/\.mdx$/, '');
            // Sérialiser les données pour les rendre compatibles avec les composants clients
            lexiqueData[key] = JSON.parse(JSON.stringify(edge.node));
          }
        }
      }
    } catch {
      // Si le lexique n'existe pas, continuer sans les tooltips
      console.warn('Lexique content not available, tooltips will be disabled');
    }
  }

  const cursor = btoa(res.data.fiches.id.replaceAll('\\', '/'));
  const { data: dataAfter } = await client.queries.fichesConnection({
    filter: {
      language: {
        eq: lang,
      },
    },
    first: 1,
    after: cursor,
  });
  const { data: dataBefore } = await client.queries.fichesConnection({
    filter: {
      language: {
        eq: lang,
      },
    },
    first: 1,
    before: cursor,
  });
  const nextPage =
    dataAfter.fichesConnection.edges && dataAfter.fichesConnection.edges[0];
  const previousPage =
    dataBefore.fichesConnection.edges && dataBefore.fichesConnection.edges[0];

  return (
    <>
      <FichesPage
        data={JSON.parse(JSON.stringify(res.data))}
        query={res.query}
        variables={res.variables}
        params={params}
        lexiqueData={lexiqueData}
      />
      <InternalNavigation
        lang={lang}
        previousPage={previousPage}
        nextPage={nextPage}
        className=""
      />
    </>
  );
}
