'use client';
import Fuse from 'fuse.js';
import { FunctionComponent, useState, useMemo, useCallback } from 'react';
import { ui } from '../../i18n/ui';
import Link from 'next/link';
import itemsjs from 'itemsjs';
import CheckboxGroup from './checkbox-group';

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

export const InputSearch: FunctionComponent<InputSearchProps> = ({ list, lang = 'fr' }) => {
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
      ids: fuseSearch.map(v => v.item.id),
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
        placeholder={"Rechercher"}
      />

      {searchPattern && (
        <div className="shadow absolute z-50 bg-white p-8 lg:max-w-5xl overflow-auto w-full max-h-[70vh]">
          <div className="text-s font-bold pb-4">
            {result.pagination.total} résultats pour {searchPattern}
          </div>
          <div className="flex">
            <div className="w-[200px] flex-shrink-0">
              <h3 className="text-sm font-bold m-0">{result.data.aggregations.filterResponsibles.title}</h3>
              <CheckboxGroup
                options={result.data.aggregations.filterResponsibles.buckets}
                setSelectedOptions={setFilterResponsibles}
                selectedOptions={filterResponsibles}
              />
              <h3 className="text-sm font-bold m-0">{result.data.aggregations.__typename.title}</h3>
              <CheckboxGroup
                options={result.data.aggregations.__typename.buckets}
                setSelectedOptions={setFilterTypename}
                selectedOptions={filterTypename}
              />
            </div>
            <ul>
              {result.data.items.map((item) => (
                <li key={item.id}>
                  <Link href={item?.link} onClick={() => setSearchPattern('')}>
                    {item?.title}
                  </Link>
                  <p className="text-sm line-clamp-5">{item.contentText}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
