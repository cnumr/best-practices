'use client';

import { FunctionComponent, useCallback, useMemo, useState } from 'react';

import CheckboxGroup from './checkbox-group';
import Fuse from 'fuse.js';
import Link from 'next/link';
import itemsjs from 'itemsjs';
import { ui } from '../../i18n/ui';

interface InputSearchProps {
  list: any[];
  lang?: keyof typeof ui;
}

const configuration = {
  native_search_enabled: false,
  aggregations: {
    __typename: {
      title: 'Type',
      size: 10,
    },
    filterResponsibles: {
      title: 'Responsables',
      size: 100,
    },
  },
};

const fuseSearchOptions = {
  threshold: 0.3,
  location: 0,
  distance: 100,
  includeMatches: true,
  includeScore: true,
  useExtendedSearch: true,
  keys: ['title', 'contentText'],
};

export const InputSearch: FunctionComponent<InputSearchProps> = ({
  list,
  lang = 'fr',
}) => {
  const [searchPattern, setSearchPattern] = useState('');
  const [filterTypename, setFilterTypename] = useState([]);
  const [filterResponsibles, setFilterResponsibles] = useState([]);

  const itemsSearch = useMemo(() => itemsjs(list, configuration), [list]);

  const fuse = useMemo(() => new Fuse(list, fuseSearchOptions), [list]);

  const fuseSearch = useMemo(() => {
    return fuse.search(searchPattern);
  }, [fuse, searchPattern]);

  const result = useMemo(() => {
    return itemsSearch.search({
      per_page: 30,
      ids: fuseSearch.map((v) => v.item.id),
      filters: {
        __typename: filterTypename,
        filterResponsibles,
      },
    });
  }, [itemsSearch, fuseSearch, filterTypename, filterResponsibles]);

  const handleSearchPatternChange = useCallback((e) => {
    setSearchPattern(e.target.value);
  }, []);

  return (
    <div className="mx-auto pt-4 lg:max-w-5xl lg:px-0">
      <input
        className="w-full"
        onChange={handleSearchPatternChange}
        value={searchPattern}
        placeholder={'Rechercher'}
      />

      {searchPattern && (
        <div className="absolute z-50 max-h-[70vh] w-full overflow-auto bg-white p-4 shadow lg:max-w-5xl lg:p-8">
          <div className="text-s pb-4 font-bold">
            {result.pagination.total} résultats pour {searchPattern}
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="w-full flex-shrink-0 border-b border-black pb-4 lg:w-[200px] lg:border-b-0 lg:pb-0">
              <h3 className="m-0 text-sm font-bold">
                {result.data.aggregations.filterResponsibles.title}
              </h3>
              <CheckboxGroup
                options={result.data.aggregations.filterResponsibles.buckets}
                setSelectedOptions={setFilterResponsibles}
                selectedOptions={filterResponsibles}
              />
              <h3 className="m-0 text-sm font-bold">
                {result.data.aggregations.__typename.title}
              </h3>
              <CheckboxGroup
                options={result.data.aggregations.__typename.buckets}
                setSelectedOptions={setFilterTypename}
                selectedOptions={filterTypename}
              />
            </div>
            <ul>
              {result.data.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item?.link}
                    onClick={() => setSearchPattern('')}>
                    {item?.title}
                  </Link>
                  <p className="line-clamp-5 text-sm">{item.contentText}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
