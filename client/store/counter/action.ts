import { ActionTypes } from "../actionTypes";
import { CountActionTypes } from "./types";

export const increment = (): CountActionTypes => {
  return {
    type: ActionTypes.increment,
  };
};

export const decrement = (): CountActionTypes => {
  return {
    type: ActionTypes.decrement,
  };
};
