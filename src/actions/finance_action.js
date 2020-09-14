import API from "./API";
import { actionPending, actionSuccess, actionError } from "./index";
import { toastError } from "../components/toast/Toast";
import { authHeader } from "../helpers/authHeader";

export const LIST_FINANCE_PENDING = "LIST_FINANCE_PENDING";
export const LIST_FINANCE_SUCCESS = "LIST_FINANCE_SUCCESS";
export const LIST_FINANCE_ERROR = "LIST_FINANCE_ERROR";
export const ADD_FINANCE_PENDING = "ADD_FINANCE_PENDING";
export const ADD_FINANCE_SUCCESS = "ADD_FINANCE_SUCCESS";
export const ADD_FINANCE_ERROR = "ADD_FINANCE_ERROR";
export const EDIT_FINANCE_PENDING = "EDIT_FINANCE_PENDING";
export const EDIT_FINANCE_SUCCESS = "EDIT_FINANCE_SUCCESS";
export const EDIT_FINANCE_ERROR = "EDIT_FINANCE_ERROR";
export const DETAIL_FINANCE_PENDING = "DETAIL_FINANCE_PENDING";
export const DETAIL_FINANCE_SUCCESS = "DETAIL_FINANCE_SUCCESS";
export const DETAIL_FINANCE_ERROR = "DETAIL_FINANCE_ERROR";
export const DELETE_FINANCE_PENDING = "DELETE_FINANCE_PENDING";
export const DELETE_FINANCE_SUCCESS = "DELETE_FINANCE_SUCCESS";
export const DELETE_FINANCE_ERROR = "DELETE_FINANCE_ERROR";

const LIST_FINANCE_URL = "finances";

export function listFinance(title = "") {
  return async (dispatch) => {
    dispatch(actionPending(LIST_FINANCE_PENDING));
    try {
      const response = await API.get(
        `${LIST_FINANCE_URL}?sort_field=last_modified&sort_type=1&page=0&per_page=999&title=${title}`,
        authHeader()
      );
      dispatch(actionSuccess(LIST_FINANCE_SUCCESS, response.data));
      return response;
    } catch (error) {
      dispatch(actionError(LIST_FINANCE_ERROR, error));
      toastError(error);
    }
  };
}

export function addFinance(param = {}) {
  console.log("param", param);
  return async (dispatch) => {
    dispatch(actionPending(ADD_FINANCE_PENDING));
    try {
      const response = await API.post(
        `${LIST_FINANCE_URL}`,
        param,
        authHeader()
      );
      dispatch(actionSuccess(ADD_FINANCE_SUCCESS, response.data));
      return response;
    } catch (error) {
      dispatch(actionError(ADD_FINANCE_ERROR, error));
      toastError(error);
    }
  };
}

export function detailFinance(id = null) {
  return async (dispatch) => {
    dispatch(actionPending(DETAIL_FINANCE_PENDING));
    try {
      const response = await API.get(`${LIST_FINANCE_URL}/${id}`, authHeader());
      dispatch(actionSuccess(DETAIL_FINANCE_SUCCESS, response.data));
      return response;
    } catch (error) {
      dispatch(actionError(DETAIL_FINANCE_ERROR, error));
      toastError(error);
    }
  };
}

export function editFinance(id, param = {}) {
  param = {
    ...param,
  };

  return async (dispatch) => {
    dispatch(actionPending(EDIT_FINANCE_PENDING));
    try {
      const response = await API.put(
        `${LIST_FINANCE_URL}/${id}`,
        param,
        authHeader()
      );
      dispatch(actionSuccess(EDIT_FINANCE_SUCCESS, response.data));
      return response;
    } catch (error) {
      dispatch(actionError(EDIT_FINANCE_ERROR, error));
      toastError(error);
    }
  };
}
export function deleteFinance(id) {
  return async (dispatch) => {
    dispatch(actionPending(DELETE_FINANCE_PENDING));
    try {
      const response = await API.delete(
        `${LIST_FINANCE_URL}/${id}`,
        authHeader()
      );
      dispatch(actionSuccess(DELETE_FINANCE_SUCCESS, response.data));
      return response;
    } catch (error) {
      dispatch(actionError(DELETE_FINANCE_ERROR, error));
      toastError(error);
    }
  };
}
