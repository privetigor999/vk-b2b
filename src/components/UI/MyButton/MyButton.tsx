import { Button } from "@mui/material";
import { ReactNode } from "react";
import { Control } from "react-hook-form";

interface IMyButtonProps {
  children: ReactNode;
  type: "submit" | "reset";
  variant: "contained" | "outlined";
  control?: Control;
}

export const MyButton = ({ children, control, ...rest }: IMyButtonProps) => {
  const handleResetClick = () => {
    if (rest.type === "reset" && control) {
      control._reset({});
    }
  };
  return (
    <Button onClick={handleResetClick} {...rest}>
      {children}
    </Button>
  );
};
