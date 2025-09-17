import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteCkoutBook, isPending: isBookingDeleteing } =
    useMutation({
      mutationFn: deleteBooking,
      onSuccess: () => {
        toast.success(`Sucssefuly deleting booking`);
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
      },
      onError: () => {
        toast.error("Failed to delete the booking");
      },
    });
  return { deleteCkoutBook, isBookingDeleteing };
}
