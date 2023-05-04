import { FC, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface IPickerData {
  title: string;
}

export const PickerData: FC<IPickerData> = ({ title }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <div>
      <p>{title}</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
      />
    </div>
  );
};
