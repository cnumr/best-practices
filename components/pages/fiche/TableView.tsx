import { Fragment, FunctionComponent } from "react";

import { CardType } from "../../../model/cardType";
import { FichesConnectionEdges } from "../../../tina/__generated__/types";
import Link from "next/link";
import { capitalizeFirstLetter } from "../../../src/js/utils";
import { getRefConfig } from "../../../referentiel-config";
import { ui } from "../../../i18n/ui";
import { useTranslations } from "../../../i18n/utils";

interface FichesTableViewProps {
  entries: any[];
  lang?: keyof typeof ui;
  type?: string;
}

export const FichesTableView: FunctionComponent<FichesTableViewProps> = ({
    entries,
    lang = 'fr',
    type = CardType.FICHES,
}) => {
    const t = useTranslations(lang);
    const getPreviousRefID = (entry: FichesConnectionEdges) => {
        const node = entry?.node;
        if (!node?.versions || node?.versions.length < 2) {
          return <em>{t('No previous Version')}</em>;
        } else {
            return <p>{`${node?.versions[node.versions.length - 2]?.idRef} (${node?.versions[node.versions.length - 2]?.version})`}</p>;
        }
    
    }
    return (
    <table>
        <thead>
            <tr>
            <th>REF ID</th>
            {getRefConfig().featuresEnabled.scope && <th>{t("scope")}</th>}
            <th>{t("lifecycle")}</th>
            <th>{t("Bonnes pratiques")}</th>
            <th>{t("Principe de validation")}</th>
            <th>{t("Previous REF ID")}</th>
            </tr>
        </thead>
        {/* <pre>{JSON.stringify(entries[0]?.node, null, 2)}</pre> */}
        <tbody>
            {
            entries?.map((entry:FichesConnectionEdges) => {
                const node = entry?.node;
                const entry_slug = `${type === CardType.FICHES && 'fiches/'}${node?._sys.filename}`
                return (
                <Fragment key={node?.id}>
                    {node?.validations?.map((validation, index) => {
                    return (
                        <tr key={index}>
                        <td>
                            <Link href={`${entry_slug}`} className="text-sm no-underline">
                            🔗{" "}
                            <span className="underline">
                                {process.env.PUBLIC_REF_NAME} {node?.refID}{" "}
                            </span>
                            </Link>
                        </td>
                        {getRefConfig().featuresEnabled.scope && (
                            // @ts-ignore
                            <th>{capitalizeFirstLetter(t(node?.scope as any))}</th>
                        )}
                        <td>
                            {capitalizeFirstLetter(t(node?.lifecycle as any))}
                        </td>
                        <td>
                            {node?.title}{" "}
                            {node?.validations &&
                            node?.validations.length > 1 &&
                            `(${index + 1})`}
                        </td>
                        <td>
                            {t("Le nombre")}{" "}
                            <strong className="!text-primary">{validation?.rule} </strong>
                            {t("est inférieur ou égal à")}{" "}
                            <strong className="!text-primary">{validation?.maxValue}</strong>
                        </td>
                        <td>
                            {getPreviousRefID(entry)}
                        </td>
                        </tr>
                    );
                    })}
                </Fragment>
                );
            })
            }
        </tbody>
    </table>)
}