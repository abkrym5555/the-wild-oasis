import Filter from "../../ui/Filter";
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
    </TableOperations>
  );
}

export default CabinTableOperation;
