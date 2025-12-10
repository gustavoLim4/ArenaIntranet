import { createContext } from "react";

type ToastContextType = {
  showToast: (
    message: string,
    severity?: "success" | "error" | "info" | "warning"
  ) => void;
};

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);
