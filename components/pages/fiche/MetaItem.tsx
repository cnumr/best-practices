import { FichesQuery } from '../../../tina/__generated__/types';
import { FunctionComponent } from 'react';
import { Iconify } from '../../iconify';
import Link from 'next/link';
import { capitalizeFirstLetter } from '../../../src/js/utils';
import { cn } from '../../../utils/cn';
import { tinaField } from 'tinacms/dist/react';
import { ui } from '../../../i18n/ui';
import { useTranslations } from '../../../i18n/utils';

interface FicheMetaItemProps {
  fiche: FichesQuery | { 'priority-level': any };
  meta: string;
  fontSize?: string;
  displayTitle?: boolean;
  collectionType?: string;
  collectionTypeMeta?: string;
  lang?: keyof typeof ui;
}

export const FicheMetaItem: FunctionComponent<FicheMetaItemProps> = ({
  fiche,
  meta,
  fontSize = 'normal',
  displayTitle = false,
  collectionType = undefined,
  collectionTypeMeta = undefined,
  lang = 'fr',
}) => {
  const values = fiche[meta];
  const toDisplay = values;
  const t = useTranslations(lang);
  const getValue = (value) => {
    // if value is a number
    if (typeof value === 'number') {
      return value;
    }
    return t(value);
  };
  return Array.isArray(values) ? (
    <li
      className={cn('mb-2 mt-0', {
        'text-xs': fontSize === 'xs',
        'text-sm': fontSize === 'sm',
      })}>
      {displayTitle === true && (
        // @ts-ignore
        <strong>{capitalizeFirstLetter(t(meta))} : </strong>
      )}
      {/* <ul className="mb-0">
        {toDisplay.map(async (item, key) => {
          if (item !== null && typeof item === "object") {
            const value = await getDatas({
              meta,
              collectionType,
              collectionTypeMeta,
              item,
            });
            return (
              <li
              key={key}
                className="my-2 max-h-5 whitespace-nowrap p-0 leading-4"
                data-pagefind-filter="tags[data-content]"
                data-content={`${capitalizeFirstLetter(meta.replace("_", " "))} → ${value.label}`}
              >
                →
                {getRefConfig().featuresEnabled.linkToPersonas === true ? (
                  <a href={value.path} className="uppercase">
                    {value.label}
                  </a>
                ) : (
                  <span className="uppercase">{value.label}</span>
                )}
              </li>
            );
          }
          return (
            <li
              key={key}
              className="my-2 max-h-5 whitespace-nowrap p-0 leading-4"
              data-pagefind-filter="tags[data-content]"
              data-content={`${capitalizeFirstLetter(meta.replace("_", " "))} → ${getValue(item)}`}
            >
              → {getValue(item)}
            </li>
          );
        })}
      </ul> */}
      <ul className="mb-0 flex flex-col">
        {toDisplay.map((item, key) => {
          let it = '';
          if (typeof item === 'object') {
            it = item[meta]['title'];
          } else {
            it = getValue(item);
          }

          return (
            <li
              key={key}
              className="my-2 max-h-5 p-0 leading-4"
              data-pagefind-filter="tags[data-content]"
              data-content={`${capitalizeFirstLetter(meta.replace('_', ' '))} → ${it}`}>
              → {it}
            </li>
          );
        })}
      </ul>
    </li>
  ) : (
    <li
      // @ts-ignore
      data-tina-field={tinaField(fiche, meta)}
      className={cn('mb-2 mt-0 max-h-5 whitespace-nowrap last:mb-0', {
        'text-xs': fontSize === 'xs',
        'text-sm': fontSize === 'sm',
      })}>
      {displayTitle === true && (
        // @ts-ignore
        <strong className="capitalize">{t(meta)} : </strong>
      )}
      {getValue(toDisplay) || 'TBD'}
    </li>
  );
};
