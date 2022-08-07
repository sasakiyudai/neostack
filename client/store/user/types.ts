import { Action } from "redux";
import { ActionTypes } from "../actionTypes";

export type User = {
  isLoggedIn: boolean;
};

interface loginAction extends Action {
  type: typeof ActionTypes.login;
}

interface logginedAction extends Action {
  type: typeof ActionTypes.loggined;
  pay
}

export type UserActionTypes = loginAction | logginedAction;
