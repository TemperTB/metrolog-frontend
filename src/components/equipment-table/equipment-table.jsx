import { Equipment_table_tbody } from "./equipment-table-tbody";
import { Equipment_table_thead } from "./equipment-table-thead";

export function Equipment_table({data}) {
  return (
    <table class="w-full table-fixed border-collapse border border-color-bg-stripe bg-color-bg-default text-color-typo-primary">
      <Equipment_table_thead />
      <Equipment_table_tbody data={data}/>
    </table>
  );
}
