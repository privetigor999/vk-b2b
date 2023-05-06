import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl, FormHelperText } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface IDatePickProps {
  name: string;
  control: Control;
  label: string;
  helperText?: string;
  error?: boolean;
}

export const DatePick = ({
  name,
  control,
  label,
  helperText,
  error,
  ...rest
}: IDatePickProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl error={error} {...rest}>
            <DatePicker
              label={label}
              disablePast
              format="DD/MM/YYYY"
              value={field.value || null}
              onChange={(newValue) => field.onChange(newValue)}
            />
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
          </FormControl>
        )}
      />
    </LocalizationProvider>
  );
};
