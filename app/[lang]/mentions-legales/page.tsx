import { MentionsLegalesPage } from '../../../components/pages/mentions-legales-page';
import { Metadata } from 'next';
import { client } from '../../../tina/__generated__/databaseClient';
import { ui } from '../../../i18n/ui';
import { useTranslations } from '../../../i18n/utils';

export async function generateMetadata({
  params,
}: {
  params: { lang: keyof typeof ui };
}): Promise<Metadata> {
  const { lang } = params;
  const t = useTranslations(lang);
  const title = `${t('Mentions légales')} | ${t('seo.site_name')}`;
  const description = t('seo.default.description');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${t('seo.url')}/${lang}/mentions-legales`,
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
