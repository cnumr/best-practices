import { ui } from '../../i18n/ui';
import { PagefindSearch } from './pagefind-search';

interface GlobalSearchProps {
  lang?: keyof typeof ui;
}

export default function GlobalSearch({ lang = 'fr' }: GlobalSearchProps) {
  return <PagefindSearch lang={lang} />;
}
