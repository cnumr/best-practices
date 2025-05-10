import { FunctionComponent } from 'react';
import { useTranslations } from '../../../i18n/utils';
import { ui } from '../../../i18n/ui';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

type Validation = {
  rule: string;
  maxValue: number;
};

interface FicheTableValidationsProps {
  validations: Validation[] | any;
  lang?: keyof typeof ui;
}

export const FicheTableValidations: FunctionComponent<
  FicheTableValidationsProps
> = (props: { validations; lang }) => {
  const t = useTranslations(props.lang);
  return (
    <>
      <h2 id="principe-de-validations">{t('Principe de validation')}</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>{t('Le nombre')}</th>
            <th>{t('est inférieur ou égal à')}</th>
          </tr>
        </thead>
        <tbody>
          {props.validations?.map((validation, key) => (
            <tr key={key}>
              <td>
                {typeof validation.rule === 'string' ? (
                  validation.rule
                ) : (
                  // <SimpleMardownRender
                  //     markdown={validation.rule}
                  //     classes="markdown-content"
                  //   />
                  <TinaMarkdown content={validation.rule} />
                )}
              </td>
              <td className="text-center">{validation.maxValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
