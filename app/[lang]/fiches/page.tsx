import { CardOrientation, CardType } from '../../../model/cardType';
import { FichesConnectionEdges, FichesConnectionQuery } from '../../../tina/__generated__/types';

import CardView from '../../../components/card-view';
import { FichesCardFilter } from '../../../components/pages/fiche/FicheFilter';
import { FichesTableView } from '../../../components/pages/fiche/TableView';
import { Fragment } from 'react';
import { useTranslations } from '../../../i18n/utils';
import { ui } from '../../../i18n/ui';
import { client } from '../../../tina/__generated__/databaseClient';

export async function generateStaticParams() {
  const lang = Object.keys(ui);
  return lang.map((lang) => ({ lang }));
}

export default async function Home({ params }) {
  const { lang } = params;
  const { data }: { data: FichesConnectionQuery } = await client.queries.fichesConnection({
    first: 1000,
    filter: {
      language: {
        eq: lang,
      },
      published: {
        eq: true,
      },
    },
  });
  const t = useTranslations(lang);
  const entries = data.fichesConnection.edges;

  if (!entries) {
    return null;
  }
  return (
    <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
      <div className="group flex flex-col gap-4">
        <h1 className="mb-2">{t('Bonnes pratiques')}</h1>
        <div className="flex flex-col gap-8">
          <nav className="flex items-center gap-4">
            <label
              htmlFor="bt-view"
              className="btn small-primary-btn"
              role="button">
              <input
                type="checkbox"
                className="checked:is-checked peer hidden"
                id="bt-view"
              />
              <span className="hidden peer-checked:inline">
                {t('Vue en cartes')}
              </span>
              <span className="inline peer-checked:hidden">
                {t('Vue en tableau (pour copier/coller)')}
              </span>
            </label>
          </nav>
          <div className="flex flex-col gap-4 group-has-[#bt-view:checked]:hidden">
            {entries && <FichesCardFilter entries={entries} lang={lang} type={CardType.FICHES} />}

            <ul
              className="wp-list-col">
              {entries?.map((entry) => (
                <Fragment key={entry?.node?.id}>
                  <CardView
                    display={CardOrientation.VERTICAL_LAYOUT}
                    type={CardType.FICHES}
                    entry={entry as FichesConnectionEdges}
                    lang={lang}
                  />
                </Fragment>
              ))}
            </ul>
          </div>
          <div className="hidden group-has-[#bt-view:checked]:block">
            <FichesTableView entries={entries} lang={lang} type={CardType.FICHES} />
          </div>
        </div>
      </div>
    </main>
  );
}
