import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: editSetting, isPending: isSettingsUpdating } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("new setting successfully edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { editSetting, isSettingsUpdating };
}
