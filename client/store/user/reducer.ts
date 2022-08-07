import { ActionTypes } from "../actionTypes";
import { User, UserActionTypes } from "./types";

const initialState: User = {
  isLoggedIn: false,
};

export const UserReducer = (
  state = initialState,
  action: UserActionTypes
): User => {
  switch (action.type) {
    case ActionTypes.login:
      return { ...state, isLoggedIn: true };
    case ActionTypes.loggined:
      return { ...state, isLoggedIn: true };
  }
  return state;
};
