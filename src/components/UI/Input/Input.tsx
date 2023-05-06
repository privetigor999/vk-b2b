import { TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface IInputProps {
  name: string;
  control: Control;
  label: string;
  multiline?: boolean;
  minRows?: number;
  fullWidth?: boolean;
  helperText?: string;
  error?: boolean;
}

export const Input = ({ name, control, label, ...rest }: IInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          style={{ marginTop: 20 }}
          {...field}
          {...rest}
          label={label}
        />
      )}
    />
  );
};
