import {
  FichesConnectionEdges,
  FichesQuery,
} from '../../../tina/__generated__/types';
import {
  MESURE_ON_3,
  MESURE_ON_5,
  getRefConfig,
} from '../../../referentiel-config';
import { isStringInUi, useTranslations } from '../../../i18n/utils';

import { FunctionComponent } from 'react';
import { slugify } from '../../../src/js/utils';
import { ui } from '../../../i18n/ui';

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

  const getDataFilters = () => {
    let filters = {};
    if (getRefConfig().featuresEnabled.lifecycle) {
      filters = {
        ...filters,
        'data-lifecycle': slugify(fiche.lifecycle),
      };
    }
    if (getRefConfig().featuresEnabled.scope) {
      filters = {
        ...filters,
        'data-scope': fiche.scope.map((scope) => slugify(scope)).join(', '),
      };
    }
    if (getRefConfig().featuresEnabled.tiers) {
      filters = {
        ...filters,
        'data-tiers': slugify(fiche.tiers),
      };
    }
    if (getRefConfig().featuresEnabled.lifecycle) {
      filters = {
        ...filters,
        'data-saved_resources': fiche.saved_resources
          .map((saved_resources) => slugify(saved_resources))
          .join(', '),
      };
    }
    if (getRefConfig().featuresEnabled.moe) {
      filters = {
        ...filters,
        'data-moe': fiche.moe,
      };
    }
    if (getRefConfig().featuresEnabled.priority_implementation) {
      filters = {
        ...filters,
        'data-priority_implementation': fiche.priority_implementation,
      };
    }
    if (getRefConfig().featuresEnabled.environmental_impact) {
      filters = {
        ...filters,
        'data-environmental_impact': fiche.environmental_impact,
      };
    }
    return filters;
  };
  const getMetas = () => {
    const metas: string[] = [];
    if (
      getRefConfig().featuresEnabled.priority_implementation === MESURE_ON_5
    ) {
      metas.push(
        t("Priorité d'implémentation") + ': ' + fiche[`priority_implementation`]
      );
    }
    if (
      getRefConfig().featuresEnabled.priority_implementation === MESURE_ON_3
    ) {
      metas.push(
        t("Priorité d'implémentation") +
          ': ' +
          t(fiche[`priority_implementation`])
      );
    }
    if (getRefConfig().featuresEnabled.environmental_impact === MESURE_ON_5) {
      metas.push(
        t('Impact environnemental') + ': ' + fiche[`environmental_impact`]
      );
    }
    if (getRefConfig().featuresEnabled.environmental_impact === MESURE_ON_3) {
      metas.push(
        t('Impact environnemental') +
          ': ' +
          t(cleanImpact('environmental_impact'))
      );
    }
    if (getRefConfig().featuresEnabled.lifecycle) {
      metas.push(t('lifecycle') + ': ' + t(fiche.lifecycle));
    }
    if (getRefConfig().featuresEnabled.tiers) {
      metas.push(t('tiers') + ': ' + t(fiche.tiers));
    }
    if (getRefConfig().featuresEnabled.rgesnField) {
      metas.push(t('Correspondance RGESN') + ': ' + fiche.rgesn || `-`);
    }
    if (getRefConfig().featuresEnabled.moe) {
      metas.push(t('moe') + ': ' + fiche.moe);
    }
    if (getRefConfig().featuresEnabled.saved_resources) {
      metas.push(
        t('saved_resources') +
          ': ' +
          fiche.saved_resources
            .map((saved_resources) => t(saved_resources))
            .join(`, `)
      );
    }
    if (getRefConfig().featuresEnabled.scope) {
      metas.push(
        t('scope') + ': ' + fiche.scope.map((scope) => t(scope)).join(`, `)
      );
    }
    return metas.join(`\n`);
  };
  return (
    <div
      className="mb-0 mt-0 flex h-full flex-col justify-between gap-8 text-lg font-bold text-neutral"
      {...getDataFilters()}>
      <h2 className="m-0 flex flex-col items-start gap-2 text-lg font-bold text-neutral md:col-span-1 md:row-span-2 lg:flex-row">
        <span className="badge mr-2 flex-none whitespace-nowrap border-primary bg-primary">
          {REF_NAME}
          {fiche.refID}
        </span>
        <span className="flex-auto">{fiche.title}</span>
        <button
          role="img"
          title={getMetas()}
          className="size-6 flex-none text-primary">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="200px"
            width="200px"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </button>
      </h2>
      <div className="flex w-full flex-col gap-2">
        <div className="flex flex-row items-center justify-start gap-2">
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
              {`${t('Impact environnemental')}: ${
                fiche[`environmental_impact`]
              }`}
            </span>
          )}
        </div>
        <div className="mt-2 flex flex-row flex-wrap items-center justify-start gap-2 md:mt-0 md:gap-4">
          <span
            title={t('lifecycle')}
            className="badge border-primary text-xs text-neutral">
            {t('lifecycle')}:{' '}
            {isStringInUi(lang, fiche.lifecycle) && t(fiche.lifecycle)}
          </span>
          {getRefConfig().featuresEnabled.scope === true && (
            <>
              {fiche.scope.map((scope) => (
                <span
                  title={t('scope')}
                  className="badge border-primary text-xs text-neutral"
                  key={scope}>
                  {t('scope')}: {isStringInUi(lang, scope) && t(scope)}
                </span>
              ))}
            </>
          )}
          {getRefConfig().featuresEnabled.tiers === true && (
            <>
              <span
                title={t('tiers')}
                className="badge border-primary text-xs text-neutral"
                key={fiche.tiers}>
                {t('tiers')}:{' '}
                {isStringInUi(lang, fiche.tiers) && t(fiche.tiers)}
              </span>
            </>
          )}
        </div>
        {getRefConfig().featuresEnabled.rgesnField === true && (
          <div className="flex flex-row items-center justify-start gap-2 text-base text-primary">
            <span className="">
              {t('Correspondance RGESN')}: {fiche.rgesn || `-`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
