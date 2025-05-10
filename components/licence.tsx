import Link from 'next/link';
import { useTranslations } from '../i18n/utils';
import { Iconify } from './iconify';
import { FunctionComponent } from 'react';
import { ui } from '../i18n/ui';

interface LicenceProps {
  lang?: keyof typeof ui;
  size?: string;
}
const Licence: FunctionComponent<LicenceProps> = ({
  lang = 'fr',
  size = 'base',
}) => {
  const t = useTranslations(lang);
  return (
    <Link
      href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr"
      target={`_blank`}
      className={`flex items-center gap-1 ${size === 'sm' ? 'text-xs' : 'text-base'}`}
      title={t(
        'Consulter le contenu de la licence CC BY-NC-ND 4.0 (site externe)'
      )}>
      {t('Sous licence CC BY-NC-ND 4.0')}
      <Iconify
        icon="tabler:creative-commons"
        width={16}
        height={16}
      />
      <Iconify
        icon="tabler:creative-commons-by"
        width={16}
        height={16}
      />
      <Iconify
        icon="tabler:creative-commons-nc"
        width={16}
        height={16}
      />
      <Iconify
        icon="tabler:creative-commons-nd"
        width={16}
        height={16}
      />
    </Link>
  );
};

export default Licence;
