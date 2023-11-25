import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabins from "../features/cabins/AddCabins";
import CabinTablesOperations from "../features/cabins/CabinTablesOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTablesOperations />
      </Row>

      <CabinTable />
      <AddCabins />
    </>
  );
}

export default Cabins;
