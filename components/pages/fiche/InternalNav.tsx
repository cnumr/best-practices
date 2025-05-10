import { FunctionComponent } from "react";
import { cn } from "../../../utils/cn";
import { transformPath } from "../../../utils/transform-path";
import { ui } from "../../../i18n/ui";
import { useTranslations } from "../../../i18n/utils";

interface InternalNavigationProps {
  previousPage: any;
  nextPage: any;
  lang?: keyof typeof ui;
  className:string;
}

export const InternalNavigation: FunctionComponent<InternalNavigationProps> = ({
    previousPage,
    nextPage,
    lang = 'fr',
    className
}) => {
    const t = useTranslations(lang);
    return(<nav
  className={cn("blog-post-nav border-t-2 pt-4 mx-auto lg:max-w-5xl px-4 lg:px-0", className)}
  aria-label={t("Navigation entre les bonnes pratiques")}
>
  <ul
    className={
      cn("noliststyle grid",
      {
        "grid-cols-3": previousPage && nextPage,
        "grid-cols-2": !previousPage || !nextPage,
      },
    )}
  >
    {
      previousPage && (
        <li className="text-center md:text-left">
          <a
            href={`/${lang}/fiches/${transformPath(previousPage.node!.id)}`}
            rel="previousPage"
            className="no-underline"
          >
            ← <span className="hidden md:block">{previousPage.node!.title}</span>
          </a>
        </li>
      )
    }
    <li
      className={
        cn("",
        {
          "text-right": !previousPage,
          "text-left": !nextPage,
          "text-center": nextPage && previousPage,
        },
      )}
    >
    </li>
    {
      nextPage && (
        <li className="text-center md:text-right">
          <a
            href={`/${lang}/fiches/${transformPath(nextPage.node!.id)}`}
            rel="nextPage"
            className="no-underline"
          >
            → <span className="hidden md:block">{nextPage.node!.title}</span>
          </a>
        </li>
      )
    }
  </ul>
</nav>)
}