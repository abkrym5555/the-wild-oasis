import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { val: "7", label: "Last 7 days" },
        { val: "30", label: "Last 30 days" },
        { val: "90", label: "Last 90 days" },
      ]}
    />
  );
}

export default DashboardFilter;
