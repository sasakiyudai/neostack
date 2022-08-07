import { combineReducers, createStore } from "redux";
import { CountReducer } from "./counter/reducer";

const RootReducer = combineReducers({
  count: CountReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

const store = createStore(RootReducer);
export default store;
