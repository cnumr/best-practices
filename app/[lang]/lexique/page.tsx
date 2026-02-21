import { Lexique } from '../../../tina/__generated__/types';
import Link from 'next/link';
import { MdxComponents } from '../../../components/mdx/mdx-components';
import { Metadata } from 'next';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { client } from '../../../tina/__generated__/databaseClient';
import { getRefConfig } from '../../../referentiel-config';
import { notFound } from 'next/navigation';
import { code_languages, ui } from '../../../i18n/ui';
import { useTranslations } from '../../../i18n/utils';

export async function generateStaticParams() {
  // Ne pas générer de pages si la feature est désactivée
  if (!getRefConfig().featuresEnabled.lexique) {
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
  const title = `${t('Lexique')} | ${t('seo.site_name')}`;
  const description = t('Consulter le Lexique');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${t('seo.url')}/${lang}/lexique`,
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
  if (!getRefConfig().featuresEnabled.lexique) {
    notFound();
  }

  const t = useTranslations(lang);

  let entries;
  try {
    const { data } = await client.queries.lexiqueConnection({
      first: 1000,
      filter: { language: { eq: lang } },
    });
    entries = data.lexiqueConnection.edges?.filter(
      (e) => e?.node?.published
    );
  } catch {
    // Si la collection n'existe pas ou est vide, afficher un message
    entries = [];
  }

  if (!entries || entries.length === 0) {
    return (
      <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
        <h1>{t('Lexique')}</h1>
        <p>{t('Aucun contenu disponible.')}</p>
      </main>
    );
  }
  const byGroup: { node: Lexique }[][] = entries.reduce((r, a) => {
    if (a?.node) {
      r[a.node.title.slice(0, 1)] = [...(r[a.node.title.slice(0, 1)] || []), a];
    }
    return r;
  }, []);
  return (
    <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
      <h1 data-pagefind-filter="type">{t('Lexique')}</h1>
      <ul
        className="mb-2 flex flex-wrap items-start gap-2"
        data-pagefind-body>
        {Object.keys(byGroup).map((entry, index) => {
          return (
            <li
              key={entry}
              className="m-0 mb-4 list-none whitespace-nowrap leading-none">
              <Link
                href={`#${entry}`}
                className="badge text-sm text-neutral no-underline transition hover:bg-primary-transparent">
                {entry}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* filters */}
      <ul>
        {Object.entries(byGroup).map((groupedEntry, index) => {
          return (
            <li key={groupedEntry[0]}>
              <ul id={`${groupedEntry[0]}`}>
                {groupedEntry[1].map((entry, index) => {
                  if (entry?.node)
                    return (
                      <li
                        key={entry?.node.id}
                        className="box mb-6 border-neutral-transparent pb-0">
                        <h2 className="mb-4 mt-0 text-neutral">
                          {entry?.node.title}
                        </h2>
                        <div className="markdown-content">
                          <TinaMarkdown
                            content={entry?.node.body}
                            // @ts-ignore
                            components={MdxComponents}
                          />
                        </div>
                      </li>
                    );
                  else return null;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
