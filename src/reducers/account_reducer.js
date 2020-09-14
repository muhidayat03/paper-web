import {
  LIST_ACCOUNT_PENDING,
  LIST_ACCOUNT_SUCCESS,
  LIST_ACCOUNT_ERROR,
  ADD_ACCOUNT_PENDING,
  ADD_ACCOUNT_SUCCESS,
  ADD_ACCOUNT_ERROR,
  DETAIL_ACCOUNT_PENDING,
  DETAIL_ACCOUNT_SUCCESS,
  DETAIL_ACCOUNT_ERROR,
  EDIT_ACCOUNT_PENDING,
  EDIT_ACCOUNT_SUCCESS,
  EDIT_ACCOUNT_ERROR,
  DELETE_ACCOUNT_PENDING,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_ERROR,
} from "../actions/account_action";

const initialState = {
  pending: false,
  error: null,
};

export function listAccount(state = { ...initialState, data: null }, action) {
  switch (action.type) {
    case LIST_ACCOUNT_PENDING:
      return {
        ...state,
        pending: true,
      };
    case LIST_ACCOUNT_SUCCESS:
      console.log("masuk sini", action.data);
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case LIST_ACCOUNT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function addAccount(state = { ...initialState, data: null }, action) {
  switch (action.type) {
    case ADD_ACCOUNT_PENDING:
      return {
        ...state,
        pending: true,
      };
    case ADD_ACCOUNT_SUCCESS:
      console.log("masuk sini", action.data);
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case ADD_ACCOUNT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
export function detailAccount(state = { ...initialState, data: null }, action) {
  switch (action.type) {
    case DETAIL_ACCOUNT_PENDING:
      return {
        ...state,
        pending: true,
      };
    case DETAIL_ACCOUNT_SUCCESS:
      console.log("masuk sini", action.data);
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case DETAIL_ACCOUNT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
export function editAccount(state = { ...initialState, data: null }, action) {
  switch (action.type) {
    case EDIT_ACCOUNT_PENDING:
      return {
        ...state,
        pending: true,
      };
    case EDIT_ACCOUNT_SUCCESS:
      console.log("masuk sini", action.data);
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case EDIT_ACCOUNT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function deleteAccount(state = { ...initialState, data: null }, action) {
  switch (action.type) {
    case DELETE_ACCOUNT_PENDING:
      return {
        ...state,
        pending: true,
      };
    case DELETE_ACCOUNT_SUCCESS:
      console.log("masuk sini", action.data);
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case DELETE_ACCOUNT_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
