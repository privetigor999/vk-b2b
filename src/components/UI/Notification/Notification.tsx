import { Alert } from "@mui/material";
import { ReactNode } from "react";

import "./notification.scss";

interface INotificationProps {
  children: ReactNode;
  severity: "success" | "error";
  onClose?: () => void;
}

export const Notification = ({
  children,
  severity,
  onClose,
}: INotificationProps) => {
  return (
    <div className="notification">
      <Alert severity={severity} onClose={onClose}>
        {children}
      </Alert>
    </div>
  );
};
