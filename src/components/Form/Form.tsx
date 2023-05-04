import { ReactNode, FC } from "react";

interface IFormProps {
  children: ReactNode;
}

export const Form: FC<IFormProps> = ({ children }) => {
  return <form noValidate>{children}</form>;
};
