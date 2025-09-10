import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingapi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isPending: isSettingsUpdating } = useMutation({
    mutationFn: updateSettingapi,
    onSuccess: () => {
      toast.success("new setting successfully edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { updateSetting, isSettingsUpdating };
}
