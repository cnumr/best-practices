import CardView from '../../../components/card-view';
import { CardOrientation, CardType } from '../../../model/cardType';
import { useTranslations } from '../../../i18n/utils';
import {
  FichesConnectionEdges,
  FichesConnectionQuery,
} from '../../../tina/__generated__/types';
import { Fragment } from 'react';
import fichesData from './fiches.preval';
export default async function Home({ params }) {
  const { lang } = params;
  const { data }: { data: FichesConnectionQuery } = fichesData;
  const t = useTranslations(lang);
  const entries = data.fichesConnection.edges?.filter(
    (e) => e?.node?.language === lang
  );
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
            {/* filters */}
            {/*{entries && <FichesFilter />}*/}

            {/* cards */}
            <ul
              className="wp-list"
              data-pagefind-ignore>
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
          {/*<div className="hidden group-has-[#bt-view:checked]:block">*/}
          {/*  <FichesTableView entries={entries} />*/}
          {/*</div>*/}
        </div>
      </div>
    </main>
  );
}
