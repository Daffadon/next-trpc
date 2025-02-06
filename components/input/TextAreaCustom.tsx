import { TextareaHTMLAttributes } from "react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface ITextAreaCustom<T extends FieldValues>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputTitle: string;
  registerTitle: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

const TextAreaCustom = <T extends FieldValues>({
  inputTitle,
  registerTitle,
  register,
  errors,
  ...rest
}: ITextAreaCustom<T>) => {
  return (
    <div>
      <label htmlFor={registerTitle as string}>{inputTitle}</label>
      <textarea
        id={registerTitle as string}
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

export default TextAreaCustom;
