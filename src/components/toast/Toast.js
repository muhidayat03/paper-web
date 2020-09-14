import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";

export const toastError = (error) => {
  let errMessage = "";
  if (error.response) {
    console.log("error", error.response);

    if (error.response.status === 401) {
      window.location.href = '/login';
    }
    errMessage = error.response.statusText;
  } else {
    errMessage = error.toString();
  }
  console.log(errMessage);

  toast.error(errMessage, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const toastSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
