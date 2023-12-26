"use client";
import { useForm } from "react-hook-form";
import { FormControl, FormControlError } from "@repo/ui/FormControl";
// import { useOnboardingStore } from './path-to-your-store';


export const UserInfoForm = () => {
  const { register, handleSubmit } = useForm();
  // const setUserInfo = useOnboardingStore((state) => state.setUserInfo);

  const onSubmit = (data) => {
    // setUserInfo(data);
    // navigate to the next step
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl label="Name">
        <input
          {...register("name")}
          placeholder="Name"
          className="input input-sm input-bordered w-full max-w-xs"
        />
      </FormControl>
      <FormControl label="Age">
        <input
          {...register("age")}
          placeholder="Age"
          type="number"
          className="input input-sm input-bordered w-full max-w-xs"
        />
      </FormControl>
      <input type="submit" className="btn btn-sm btn-primary" />
    </form>
  );
};

