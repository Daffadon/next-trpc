import { InputHTMLAttributes } from "react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface IInputCustomProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  inputTitle: string;
  inputType?: string;
  registerTitle: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

const InputCustom = <T extends FieldValues>({
  inputTitle,
  inputType,
  registerTitle,
  register,
  errors,
  ...rest
}: IInputCustomProps<T>) => {
  return (
    <div>
      <label htmlFor={registerTitle as string}>{inputTitle}</label>
      <input
        id={registerTitle as string}
        type={inputType ?? "text"}
        placeholder={inputTitle}
        className="input-normal w-full"
        {...register(registerTitle)}
        {...rest}
      />
      {errors[registerTitle] && (
        <p className="text-red-600">
          {errors[registerTitle]?.message as string}
        </p>
      )}
    </div>
  );
};

export default InputCustom;
