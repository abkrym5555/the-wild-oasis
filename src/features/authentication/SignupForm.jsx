import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import SpinnerMini from "../../ui/SpinnerMini";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const {
    formState: { errors },
    register,
    getValues,
    handleSubmit,
    reset,
  } = useForm();

  const { signup, isPending } = useSignup();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          disabled={isPending}
          type="text"
          id="fullName"
          {...register("fullName", { required: "this field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          disabled={isPending}
          type="email"
          id="email"
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "please provide the email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          disabled={isPending}
          type="password"
          id="password"
          {...register("password", {
            required: "this field is required",
            minLength: {
              value: 8,
              message: "need password to be at minimum 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          disabled={isPending}
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "this field is required",
            validate: (vlaue) =>
              vlaue === getValues().password || "password need to be the same",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button disabled={isPending} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isPending}>
          {isPending ? <SpinnerMini /> : "Create new user"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
