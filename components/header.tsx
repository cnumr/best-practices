import { getRefConfig } from '../referentiel-config';
import { FunctionComponent } from 'react';
import { useTranslations } from '../i18n/utils';
import { ui } from '../i18n/ui';
import Link from 'next/link';
import { Iconify } from './iconify';
import { LanguagePicker } from './language-picker';
interface HeaderProps {
  lang?: keyof typeof ui;
}
const Header: FunctionComponent<HeaderProps> = ({ lang = 'fr' }) => {
  const t = useTranslations(lang);
  const repoURL =
    process.env.PUBLIC_REPO_URL || 'https://github.com/cnumr/best-practices';
  return (
    <>
      <header
        className={
          'sticky top-0 z-20 flex min-h-[80px] border-b-2 border-neutral-light bg-neutral px-4 lg:px-0'
        }>
        <div className="mx-auto flex w-full flex-row items-center justify-between lg:max-w-5xl">
          <div className="flex items-center gap-4">
            <div>
              <Link
                href={`/${lang}`}
                className="text-inherit text-white no-underline"
                title={t("Retour à l'accueil")}>
                <span className="font-normal">{t('seo.site_name')}</span>
                <br />
                <span className="text-xl font-bold leading-none">
                  {
                    getRefConfig(process.env.NEXT_PUBLIC_REF_NAME).i18n
                      .refTitles[lang]['short']
                  }
                  <span className="pl-2 text-sm">
                    {getRefConfig().refInformations.currentVersion}
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <nav
            aria-label="Navigation principale"
            className="flex items-center">
            <ul className="menu fixed right-0 top-0 z-50 hidden flex-col gap-4 bg-primary px-10 py-16 lg:relative lg:m-0 lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:p-0">
              <li className="z-90 fixed right-5 top-3 lg:hidden">
                <button
                  data-menu-button
                  className="text-right text-4xl text-white">
                  &times;
                </button>
              </li>
              <li className="!m-0">
                <Link
                  href={`/${lang}/chapters`}
                  className={`text-xl font-medium text-inherit text-white no-underline lg:text-base`}
                  title={t('Consulter les Bonnes pratiques')}>
                  {t('Bonnes pratiques')}
                </Link>
              </li>
              {getRefConfig(process.env.NEXT_PUBLIC_REF_NAME).featuresEnabled
                .lexique && (
                <li className="!m-0">
                  <Link
                    href={`/${lang}/lexique`}
                    className={`text-xl font-medium text-inherit text-white no-underline lg:text-base`}
                    title={t('Consulter le Lexique')}>
                    {t('Lexique')}
                  </Link>
                </li>
              )}

              {/*
          <li class="!m-0 lg:hidden">
            <a
            href={translatePath("/personas/")}
            class={`text-white text-xl lg:text-base no-underline text-inherit font-medium`}
            title={t("Consulter les Personas")}
            >
            {t("Personas")}
          </a>
        </li>
            */}
              <li
                className={`!m-0 border border-primary-focus lg:h-7 lg:border-zinc-200`}></li>
              <li className="!m-0">
                <a
                  href={`${repoURL}/blob/main/CONTRIBUTING.md`}
                  className={`inline-flex items-center gap-[.15rem] text-xl font-medium text-inherit text-white no-underline lg:text-base`}
                  target="_blank"
                  rel="noreferrer"
                  title={t(
                    'Voir la méthode de contribution sur le GitHub du CNUMR'
                  )}>
                  {t('Contribuez !')}
                </a>
              </li>
              <li className="!m-0">
                <Link
                  href={repoURL}
                  className={`inline-flex items-center gap-[.15rem] text-xl font-medium text-inherit text-white no-underline lg:text-base`}
                  target="_blank"
                  rel="noreferrer"
                  title={t('Voir le repository GitHub de CNUMR')}
                  aria-label={t('Voir le repository GitHub de CNUMR')}>
                  <Iconify
                    icon="tabler:brand-github-filled"
                    width={16}
                    height={16}
                    aria-hidden="true"
                  />
                </Link>
              </li>
              <li className="!m-0">
                <LanguagePicker
                  lang={lang}
                  style="dark"
                />
              </li>
            </ul>
            {/* mobile bt */}[
            <button
              data-menu-button
              className="text-3xl text-white lg:hidden">
              &#9776;
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
