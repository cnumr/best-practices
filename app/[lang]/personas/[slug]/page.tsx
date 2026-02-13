import { Metadata } from 'next';
import { client } from '../../../../tina/__generated__/databaseClient';
import { getRefConfig } from '../../../../referentiel-config';
import { PersonasPage } from '../../../../components/pages/personas-page';
import { getStaticPathsFromFilesystem } from '../../../../utils/get-static-paths';
import { notFound } from 'next/navigation';
import { ui } from '../../../../i18n/ui';
import { useTranslations } from '../../../../i18n/utils';

export function generateStaticParams() {
  if (!getRefConfig().featuresEnabled.linkToPersonas) {
    return [];
  }
  return getStaticPathsFromFilesystem('personas');
}

export async function generateMetadata({
  params,
}: {
  params: { lang: keyof typeof ui; slug: string };
}): Promise<Metadata> {
  const { lang, slug } = params;
  const t = useTranslations(lang);

  try {
    const res = await client.queries.personas({
      relativePath: `${lang}/${slug}.mdx`,
    });

    const persona = res.data.personas;
    const title = `${persona.title} | ${t('seo.site_name')}`;
    const description = persona.title;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `${t('seo.url')}/${lang}/personas/${slug}`,
        siteName: t('seo.site_name'),
        images: [{ url: t('seo.fb.image.url'), alt: persona.title }],
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
  if (!getRefConfig().featuresEnabled.linkToPersonas) {
    notFound();
  }

  const { lang, slug } = params;

  try {
    const res = await client.queries.personas({
      relativePath: `${lang}/${slug}.mdx`,
    });

    return (
      <PersonasPage
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
