import {combineReducers} from 'redux';
import {reducer} from "./todoReducer";

export const reducers = combineReducers({
    reducerTodo:reducer
  });

export type reducers = ReturnType<typeof reducers>