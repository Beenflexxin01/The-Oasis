import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTablesOperations() {
  return (
    <>
      <TableOperations>
        <Filter
          filterField="discount"
          options={[
            { value: "all", label: "All" },
            { value: "no-discount", label: "No-Dsicount" },
            { value: "with-discount", label: "With-Discount" },
          ]}
        />
      </TableOperations>

      <SortBy
        options={[
          { value: "name-asc", label: "sort by name (A - Z)" },
          { value: "name-desc", label: "sort by name (Z - A)" },
          { value: "regularPrice-asc", label: "sort by price (low first)" },
          { value: "regularPrice-desc", label: "sort by price (high first)" },
          { value: "maxCapacity-asc", label: "sort by capacity (low first)" },
          { value: "maxCapacity-desc", label: "sort by capacity (high first)" },
        ]}
      />
    </>
  );
}

export default CabinTablesOperations;