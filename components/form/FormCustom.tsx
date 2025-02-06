import React, { ReactElement, ReactNode } from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";

interface IFormCustom<T extends FieldValues> {
  children: ReactElement[];
  onSubmit: SubmitHandler<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  formStyle?: string;
}
const FormCustom = <T extends FieldValues>({
  children,
  onSubmit,
  handleSubmit,
  formStyle,
}: IFormCustom<T>) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
      className={formStyle}
    >
      {React.Children.map(children, (child) => {
        return child;
      })}
    </form>
  );
};

export default FormCustom;
