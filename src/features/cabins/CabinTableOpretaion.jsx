import Filter from "../../ui/Filter";
import Select from "../../ui/Select";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { val: "all", label: "All" },
          { val: "no-discount", label: "No Discount" },
          { val: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { val: "name-asc", label: "sort by name [A-Z]" },
          { val: "name-desc", label: "sort by name [Z-A]" },
          { val: "regularPrice-asc", label: "sort by price [low first]" },
          { val: "regularPrice-desc", label: "sort by price [high first]" },
          { val: "maxCapacity-asc", label: "sort by capacity [low first]" },
          { val: "maxCapacity-desc", label: "sort by capacity [high first]" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperation;
