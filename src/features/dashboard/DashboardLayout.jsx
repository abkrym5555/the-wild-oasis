import styled from "styled-components";
import { useRecentBookins } from "./useRecentBoolings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isBookingsLoading, bookings } = useRecentBookins();
  const { isLoading: isStaysLoading, stays, confirmStays } = useRecentStays();

  if (isBookingsLoading || isStaysLoading) return <Spinner />;
  console.log(bookings, stays);

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
