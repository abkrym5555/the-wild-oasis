import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabins } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: mutateDeleteCabins } = useMutation({
    mutationFn: deleteCabins,
    onSuccess: () => {
      toast.success("cabin successful deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isDeleting, mutateDeleteCabins };
}
