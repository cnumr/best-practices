import { FunctionComponent } from 'react';
import { ui } from '../../i18n/ui';
import { FichesConnectionQuery, LexiqueConnectionQuery, PersonasConnectionQuery } from '../../tina/__generated__/types';
import fichesData from '../../app/[lang]/fiches/fiches.preval';
import lexiqueData from '../../app/[lang]/lexique/lexique.preval';
import personasData from '../../app/[lang]/personas/personas.preval';
import { InputSearch } from './input-search';
import { extractText } from '../../utils/extract-text';
import { transformPath } from '../../utils/transform-path';

interface GlobalSearchProps {
  lang?: keyof typeof ui;
}



const GlobalSearch: FunctionComponent<GlobalSearchProps> = ({ lang = 'fr' }) => {
  const { data: fiches }: { data: FichesConnectionQuery } = fichesData;
  const { data: lexique }: { data: LexiqueConnectionQuery } = lexiqueData;
  const { data: personas }: { data: PersonasConnectionQuery } = personasData;
  const entriesPersonas = personas.personasConnection.edges?.filter(
    (e) => e?.node?.language === lang
  ).map((e) => ({
    ...e?.node,
    link: `/${lang}/personas/${transformPath(e!.node!.id)}`,
    contentText: extractText(e?.node?.body)
  }));
  const entriesFiches = fiches.fichesConnection.edges?.filter(
    (e) => e?.node?.language === lang
  ).map((e) => ({
    ...e?.node,
    filterResponsibles: e?.node?.responsible?.map((r) => r?.responsible?.title),
    link: `/${lang}/fiches/${transformPath(e!.node!.id)}`,
    contentText: extractText(e?.node?.body)
  }));
  const entriesLexique = lexique.lexiqueConnection.edges?.filter(
    (e) => e?.node?.language === lang
  ).map((e) => ({
    ...e?.node,
    link: `/${lang}/lexique/${transformPath(e!.node!.id)}`,
    contentText: extractText(e?.node?.body)
  }));

  // @ts-ignore
  const list = [...entriesPersonas, ...entriesFiches, ...entriesLexique];

  return <InputSearch list={list} lang={lang} />
}

export default GlobalSearch;
