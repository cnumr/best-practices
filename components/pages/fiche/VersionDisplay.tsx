import React, { FunctionComponent } from 'react';

import { FichesQuery } from '../../../tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';
import { ui } from '../../../i18n/ui';

type Version = {
  version: string;
  idRef: string;
};

interface FicheVersionDisplayProps {
  versions?: Version[];
  data: FichesQuery
}
export const FicheVersionDisplay: FunctionComponent<
  FicheVersionDisplayProps
> = ({ versions, data }) => {
  return (
    <div className="box my-4 border-neutral-transparent lg:col-span-2 lg:my-8"
      // data-tina-field={tinaField(data.fiches, 'versions')}
      >
      <div className="grid w-fit grid-flow-col grid-rows-2 gap-2">
        <div className="text-right font-bold">Ref. Version →</div>
        <div className="text-right font-bold">Ref. BP →</div>
        {versions?.map((data, key) => {
          return (
            <React.Fragment key={key}>
              <div className="text-center font-semibold">{data.version}</div>
              <div className="text-center">{data.idRef}</div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
