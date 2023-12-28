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

type InputProps = BaseInputProps<FieldValues> & {
  type?: 'text' | 'email' | 'password' | 'number' | 'date';
  placeholder?: string;
  defaultValue?: string | number;
};

export const Input = ({
  name,
  register,
  errors,
  type = 'text',
  placeholder = 'Type here',
  label = name,
  defaultValue,
}: InputProps) => {
  return (
    <FormControl label={label}>
      <input
        type={type}
        placeholder={placeholder}
        className='input input-sm input-bordered w-full max-w-lg'
        defaultValue={defaultValue}
        {...register(name, { valueAsNumber: type === 'number' })}
      />
      {errors[name] && <FormControlError message={errors[name]?.message} /> }
    </FormControl>
  );
};
