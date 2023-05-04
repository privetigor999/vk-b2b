import { FC } from "react";
import Select from "react-select";
import { ISelect } from "../../../types/types";

interface IDropdownProps {
  options: ISelect[] | null;
  label: string;
}

export const Dropdown: FC<IDropdownProps> = ({ options, label }) => {
  if (!options) {
    return null;
  }

  return (
    <div>
      <label>
        {label} <Select options={options} />
      </label>
    </div>
  );
};
