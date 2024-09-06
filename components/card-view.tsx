import { CardOrientation, CardType } from "../model/cardType";
import Link from "next/link";
import { FichesConnectionEdges } from "../tina/__generated__/types";
import { FunctionComponent } from "react";
import { FicheCard } from "./pages/fiche/Card";
import { ui } from "../i18n/ui";

interface CardViewProps {
  entry: FichesConnectionEdges;
  type: CardType;
  display: CardOrientation;
  lang?: keyof typeof ui;
}

const CardView: FunctionComponent<CardViewProps> = ({
                                                      entry,
                                                      type = CardType.PERSONAS,
                                                      display = CardOrientation.VERTICAL_LAYOUT,
                                                      lang = "fr"
                                                    }) => {
  if (!entry?.node) {
    return null;
  }
  let layoutClass = "";
  if (display === CardOrientation.HORIZONTAL_LAYOUT) {
    layoutClass = "h-full flex-row items-center justify-between gap-2";
  }
  if (display === CardOrientation.VERTICAL_LAYOUT) {
    layoutClass = "h-full flex-col divide-y-2 divide-primary";
  }

  return (
    <li className="tohide box interactive mb-4 border-neutral-transparent py-2 transition-all md:py-6">
      <Link
        href={`${type === CardType.FICHES && "fiches/"}${entry.node._sys.filename}`}
        className={`flex no-underline ${layoutClass}`}
        title={`Voir la fiche : ${entry.node.title}`}>
        {type === CardType.FICHES ? (
          <FicheCard
            item={entry}
            lang={lang}
          />
        ) : (
          <h3 className="mt-0">{entry.node.title}</h3>
        )}
      </Link>
    </li>
  );
};

export default CardView;
