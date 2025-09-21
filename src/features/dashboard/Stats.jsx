import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numOfDays, cabins }) {
  const numberOfBookings = bookings.length;

  const totalSales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const numOfCheckIns = confirmedStays.length;

  const occupation =
    Math.ceil(
      (confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
        (numOfDays * cabins.length)) *
        100
    ) + "%";

  return (
    <>
      <Stat
        title={"Bookings"}
        color={"blue"}
        icon={<HiOutlineBriefcase />}
        value={numberOfBookings}
      />
      <Stat
        title={"Sales"}
        color={"green"}
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalSales)}
      />
      <Stat
        title={"Check ins"}
        color={"indigo"}
        icon={<HiOutlineCalendarDays />}
        value={numOfCheckIns}
      />
      <Stat
        title={"Occupancy rate"}
        color={"yellow"}
        icon={<HiOutlineChartBar />}
        value={occupation}
      />
    </>
  );
}

export default Stats;
