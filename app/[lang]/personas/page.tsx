import { useTranslations } from "../../../i18n/utils";
import { PersonasConnectionQuery } from "../../../tina/__generated__/types";
import fichesData from "./personas.preval";
import Link from "next/link";

export default async function Home({ params }) {
  const { lang } = params;
  const { data }: { data: PersonasConnectionQuery } = fichesData;
  const t = useTranslations(lang);
  const entries = data.personasConnection.edges?.filter(
    (e) => e?.node?.language === lang
  );
  return (
    <main className="mx-auto my-8 min-h-[400px] px-4 lg:max-w-5xl lg:px-0">
      <div className="group flex flex-col gap-4">
        <h1 className="mb-2">{t("Personas")}</h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 group-has-[#bt-view:checked]:hidden">
            <ul
              className="wp-list"
              data-pagefind-ignore>
              {entries?.map((entry) => {
                if (entry?.node) {
                  return (
                    <>
                      <Link
                        key={entry?.node.id}
                        href={`/${lang}/personas/${entry.node._sys.filename}`}>
                        {entry.node.title}
                      </Link>
                    </>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
