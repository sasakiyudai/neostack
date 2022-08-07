import { Action } from "redux";
import { ActionTypes } from "../actionTypes";

export type User = {
  isLoggedIn: boolean;
};

interface setIsLogginedAction extends Action {
  type: typeof ActionTypes.setIsLoggined;
  payload: { isLoggedIn: boolean };
}

export type UserActionTypes = setIsLogginedAction;
