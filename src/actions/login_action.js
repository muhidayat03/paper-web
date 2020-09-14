import API from "./API";
import { actionPending, actionSuccess, actionError } from "./index";
import { toastError } from "../components/toast/Toast";

export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";

const LOGIN_URL = "login";

export function login(username, password) {
  return async (dispatch) => {
    dispatch(actionPending(LOGIN_PENDING));
    try {
      const response = await API.post(`${LOGIN_URL}`, { username, password });
      dispatch(actionSuccess(LOGIN_SUCCESS, response.data));
      console.log(response.data);
      localStorage.setItem("user_paper", JSON.stringify(response.data));

      return response;
    } catch (error) {
      dispatch(actionError(LOGIN_ERROR, error));
      console.log("ini error", error);
      toastError(error);
      throw error;
    }
  };
}

export function logout() {
  localStorage.removeItem("user_paper");
  return { type: LOGOUT };
}
