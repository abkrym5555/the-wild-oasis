import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useQueryBookings() {
  const params = useParams();
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => getBooking(params.bookingId),
    retry: false,
  });
  return { isLoading, bookings, error };
}
