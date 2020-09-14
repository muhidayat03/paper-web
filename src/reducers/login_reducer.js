import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR, 
} from "../actions/login_action";

const initialState = {
  pending: false,
  error: null,
};

export function login(state = { ...initialState, data: null }, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        pending: true,
      };
    case LOGIN_SUCCESS:
      console.log("masuk sini", action.data);
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

 