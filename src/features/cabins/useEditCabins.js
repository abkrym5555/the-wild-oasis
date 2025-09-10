import { useMutation, useQueryClient } from "@tanstack/react-query";
import { creatEditCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin(reset) {
  const queryClient = useQueryClient();
  const { mutate: editMutate, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => creatEditCabins(newCabinData, id),
    onSuccess: () => {
      toast.success("new cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { editMutate, isEditing };
}
