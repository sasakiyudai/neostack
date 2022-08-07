import { combineReducers, createStore } from "redux";
import { CountReducer } from "./counter/reducer";
import { UserReducer } from "./user/reducer";

const RootReducer = combineReducers({
  count: CountReducer,
  user: UserReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

const store = createStore(RootReducer);
export default store;
