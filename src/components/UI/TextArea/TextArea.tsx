import { FC } from "react";

interface ITextareaProps {
  title: string;
}

export const TextArea: FC<ITextareaProps> = ({ title }) => {
  return (
    <div>
      <label>
        {title}
        <textarea />
      </label>
    </div>
  );
};
