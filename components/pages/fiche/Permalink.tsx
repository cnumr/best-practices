import { FunctionComponent } from 'react';
import { ui } from '../../../i18n/ui';
import { Iconify } from '../../iconify';
import { useTranslations } from '../../../i18n/utils';

interface FichePermalinkProps {
  lang?: keyof typeof ui;
}
export const FichePermalink: FunctionComponent<FichePermalinkProps> = ({
  lang = 'fr',
}) => {
  const t = useTranslations(lang);
  const alertMessage = t('Lien copié');
  const onCopy = (e) => {
    navigator.clipboard.writeText(window.location.href);
    e.target.insertAdjacentHTML(
      'afterend',
      `<div class='linktooltips-container font-bold'>${alertMessage}</div>`
    );
    setTimeout(() => {
      document
        .querySelectorAll('.linktooltips-container')
        .forEach((el) => el.remove());
    }, 3000);
  };
  return (
    <div className="z-50 mt-4 lg:mt-0 lg:text-right">
      <a
        target="_blank"
        onClick={onCopy}
        className="copyLink btn btn-responsive btn-outline relative inline-flex items-center justify-end gap-4 font-normal no-underline">
        <Iconify
          icon="tabler:share"
          width={20}
          height={20}
        />
        <span>{t('Permalien')}</span>
      </a>
    </div>
  );
};
