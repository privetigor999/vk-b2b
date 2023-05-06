import { ReactNode, FormEvent } from "react";

import "./form.scss";

interface IFormProps {
  children: ReactNode;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export const Form = ({ children, ...props }: IFormProps) => {
  return (
    <form noValidate {...props} className="form">
      {children}
    </form>
  );
};
