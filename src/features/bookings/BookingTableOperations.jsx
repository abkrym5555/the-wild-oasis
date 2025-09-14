import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { val: "all", label: "All" },
          { val: "checked-out", label: "Checked out" },
          { val: "checked-in", label: "Checked in" },
          { val: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { val: "startDate-desc", label: "Sort by date (recent first)" },
          { val: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            val: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { val: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
