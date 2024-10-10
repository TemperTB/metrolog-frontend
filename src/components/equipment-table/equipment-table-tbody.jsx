import { Equipment_table_tr } from "./equipment-table-tr";

export function Equipment_table_tbody({ data }) {
  return (
    <tbody>
      {data.map((item, index) => <Equipment_table_tr key={index} item={item}/>)}
    </tbody>
  );
}
