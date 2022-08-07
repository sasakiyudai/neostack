import { ActionTypes } from "../actionTypes";
import { UserActionTypes } from "./types";

export const setIsLoggined = (isLoggined: boolean): UserActionTypes => {
  return {
    type: ActionTypes.setIsLoggined,
    payload: { isLoggedIn: isLoggined },
  };
};
