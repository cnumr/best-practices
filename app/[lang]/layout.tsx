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

  return {
    title: `${t('seo.site_name')}${getRefConfig().i18n.refTitles[params.lang].long} | Collectif Green IT`,
    description: `${t('seo.default.description')}`,
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
          {children}
          <Footer lang={params.lang} />
        </body>
      </html>
    </>
  );
}
