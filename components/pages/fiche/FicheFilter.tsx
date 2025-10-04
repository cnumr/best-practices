import {
  MESURE_ON_3,
  MESURE_ON_5,
  getRefConfig,
} from '../../../referentiel-config';
import {
  environmental_impactOptions,
  lifecycleOptions,
  moeOptions,
  priority_implementationOptions,
  saved_resourcesOptions,
  scopeOptions,
  tiersOptions,
} from '../../../src/content/constants';

import { CardType } from '../../../model/cardType';
import { FichesConnectionEdges } from '../../../tina/__generated__/types';
import { FunctionComponent } from 'react';
import { Iconify } from '../../iconify';
import { slugify } from '../../../src/js/utils';
import { ui } from '../../../i18n/ui';
import { useTranslations } from '../../../i18n/utils';

interface FichesCardFilterProps {
  entries: any[];
  lang?: keyof typeof ui;
  type?: string;
}

const REF_NAME = process.env.TINA_PUBLIC_REF_NAME ?? 'RWEB';

const getDatas = (entries: any[], t: any) => {
  const datas: any[] = [];
  entries.forEach((entry: FichesConnectionEdges) => {
    const node = entry.node;
    if (!node) return;
    Object.keys(node)
      .sort()
      .forEach((key) => {
        if (getRefConfig().featuresEnabled.filters.includes(key)) {
          // création de l'item du tableau de données si pas déjà existant
          if (!datas.find((data) => data.name === key)) {
            datas.push({
              name: key,
              values: [],
            });
          }
          if (
            !datas
              .find((data) => data.name === key)
              .values.includes(entry.node?.[key])
          ) {
            if (Array.isArray(entry.node?.[key])) {
              datas
                .find((data) => data.name === key)
                // @ts-ignore
                .values.push(...entry.node?.[key]);
            } else {
              datas
                .find((data) => data.name === key)
                .values.push(entry.node?.[key]);
            }
          }
        }
      });
    // nettoyage des valeurs en double
    datas.forEach((data) => {
      data.values = [...new Set(data.values)];
    });
    // trie des valeurs par ordre alphabétique
    datas.forEach((data) => {
      data.values.sort((a, b) => {
        if (typeof a === 'number' && typeof b === 'number') {
          return a - b;
        }
        if (t(a) < t(b)) {
          return -1;
        }
        if (t(b) < t(a)) {
          return 1;
        }
        return 0;
      });
    });
  });
  return datas;
};

const getStyles = () => {
  const styleDatas: { name: string; values: any }[] = [];
  if (getRefConfig().featuresEnabled.lifecycle) {
    styleDatas.push({
      name: 'lifecycle',
      values: lifecycleOptions[REF_NAME]?.map((item) => item.value),
    });
  }
  if (getRefConfig().featuresEnabled.scope) {
    styleDatas.push({
      name: 'scope',
      values: scopeOptions.map((item) => item.value),
    });
  }
  if (getRefConfig().featuresEnabled.saved_resources) {
    styleDatas.push({
      name: 'saved_resources',
      values: saved_resourcesOptions.map((item) => item.value),
    });
  }
  if (getRefConfig().featuresEnabled.tiers) {
    styleDatas.push({
      name: 'tiers',
      values: tiersOptions.map((item) => item.value),
    });
  }
  if (getRefConfig().featuresEnabled.moe) {
    styleDatas.push({
      name: 'moe',
      values: moeOptions,
    });
  }
  if (getRefConfig().featuresEnabled.environmental_impact === MESURE_ON_5) {
    styleDatas.push({
      name: 'environmental_impact',
      values: environmental_impactOptions[MESURE_ON_5],
    });
  }
  if (getRefConfig().featuresEnabled.environmental_impact === MESURE_ON_3) {
    styleDatas.push({
      name: 'environmental_impact',
      values: environmental_impactOptions[MESURE_ON_3].map(
        (item) => item.value
      ),
    });
  }
  if (getRefConfig().featuresEnabled.priority_implementation === MESURE_ON_5) {
    styleDatas.push({
      name: 'priority_implementation',
      values: priority_implementationOptions[MESURE_ON_5],
    });
  }
  if (getRefConfig().featuresEnabled.priority_implementation === MESURE_ON_3) {
    styleDatas.push({
      name: 'priority_implementation',
      values: priority_implementationOptions[MESURE_ON_3].map(
        (item) => item.value
      ),
    });
  }

  return styleDatas.map((item) => {
    return item?.values?.map((child) => {
      return `.group:has(#cb_${slugify(item.name)}_${slugify(child)}:checked)
                    .tohide:not(:has([data-${slugify(item.name)}*="${slugify(child)}"])) {
                    animation: slideaway 200ms;
                    display: none;
                }`;
    });
  });
};

export const FichesCardFilter: FunctionComponent<FichesCardFilterProps> = ({
  entries,
  lang = 'fr',
  type = CardType.FICHES,
}) => {
  const t = useTranslations(lang);
  const datas: any[] = getDatas(entries, t);
  const styles = getStyles();
  return (
    <section className="group flex flex-col gap-4">
      <div className="grid-cols-1 sm:col-span-3">
        <label
          htmlFor="filter-state"
          role="button"
          className="btn btn-outline inline-flex items-center gap-2 p-3">
          <span>
            <span className="inline group-has-[#filter-state:checked]:hidden">
              {t('Afficher')}
            </span>
            <span className="hidden group-has-[#filter-state:checked]:inline">
              {t('Masquer')}
            </span>{' '}
            {t('les filtres')}
          </span>
          <input
            id="filter-state"
            type="checkbox"
            className="hidden"
          />
          <Iconify
            icon="tabler:circle-chevron-right"
            className="inline group-has-[#filter-state:checked]:hidden"
            width={24}
            height={24}
            aria-hidden="true"
          />
          <Iconify
            icon="tabler:circle-chevron-down"
            className="hidden group-has-[#filter-state:checked]:inline"
            width={24}
            height={24}
            aria-hidden="true"
          />
        </label>
      </div>
      <div className="hidden grid-cols-1 gap-3 rounded border border-primary p-4 group-has-[#filter-state:checked]:grid sm:grid-cols-3">
        <div className="col-span-3 hidden">
          <h2 className="font-black">{t('Catégories')}</h2>
        </div>
        {datas.map((item, key) => {
          return (
            <div key={key}>
              <p className="mb-2 font-black">{t(item.name)}</p>
              <ul className="flex flex-col gap-1">
                {item.values.map((child, key) => {
                  return (
                    <li
                      key={key}
                      className="flex items-center gap-2">
                      <input
                        id={`cb_${slugify(item.name)}_${slugify(child)}`}
                        type="checkbox"
                        value={slugify(child)}
                      />
                      <label
                        htmlFor={`cb_${slugify(item.name)}_${slugify(child)}`}
                        role="button">
                        {t(child) || child}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <style>{styles.join('\n').replaceAll(',', '\n')}</style>
    </section>
  );
};
