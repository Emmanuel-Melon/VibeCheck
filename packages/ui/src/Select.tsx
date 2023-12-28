import { FormControl, FormControlError } from './FormControl';
import {
    DeepMap,
    FieldError,
    FieldValues,
    UseFormRegister,
    Path,
  } from 'react-hook-form';

export type FormErrors = DeepMap<FieldValues, FieldError>;

export type BaseInputProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  errors: FormErrors;
  defaultValue?: string | number;
  register: UseFormRegister<T>;
}

type SelectProps = BaseInputProps<FieldValues> & {
  options: any[];
};

export const Select = ({
  options,
  label = 'Select Input',
  name,
  register,
  errors,
}: SelectProps) => {
  return (
    <FormControl label={label}>
      <select
        className='select select-sm select-bordered w-full max-w-lg'
        title={label}
        {...register(name)}
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      {errors[name] && <FormControlError message={errors[name]?.message} /> }
    </FormControl>
  );
};
