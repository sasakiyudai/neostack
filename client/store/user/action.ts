import { ActionTypes } from "../actionTypes";
import { UserActionTypes } from "./types";

export const setIsLoggined = (isLoggedIn: boolean): UserActionTypes => {
  return {
    type: ActionTypes.setIsLoggined,
    payload: { isLoggedIn },
  };
};
