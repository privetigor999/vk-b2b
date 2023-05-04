import { FC } from "react";

interface IButton {
  type: "submit" | "reset";
  text: string;
}

export const Button: FC<IButton> = ({ type, text }) => {
  return <button type={type}>{text}</button>;
};
