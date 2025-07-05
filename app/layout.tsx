import { Metadata } from 'next';
import { getRefConfig } from '../referentiel-config';
import { ui } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';

export async function generateMetadata({
  params,
}: {
  params: {
    lang: keyof typeof ui;
  };
}): Promise<Metadata> {
  const t = useTranslations('fr');

  return {
    title: `${t('seo.site_name')}${getRefConfig().i18n.refTitles.fr.long} | Collectif Green IT`,
    description: `${t('seo.default.description')}`,
    authors: [{ name: `Collectif Green IT` }, { name: `Association Green IT` }],
  };
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
