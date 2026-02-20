'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { ui } from '../../i18n/ui';

interface PagefindResult {
  url: string;
  meta?: {
    title?: string;
    refid?: string;
  };
  excerpt?: string;
}

interface PagefindSearchProps {
  lang?: keyof typeof ui;
}

export function PagefindSearch({ lang = 'fr' }: PagefindSearchProps) {
  const [pagefind, setPagefind] = useState<any>(null);
  const [pagefindReady, setPagefindReady] = useState(false);
  const [pagefindError, setPagefindError] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PagefindResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPagefind = async () => {
      try {
        // @ts-ignore - Pagefind is generated at build time
        const pf = await import(/* webpackIgnore: true */ '/pagefind/pagefind.js');
        await pf.options({ baseUrl: '/' });
        setPagefind(pf);
        setPagefindReady(true);
      } catch (error) {
        console.warn('Pagefind not available (run pnpm build-local first)');
        setPagefindError(true);
      }
    };
    loadPagefind();
  }, []);

  const handleSearch = useCallback(
    async (searchQuery: string) => {
      if (!pagefind || !searchQuery.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const search = await pagefind.search(searchQuery, {
          filters: { lang: lang },
        });
        const allResults = await Promise.all(
          search.results.slice(0, 20).map(async (r: any) => await r.data())
        );
        setResults(allResults);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    },
    [pagefind, lang]
  );

  useEffect(() => {
    const debounce = setTimeout(() => {
      handleSearch(query);
    }, 200);
    return () => clearTimeout(debounce);
  }, [query, handleSearch]);

  return (
    <div className="relative mx-auto px-4 pt-4 lg:max-w-5xl lg:px-0">
      <input
        className="w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={pagefindReady || pagefindError ? 'Rechercher...' : 'Chargement...'}
      />

      {pagefindError && query && (
        <div className="absolute z-[15] w-full bg-yellow-50 p-4 shadow lg:max-w-5xl">
          <p className="text-sm text-yellow-700">
            Recherche non disponible (lancez pnpm build-local)
          </p>
        </div>
      )}

      {loading && <div className="py-2 text-sm">Recherche...</div>}

      {pagefindReady && query && results.length > 0 && (
        <div className="absolute z-[15] max-h-[70vh] w-full overflow-auto bg-white p-4 shadow lg:max-w-5xl lg:p-8">
          <div className="text-s pb-4 font-bold">
            {results.length} résultat{results.length > 1 ? 's' : ''} pour &quot;{query}&quot;
          </div>

          <ul>
            {results.map((result, idx) => (
              <li key={idx} className="mb-4">
                <Link
                  href={result.url.replace('.html', '')}
                  onClick={() => setQuery('')}
                  className="font-medium hover:underline">
                  {result.meta?.refid && `[${result.meta.refid}] `}
                  {result.meta?.title || 'Sans titre'}
                </Link>
                {result.excerpt && (
                  <p
                    className="line-clamp-3 text-sm text-gray-600"
                    dangerouslySetInnerHTML={{ __html: result.excerpt }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {pagefindReady && query && !loading && results.length === 0 && (
        <div className="absolute z-[15] w-full bg-white p-4 shadow lg:max-w-5xl">
          <p className="text-sm text-gray-500">Aucun résultat pour &quot;{query}&quot;</p>
        </div>
      )}
    </div>
  );
}
