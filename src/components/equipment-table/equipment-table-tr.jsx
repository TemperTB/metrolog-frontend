import Link from "next/link";
import { SVG_details } from "./svg-details";
import { SVG_favourite } from "./svg-favourite";
import { SVG_open_new_window } from "./svg-open-new-window";

export function Equipment_table_tr({ item }) {
  const {
    id,
    status,
    napravlenie,
    podrazdelenie,
    preo,
    vladelec,
    mestorozhdenie,
    object,
    place,
    comment,
    type,
    model,
    serialNumber,
    prevDate,
    nextDate,
    sertificate,
    sertificate_link,
  } = item;

  const {
    id: type_id,
    name: type_name,
    min_name: type_min_name,
    description: type_description,
    numberSI: type_numberSI,
    link: type_link,
    mpi: type_mpi,
  } = type;

  const tdClass = "p-2 border border-color-bg-stripe align-middle text-xs";

  return (
    <tr className="hover:bg-color-bg-secondary">
      <td className={tdClass}>
        {podrazdelenie}
        <br />
        {preo}
        <br />
        {vladelec}
      </td>
      <td className={tdClass}>
        {mestorozhdenie}
        <br />
        {object}
        <br />
        {place}
        <br />
        {comment}
      </td>
      <td className={tdClass}>
        {type_min_name}
        <br />
        <a
          className="text-color-typo-link hover:text-color-typo-link-hover transition-colors underline italic"
          href={type_link}
        >
          {type_numberSI}
        </a>
      </td>
      <td className={tdClass}>{model}</td>
      <td className={tdClass}>{serialNumber}</td>
      <td className={tdClass}>{prevDate}</td>
      <td className={tdClass + " text-center"}>{type_mpi}</td>
      <td className={tdClass}>{nextDate}</td>
      <td className={tdClass}>
        <a
          href={sertificate_link}
          className="text-color-typo-link hover:text-color-typo-link-hover transition-colors underline"
        >
          {sertificate}
        </a>
      </td>
      <td className={tdClass}>
        <div className="flex gap-2">
          <button className="text-color-typo-link hover:text-color-typo-link-hover transition-colors">
            <SVG_favourite />
          </button>
          <Link
            href="#"
            className="text-color-typo-link hover:text-color-typo-link-hover transition-colors"
          >
            <SVG_details />
          </Link>
          <div className="text-color-typo-link hover:text-color-typo-link-hover transition-colors">
            <a href="#">
              <SVG_open_new_window />
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
}
