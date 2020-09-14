import { combineReducers } from "redux";
import {
  listFinance,
  detailFinance,
  editFinance,
  addFinance,
  deleteFinance
} from "./finance_reducer";
import {
  listAccount,
  detailAccount,
  editAccount,
  addAccount,
  deleteAccount
} from "./account_reducer";
import { login } from "./login_reducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  form: formReducer,
  listFinance,
  detailFinance,
  editFinance,
  addFinance,
  deleteFinance,
  listAccount,
  detailAccount,
  editAccount,
  addAccount,
  deleteAccount,
  login,
});

export default rootReducer;
