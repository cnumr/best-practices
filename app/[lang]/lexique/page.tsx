import { useTranslations } from '../../../i18n/utils';
import {
  Lexique,
  LexiqueConnectionQuery,
} from '../../../tina/__generated__/types';
import lexiqueData from './lexique.preval';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { MdxComponents } from '../../../components/mdx/mdx-components';
import Link from 'next/link';
export default async function Home({ params }) {
  const { lang } = params;
  const { data }: { data: LexiqueConnectionQuery } = lexiqueData;
  const t = useTranslations(lang);
  const entries = data.lexiqueConnection.edges?.filter(
    (e) => e?.node?.language === lang
  );
  if (!entries) {
    return null;
  }
  const byGroup: { node: Lexique }[][] = entries.reduce((r, a) => {
    if (a?.node) {
      r[a.node.title.slice(0, 1)] = [...(r[a.node.title.slice(0, 1)] || []), a];
    }
    return r;
  }, []);
  return (
    <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
      <h1 data-pagefind-filter="type">{t('Lexique')}</h1>
      <ul
        className="mb-2 flex flex-wrap items-start gap-2"
        data-pagefind-body>
        {Object.keys(byGroup).map((entry, index) => {
          return (
            <li
              key={entry}
              className="m-0 mb-4 list-none whitespace-nowrap leading-none">
              <Link
                href={`#${entry}`}
                className="badge text-sm text-neutral no-underline transition hover:bg-primary-transparent">
                {entry}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* filters */}
      <ul>
        {Object.entries(byGroup).map((groupedEntry, index) => {
          return (
            <li key={groupedEntry[0]}>
              <ul id={`${groupedEntry[0]}`}>
                {groupedEntry[1].map((entry, index) => {
                  if (entry?.node)
                    return (
                      <li
                        key={entry?.node.id}
                        className="box mb-6 border-neutral-transparent pb-0">
                        <h2 className="mb-4 mt-0 text-neutral">
                          {entry?.node.title}
                        </h2>
                        <TinaMarkdown
                          content={entry?.node.body}
                          components={MdxComponents}
                        />
                      </li>
                    );
                  else return null;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
