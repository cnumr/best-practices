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
  freeField?: boolean;
  link?: boolean;
  customTitle?: string;
}

export const FicheMetaItem: FunctionComponent<FicheMetaItemProps> = ({
  fiche,
  meta,
  fontSize = 'normal',
  displayTitle = false,
  collectionType = undefined,
  collectionTypeMeta = undefined,
  lang = 'fr',
  freeField = false,
  link = false,
  customTitle = undefined,
}) => {
  const values = fiche[meta];
  const toDisplay = values;
  const t = useTranslations(lang);
  const getValue = (value, freeField = false) => {
    // if value is a number
    if (typeof value === 'number') {
      return value;
    }
    return freeField ? value : t(value);
  };

  const getLink = (item, meta) => {
    if (!link) {
      return undefined;
    }
    if (item[meta] && item[meta]._sys.relativePath) {
      const relativePath = item[meta]._sys.relativePath
        .replace(`.mdx`, ``)
        .split('/');
      return (
        '/' + relativePath[0] + '/' + collectionType + '/' + relativePath[1]
      );
    }
    return undefined;
  };
  return Array.isArray(values) ? (
    <li
      className={cn('mb-2 mt-0', {
        'text-xs': fontSize === 'xs',
        'text-sm': fontSize === 'sm',
      })}>
      {displayTitle === true && (
        <strong>
          {customTitle !== undefined
            ? customTitle
            : // @ts-ignore
              capitalizeFirstLetter(t(meta))}{' '}
          :{' '}
        </strong>
      )}
      <ul className="mb-0 flex flex-col">
        {toDisplay.map((item, key) => {
          let it = '';
          const link = getLink(item, meta);
          if (typeof item === 'object') {
            it = item[meta]?.['title'];
          } else {
            it = getValue(item, freeField);
          }

          return (
            // relativePath
            <li
              key={key}
              className="my-2 max-h-5 p-0 leading-4"
              data-pagefind-filter="tags[data-content]"
              data-content={`${capitalizeFirstLetter(meta.replace('_', ' '))} → ${it}`}>
              {link ? <Link href={link}>{it}</Link> : <>→ {it}</>}
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
        <strong className="capitalize">
          {
            // @ts-ignore
            customTitle !== undefined ? customTitle : t(meta)
          }{' '}
          :{' '}
        </strong>
      )}
      {getValue(toDisplay, freeField) || 'TBD'}
    </li>
  );
};
