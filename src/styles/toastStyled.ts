import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

export const customSuccessToast = (message: string) => {
  toast.success(message, {
    style: {
      color: "#000000",
      backgroundColor: "#00d9ff",
    },
    progressStyle: {
      background: "#000000",
    },
    className: "Toastify__close-button",
  });
};

export const customErrorToast = (message: string) => {
  toast.error(message, {
    style: {
      color: "#000000",
      backgroundColor: "#ff5555",
    },
    progressStyle: {
      background: "#000000",
    },
    className: "Toastify__close-button",
  });
};
