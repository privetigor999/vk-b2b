import { CSSProperties } from "react";
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";

import { ISelect } from "../../../types/types";

interface DropdownProps {
  label: string;
  control: Control;
  name: string;
  options: ISelect[];
  fullWidth?: boolean;
  style?: CSSProperties;
  helperText?: string;
  error?: boolean;
}

export const Dropdown = ({
  label,
  control,
  name,
  options,
  helperText,
  error,
  ...rest
}: DropdownProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <FormControl style={{ marginTop: 20 }} error={error} {...rest}>
          <InputLabel>{label}</InputLabel>
          <Select id={name} label={label} {...field}>
            {options?.map((option: ISelect) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
