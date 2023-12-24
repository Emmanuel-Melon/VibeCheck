"use client";
import { useForm } from "react-hook-form";
import { FormControl, FormControlError } from "@repo/ui/FormControl";

export const UserPreferenceForm = () => {
    const { register, handleSubmit } = useForm();
    // const setUserPreference = useOnboardingStore((state) => state.setUserPreference);
  
    const onSubmit = (data) => {
      // setUserPreference(data);
      // navigate to the next step
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* replace the input names and types with your actual user preference properties */}
        <input
          {...register("preferredAgeRange")}
          placeholder="Preferred Age Range"
          type="range"
        />
        <input {...register("preferredGender")} placeholder="Preferred Gender" />
        <input type="submit" />
      </form>
    );
  };
  