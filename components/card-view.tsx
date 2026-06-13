import { CardOrientation, CardType } from '../model/cardType';

import { FicheCard } from './pages/fiche/Card';
import { FichesConnectionEdges } from '../tina/__generated__/types';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { ui } from '../i18n/ui';

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
  lang = 'fr',
}) => {
  if (!entry?.node) {
    return null;
  }
  let layoutClass = '';
  if (display === CardOrientation.HORIZONTAL_LAYOUT) {
    layoutClass = 'h-full flex-row items-center justify-between gap-2';
  }
  if (display === CardOrientation.VERTICAL_LAYOUT) {
    layoutClass = 'h-full flex-col divide-y-2 divide-primary';
  }

  const href = `${type === CardType.FICHES ? 'fiches/' : ''}${entry.node._sys.filename}`;

  return (
    <li className="tohide box interactive relative border-neutral-transparent py-2 transition-all md:py-6">
      {/* Overlay pour étendre la surface de clic à toute la carte — aria-hidden et tabIndex=-1 pour l'a11y */}
      <Link
        href={href}
        className="absolute inset-0 z-0"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className={`flex h-full ${layoutClass}`}>
        {type === CardType.FICHES ? (
          <FicheCard
            item={entry}
            lang={lang}
            href={href}
          />
        ) : (
          <h3 className="mt-0">
            <Link
              href={href}
              className="relative z-10 no-underline"
              title={`Voir la fiche : ${entry.node.title}`}>
              {entry.node.title}
            </Link>
          </h3>
        )}
      </div>
    </li>
  );
};

export default CardView;
