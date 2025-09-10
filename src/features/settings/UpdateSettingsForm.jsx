import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const { isLoading, data: settings } = useSettings();
  const { updateSetting, isSettingsUpdating } = useUpdateSettings();
  function handelEditSetting(e, feild) {
    if (!e.target.value) return;
    updateSetting({ [feild]: e.target.value });
  }
  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={settings.minBookingLength}
          onBlur={(e) => handelEditSetting(e, "minBookingLength")}
          disabled={isSettingsUpdating}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={settings.maxBookingLength}
          onBlur={(e) => handelEditSetting(e, "maxBookingLength")}
          disabled={isSettingsUpdating}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={settings.maxGuestsPerBooking}
          onBlur={(e) => handelEditSetting(e, "maxGuestsPerBooking")}
          disabled={isSettingsUpdating}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={settings.breakfastPrice}
          onBlur={(e) => handelEditSetting(e, "breakfastPrice")}
          disabled={isSettingsUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
