import { Header } from "../components/header";
import { Main } from "../components/main";
import { Equipment_table } from "@/components/equipment-table";
import { EQUIPMENT } from "./mocks/equipment";

export default function EquipmentsPage() {
  return (
    <>
      <Header></Header>
      <Main>
        <Equipment_table data={EQUIPMENT}/>
      </Main>
      <footer className="h-10 shrink-0">Оп-оп</footer>
    </>
  );
}
