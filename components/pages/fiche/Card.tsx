import { FunctionComponent } from 'react';
import { ui } from '../../../i18n/ui';
import {
  FichesConnectionEdges,
  FichesQuery,
} from '../../../tina/__generated__/types';
import { isStringInUi, useTranslations } from '../../../i18n/utils';
import {
  MESURE_ON_3,
  MESURE_ON_5,
  getRefConfig,
} from '../../../referentiel-config';
import { slugify } from '../../../src/js/utils';

interface FicheCardProps {
  item: FichesConnectionEdges;
  lang?: keyof typeof ui;
}

const PUBLIC_BASE = process.env.PUBLIC_BASE ? process.env.PUBLIC_BASE : '';
const REF_NAME = process.env.NEXT_PUBLIC_REF_NAME
  ? process.env.NEXT_PUBLIC_REF_NAME
  : '';

export const FicheCard: FunctionComponent<FicheCardProps> = ({
  item,
  lang = 'fr',
}) => {
  const fiche: any = item.node;

  //   console.log(
  //     `environmental_impact`,
  //     getRefConfig().featuresEnabled.environmental_impact
  //   );

  const t = useTranslations(lang);

  function cleanImpact(meta) {
    // TODO: replace with a proper translation
    let regexp: RegExp;
    switch (lang) {
      case 'es':
        regexp = /t("Fort")|t("Moyen")|t("Faible")/gi;
        break;
      case 'en':
        regexp = /t("High")|t("Medium")|t("Low")/gi;
        break;
      default:
        regexp = /t("Fuerte")|t("Medio")|t("Débil")/gi;
        break;
    }
    return fiche[`${meta}`]?.replace(regexp, ' ') || 'TBD';
  }

  const getScope = () => {
    if (getRefConfig().featuresEnabled.scope === true) {
      return { 'data-scope': slugify(fiche.scope || '') };
    }
  };
  return (
    <div
      className="mb-0 mt-0 text-lg font-bold text-neutral md:grid md:grid-cols-[2fr_1fr] md:grid-rows-2 md:gap-2"
      data-lifecycle={slugify(fiche.lifecycle)}
      {...getScope()}
      data-saved_resources={slugify(fiche.saved_resources.join(' '))}>
      <h2 className="m-0 flex flex-row items-start text-lg font-bold text-neutral md:col-span-1 md:row-span-2">
        <span className="badge mr-2 whitespace-nowrap border-primary bg-primary">
          {REF_NAME}
          {fiche.refID}
        </span>
        <span>{fiche.title}</span>
      </h2>
      <div className="flex flex-row items-center justify-end gap-2">
        {typeof fiche[`priority_implementation`] === 'number' ? (
          <span
            title={t("Priorité d'implémentation")}
            aria-label={`${t("Priorité d'implémentation")} : ${
              fiche[`priority_implementation`]
            }`}
            role="img"
            className="text-base">
            {t("Priorité d'implémentation") +
              ' ' +
              fiche[`priority_implementation`]}
          </span>
        ) : (
          <span
            title={t("Priorité d'implémentation")}
            aria-label={`${t("Priorité d'implémentation")} : ${
              fiche[`priority_implementation`]
            }`}
            role="img">
            {t(cleanImpact('priority_implementation'))}
          </span>
        )}
        <span>|</span>
        {getRefConfig().featuresEnabled.environmental_impact ===
          MESURE_ON_3 && (
          <span
            title={t('Impact environnemental')}
            aria-label={`${t('Impact environnemental')} : ${
              fiche[`environmental_impact`]
            }`}>
            {t(cleanImpact('environmental_impact'))}
          </span>
        )}
        {getRefConfig().featuresEnabled.environmental_impact ===
          MESURE_ON_5 && (
          <span
            title={t('Impact environnemental')}
            aria-label={`${t('Impact environnemental')} : ${t(
              fiche[`environmental_impact`]
            )}`}
            className="text-base">
            {`${t('Impact environnemental')} : ${t(
              fiche[`environmental_impact`]
            )}`}
          </span>
        )}
      </div>
      <div className="mt-2 flex flex-row items-center justify-end gap-2 md:mt-0 md:gap-4">
        <span
          title={t('lifecycle')}
          className="badge border-primary text-xs text-neutral">
          {isStringInUi(lang, fiche.lifecycle) && t(fiche.lifecycle)}
        </span>
        {getRefConfig().featuresEnabled.scope === true && (
          <span
            title={t('scope')}
            className="badge border-primary text-xs text-neutral">
            {isStringInUi(lang, fiche.scope) && t(fiche.scope)}
          </span>
        )}
      </div>
    </div>
  );
};
