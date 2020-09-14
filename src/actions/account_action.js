import API from "./API";
import { actionPending, actionSuccess, actionError } from "./index";
import { toastError } from "../components/toast/Toast";
import { authHeader } from "../helpers/authHeader";

export const LIST_ACCOUNT_PENDING = "LIST_ACCOUNT_PENDING";
export const LIST_ACCOUNT_SUCCESS = "LIST_ACCOUNT_SUCCESS";
export const LIST_ACCOUNT_ERROR = "LIST_ACCOUNT_ERROR";
export const ADD_ACCOUNT_PENDING = "ADD_ACCOUNT_PENDING";
export const ADD_ACCOUNT_SUCCESS = "ADD_ACCOUNT_SUCCESS";
export const ADD_ACCOUNT_ERROR = "ADD_ACCOUNT_ERROR";
export const EDIT_ACCOUNT_PENDING = "EDIT_ACCOUNT_PENDING";
export const EDIT_ACCOUNT_SUCCESS = "EDIT_ACCOUNT_SUCCESS";
export const EDIT_ACCOUNT_ERROR = "EDIT_ACCOUNT_ERROR";
export const DETAIL_ACCOUNT_PENDING = "DETAIL_ACCOUNT_PENDING";
export const DETAIL_ACCOUNT_SUCCESS = "DETAIL_ACCOUNT_SUCCESS";
export const DETAIL_ACCOUNT_ERROR = "DETAIL_ACCOUNT_ERROR";
export const DELETE_ACCOUNT_PENDING = "DELETE_ACCOUNT_PENDING";
export const DELETE_ACCOUNT_SUCCESS = "DELETE_ACCOUNT_SUCCESS";
export const DELETE_ACCOUNT_ERROR = "DELETE_ACCOUNT_ERROR";

const LIST_ACCOUNT_URL = "finance-accounts";

export function listAccount(name = "") {
  return async (dispatch) => {
    dispatch(actionPending(LIST_ACCOUNT_PENDING));
    try {
      const response = await API.get(
        `${LIST_ACCOUNT_URL}?sort_field=last_modified&sort_type=1&page=0&per_page=999&name=${name}`,
        authHeader()
      );
      dispatch(actionSuccess(LIST_ACCOUNT_SUCCESS, response.data));
      return response;
    } catch (error) {
      dispatch(actionError(LIST_ACCOUNT_ERROR, error));
      toastError(error);
    }
  };
}

export function addAccount(param = {}) {
  console.log("param", param);
  return async (dispatch) => {
    dispatch(actionPending(ADD_ACCOUNT_PENDING));
    try {
      const response = await API.post(
        `${LIST_ACCOUNT_URL}`,
        param,
        authHeader()
      );
      dispatch(actionSuccess(ADD_ACCOUNT_SUCCESS, response.data));
      return response;
    } catch (error) {
      dispatch(actionError(ADD_ACCOUNT_ERROR, error));
      toastError(error);
    }
  };
}

export function detailAccount(id = null) {
  return async (dispatch) => {
    dispatch(actionPending(DETAIL_ACCOUNT_PENDING));
    try {
      const response = await API.get(`${LIST_ACCOUNT_URL}/${id}`, authHeader());
      dispatch(actionSuccess(DETAIL_ACCOUNT_SUCCESS, response.data));
      return response;
    } catch (error) {
      dispatch(actionError(DETAIL_ACCOUNT_ERROR, error));
      toastError(error);
    }
  };
}

export function editAccount(id, param = {}) {
  param = {
    ...param,
    account_account_type_id: 1,
  };

  return async (dispatch) => {
    dispatch(actionPending(EDIT_ACCOUNT_PENDING));
    try {
      const response = await API.put(
        `${LIST_ACCOUNT_URL}/${id}`,
        param,
        authHeader()
      );
      dispatch(actionSuccess(EDIT_ACCOUNT_SUCCESS, response.data));
      return response;
    } catch (error) {
      dispatch(actionError(EDIT_ACCOUNT_ERROR, error));
      toastError(error);
    }
  };
}
export function deleteAccount(id) {
  return async (dispatch) => {
    dispatch(actionPending(DELETE_ACCOUNT_PENDING));
    try {
      const response = await API.delete(
        `${LIST_ACCOUNT_URL}/${id}`,
        authHeader()
      );
      dispatch(actionSuccess(DELETE_ACCOUNT_SUCCESS, response.data));
      return response;
    } catch (error) {
      dispatch(actionError(DELETE_ACCOUNT_ERROR, error));
      toastError(error);
    }
  };
}
