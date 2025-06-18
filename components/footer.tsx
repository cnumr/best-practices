import { FunctionComponent } from 'react';
import Image from 'next/image';
import { LanguagePicker } from './language-picker';
import Licence from './licence';
import Link from 'next/link';
import { getRefConfig } from '../referentiel-config';
import { ui } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';
interface FooterProps {
  lang?: keyof typeof ui;
}

const Footer: FunctionComponent<FooterProps> = ({ lang = 'fr' }) => {
  const t = useTranslations(lang);
  return (
    <footer className="mx-auto flex flex-col items-center gap-5 border-t-2 border-neutral-light px-4 pb-4 pt-4 md:flex-row md:justify-between lg:max-w-5xl lg:px-0">
      <div>
        <ul className="flex flex-col items-center gap-4 lg:flex-row">
          <li>
            <span>
              {process.env.TINA_PUBLIC_REF_NAME || 'RWEB'}©
              {getRefConfig().refInformations.creationYear}-
              <span id="copyright">{new Date().getFullYear().toString()}</span>
            </span>
          </li>
          <li className="hidden lg:inline">
            <span>&middot;</span>
          </li>
          <li>
            <Link
              href={`${lang}/mentions-legales`}
              title={t('Les mentions légales du site.')}>
              {t('Mentions légales')}
            </Link>
          </li>
          <li>
            <Link
              href="/admin/index.html"
              title={t('Contribuez !')}>
              Admin
            </Link>
          </li>
          <li>
            <LanguagePicker style="light" />
          </li>
        </ul>
        <Licence lang={lang} />
        <div className="text-center text-sm lg:text-left">
          {`${t('last-update')}: ${new Date().toLocaleDateString(lang)} @ ${new Date().toLocaleTimeString(
            lang,
            {
              hour: '2-digit',
              minute: '2-digit',
            }
          )}`}
        </div>
      </div>
      <div className="flex flex-col items-center gap-0 lg:items-end">
        <span>{t(`Site web fièrement réalisé par`)}</span>
        <Link
          className="inline-flex items-center gap-[.15rem] no-underline"
          target="_blank"
          rel="noreferrer"
          href="https://www.greenit.fr/"
          title={t(
            "Aller sur le site de l'association Green IT (site externe)"
          )}>
          <Image
            width="175"
            height="55"
            src={'/logo-asso.png'}
            alt={t(
              "Logo association Green IT - lien sortant vers le site l'association Green IT"
            )}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
