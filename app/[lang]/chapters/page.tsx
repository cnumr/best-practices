import {ui} from "../../../i18n/ui";
import chaptersData from './chapters.preval';
import {ChaptersConnectionQuery} from "../../../tina/__generated__/types";
import Link from "next/link";
export async function generateStaticParams() {
  const lang = Object.keys(ui);
  return lang.map((lang) => ({ lang }));
}

export default async function Page({ params }) {
  const { lang } = params;
  const { data }: { data: ChaptersConnectionQuery } = chaptersData;
  const entries = data.chaptersConnection.edges?.filter(
    (e) => e?.node?.language === lang
  );
  if (!entries) {
    return null;
  }
  return (
    <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
      <h1 data-pagefind-filter="type">Chapitres</h1>
      <section>
        <ul>
            {entries.map(e =>
              <li key={e?.cursor}>
                <Link href={`/${lang}/chapters/${e?.node?._sys.filename}`}>
                  {e?.node?._sys.filename}
                </Link>

              </li>
            )}
        </ul>
      </section>
    </main>
  );
  }