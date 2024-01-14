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
        <FormControl label="Preferred Age Range">
        <input
          {...register("preferredAgeRange")}
          placeholder="Preferred Age Range"
          type="range"
        />
        </FormControl>
        <FormControl label="Looking for">
        <input
          {...register("preferredAgeRange")}
          placeholder="Preferred Age Range"
          type="range"
        />
        </FormControl>
        <input type="submit" />
      </form>
    );
  };
  