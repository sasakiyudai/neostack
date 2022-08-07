import { ActionTypes } from "../actionTypes";
import { UserActionTypes } from "./types";

export const loggined = (): UserActionTypes => {
	
  return {
    type: ActionTypes.loggined,
  };
};

export const login = (): UserActionTypes => {
  return {
    type: ActionTypes.login,
  };
};
