import { Action } from "redux";
import { ActionTypes } from "../actionTypes";

export type Count = {
  value: number;
};

interface incrementAction extends Action {
  type: typeof ActionTypes.increment;
}

interface decrementAction extends Action {
  type: typeof ActionTypes.decrement;
}

export type CountActionTypes = incrementAction | decrementAction;
