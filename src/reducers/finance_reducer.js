import {
  LIST_FINANCE_PENDING,
  LIST_FINANCE_SUCCESS,
  LIST_FINANCE_ERROR,
  ADD_FINANCE_PENDING,
  ADD_FINANCE_SUCCESS,
  ADD_FINANCE_ERROR,
  DETAIL_FINANCE_PENDING,
  DETAIL_FINANCE_SUCCESS,
  DETAIL_FINANCE_ERROR,
  EDIT_FINANCE_PENDING,
  EDIT_FINANCE_SUCCESS,
  EDIT_FINANCE_ERROR,
  DELETE_FINANCE_PENDING,
  DELETE_FINANCE_SUCCESS,
  DELETE_FINANCE_ERROR,
} from "../actions/finance_action";

const initialState = {
  pending: false,
  error: null,
};

export function listFinance(state = { ...initialState, data: null }, action) {
  switch (action.type) {
    case LIST_FINANCE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case LIST_FINANCE_SUCCESS:
      console.log("masuk sini", action.data);
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case LIST_FINANCE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function addFinance(state = { ...initialState, data: null }, action) {
  switch (action.type) {
    case ADD_FINANCE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case ADD_FINANCE_SUCCESS:
      console.log("masuk sini", action.data);
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case ADD_FINANCE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
export function detailFinance(state = { ...initialState, data: null }, action) {
  switch (action.type) {
    case DETAIL_FINANCE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case DETAIL_FINANCE_SUCCESS:
      console.log("masuk sini", action.data);
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case DETAIL_FINANCE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
export function editFinance(state = { ...initialState, data: null }, action) {
  switch (action.type) {
    case EDIT_FINANCE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case EDIT_FINANCE_SUCCESS:
      console.log("masuk sini", action.data);
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case EDIT_FINANCE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function deleteFinance(state = { ...initialState, data: null }, action) {
  switch (action.type) {
    case DELETE_FINANCE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case DELETE_FINANCE_SUCCESS:
      console.log("masuk sini", action.data);
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case DELETE_FINANCE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
