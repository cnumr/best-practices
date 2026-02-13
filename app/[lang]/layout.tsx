import '../globals.css';

import { ErrorBoundary } from '../../components/ErrorBoundary';
import Footer from '../../components/footer';
import GlobalSearch from '../../components/search/global-search';
import Header from '../../components/header';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { getRefConfig } from '../../referentiel-config';
import { ui } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';
const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params,
}: {
  params: {
    lang: keyof typeof ui;
  };
}): Promise<Metadata> {
  const t = useTranslations(params.lang);
  const title = `${t('seo.site_name')}${getRefConfig().i18n.refTitles[params.lang].long} | Collectif Green IT`;
  const description = t('seo.default.description');
  const imageUrl = t('seo.fb.image.url');
  const imageAlt = t('seo.image.alt');
  const siteUrl = t('seo.url');

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: t('seo.site_name'),
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
      locale: params.lang,
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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: keyof typeof ui;
  };
}) {
  return (
    <>
      <html lang={params.lang}>
        <body className={inter.className}>
          <Header lang={params.lang} />
          <GlobalSearch lang={params.lang} />
          <ErrorBoundary>{children}</ErrorBoundary>
          <Footer lang={params.lang} />
        </body>
      </html>
    </>
  );
}
