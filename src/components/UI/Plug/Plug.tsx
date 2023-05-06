import { ReactNode } from "react";

import "./plug.scss";

interface IPlugProps {
  children: ReactNode;
  error?: boolean;
}

export const Plug = ({ children, error }: IPlugProps) => {
  const classname = `plug ${error && "plug plug--error"}`;

  return <div className={classname}>{children}</div>;
};
