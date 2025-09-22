import styled from "styled-components";
import { useRecentBookins } from "./useRecentBoolings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isBookingsLoading, bookings } = useRecentBookins();
  const {
    isLoading: isStaysLoading,
    stays,
    confirmStays,
    numDays,
  } = useRecentStays();

  const { cabins, isLoading: isCabinsLoading } = useCabins();

  if (isBookingsLoading || isStaysLoading || isCabinsLoading)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={stays}
        cabins={cabins}
        numOfDays={numDays}
      />
      <div>Today's activity</div>
      <DurationChart confirmStays={confirmStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
