import { useMutation, useQueryClient } from "@tanstack/react-query";
import { creatEditCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreatCabin(reset) {
  const queryClient = useQueryClient();

  const { mutate: creatMutate, isPending } = useMutation({
    mutationFn: creatEditCabins,
    onSuccess: () => {
      toast.success("new cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { creatMutate, isPending };
}
