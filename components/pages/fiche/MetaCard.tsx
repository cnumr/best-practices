import { MESURE_ON_5, getRefConfig } from '../../../referentiel-config';

import { FicheMetaItem } from './MetaItem';
import { FichesQuery } from '../../../tina/__generated__/types';
import { FunctionComponent } from 'react';
import { Iconify } from '../../iconify';
import Link from 'next/link';
import { cn } from '../../../utils/cn';
import { ui } from '../../../i18n/ui';
import { useTranslations } from '../../../i18n/utils';

interface FicheMetaDisplayProps {
  className?: string;
  fiches: FichesQuery;
  tableOfContents?: any;
  lang?: keyof typeof ui;
}
export const FicheMetaDisplay: FunctionComponent<
  FicheMetaDisplayProps
> = (props: { className; fiches; tableOfContents; lang }) => {
  const fiche = props.fiches.fiches;
  const { tableOfContents, lang, className } = props;
  const t = useTranslations(lang);
  return (
    <aside>
      <div
        className={cn(
          `box flex flex-col border-neutral-transparent md:flex-row md:flex-wrap md:justify-between md:gap-4 lg:sticky lg:top-[80px] lg:mt-8 lg:flex-col`,
          className
        )}>
        <ul className="my-2 md:mb-0">
          {getRefConfig().featuresEnabled.rgesnField === true ? (
            <FicheMetaItem
              fiche={fiche}
              meta="rgesn"
              lang={lang}
              fontSize="sm"
              displayTitle
              freeField
              customTitle={t('Correspondance RGESN')}
            />
          ) : null}

          <FicheMetaItem
            fiche={fiche}
            meta="lifecycle"
            lang={lang}
            displayTitle
            fontSize="sm"
          />

          <FicheMetaItem
            fiche={fiche}
            meta="environmental_impact"
            lang={lang}
            fontSize="sm"
            displayTitle
          />

          {getRefConfig().featuresEnabled.moe === true && (
            <FicheMetaItem
              fiche={fiche}
              meta="moe"
              lang={lang}
              fontSize="sm"
              displayTitle
            />
          )}
          {getRefConfig().featuresEnabled.priority_implementation ===
            MESURE_ON_5 && getRefConfig().featuresEnabled.moe === true ? (
            <FicheMetaItem
              fiche={{
                'priority-level': fiche['priority_implementation'],
              }}
              meta="priority-level"
              lang={lang}
              fontSize="sm"
              displayTitle
            />
          ) : (
            <FicheMetaItem
              fiche={fiche}
              meta="priority_implementation"
              lang={lang}
              fontSize="sm"
              displayTitle
            />
          )}
          {getRefConfig().featuresEnabled.scope === true ? (
            <FicheMetaItem
              fiche={fiche}
              meta="scope"
              lang={lang}
              fontSize="sm"
              displayTitle
            />
          ) : null}
          {getRefConfig().featuresEnabled.tiers === true ? (
            <FicheMetaItem
              fiche={fiche}
              meta="tiers"
              lang={lang}
              fontSize="sm"
              displayTitle
            />
          ) : null}
          <FicheMetaItem
            fiche={fiche}
            meta="responsible"
            lang={lang}
            collectionType="personas"
            collectionTypeMeta="shortName"
            fontSize="sm"
            displayTitle
            link={getRefConfig().featuresEnabled.linkToPersonas}
          />
        </ul>
        <div className="border-t-2 border-neutral-transparent md:border-r-2 lg:border-t-2"></div>
        <ul className="my-2 md:mb-0">
          <FicheMetaItem
            fiche={fiche}
            meta="saved_resources"
            lang={lang}
            fontSize="sm"
            displayTitle
          />
        </ul>
        <div className="border-t-2 border-neutral-transparent md:border-r-2 lg:border-r-0"></div>
        <div className="my-2 text-sm md:mb-0">
          <p className="mb-0 font-bold">{t('Sommaire :')}</p>
          {/*
    <!-- <nav
        aria-label="navigation article"
        className="summary-article"
        dangerouslySetInnerHTML={{ __html: tableOfContents }}
        /> -->
     */}
          <nav
            aria-label="navigation article"
            className="summary-article">
            <ul>
              {tableOfContents?.map((h, key) => {
                return (
                  <li key={key}>
                    {' '}
                    <a href={`${h.slug}`}>{h.text}</a>
                  </li>
                );
              })}
              <li>
                <a href="#principe-de-validations">
                  {t('Principe de validation')}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <pre>{JSON.stringify(fiche, null, 2)}</pre> */}
    </aside>
  );
};
