import { useTranslations } from '../../../i18n/utils';
import { Metadata } from 'next';
import { client } from '../../../tina/__generated__/databaseClient';
import { getRefConfig } from '../../../referentiel-config';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { code_languages, ui } from '../../../i18n/ui';

export async function generateStaticParams() {
  // Ne pas générer de pages si la feature est désactivée
  if (!getRefConfig().featuresEnabled.linkToPersonas) {
    return [];
  }
  return code_languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: keyof typeof ui };
}): Promise<Metadata> {
  const { lang } = params;
  const t = useTranslations(lang);
  const title = `${t('Personas')} | ${t('seo.site_name')}`;
  const description = t('Consulter les Personas');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${t('seo.url')}/${lang}/personas`,
      siteName: t('seo.site_name'),
      images: [{ url: t('seo.fb.image.url'), alt: title }],
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [t('seo.tw.image.url')],
    },
  };
}

export default async function Home({ params }) {
  const { lang } = params;

  // Retourner 404 si la feature est désactivée
  if (!getRefConfig().featuresEnabled.linkToPersonas) {
    notFound();
  }

  const t = useTranslations(lang);

  let entries;
  try {
    const { data } = await client.queries.personasConnection({
      first: 1000,
      filter: { language: { eq: lang } },
    });
    entries = data.personasConnection.edges;
  } catch {
    // Si la collection n'existe pas ou est vide, afficher un message
    entries = [];
  }

  if (!entries || entries.length === 0) {
    return (
      <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
        <h1>{t('Personas')}</h1>
        <p>{t('Aucun contenu disponible.')}</p>
      </main>
    );
  }

  return (
    <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
      <div className="group flex flex-col gap-4">
        <h1 className="mb-2">{t('Personas')}</h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 group-has-[#bt-view:checked]:hidden">
            <ul
              className="wp-list"
              data-pagefind-ignore>
              {entries?.map((entry) => {
                if (entry?.node) {
                  return (
                    <>
                      <Link
                        key={entry?.node.id}
                        href={`/${lang}/personas/${entry.node._sys.filename}`}>
                        {entry.node.title}
                      </Link>
                    </>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
