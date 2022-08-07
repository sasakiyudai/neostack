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
    case ActionTypes.setIsLoggined:
      return { ...state, isLoggedIn: action.payload.isLoggedIn };
  }
  return state;
};
