import { ActionTypes } from "../actionTypes";
import { Count, CountActionTypes } from "./types";

const initialState: Count = {
  value: 0,
};

export const CountReducer = (
  state = initialState,
  action: CountActionTypes
): Count => {
  switch (action.type) {
    case ActionTypes.increment:
      return { ...state, value: state.value + 1 };
    case ActionTypes.decrement:
      return { ...state, value: state.value - 1 };
  }
  return state;
};
