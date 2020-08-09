import {createStore, Reducer, combineReducers, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./saga/rootSaga";

export enum Types {
    LOAD_REQUEST = 'LOAD_REQUEST',
    LOAD_SUCCCES = 'LOAD_SUCCCES',
    LOAD_FAILURE = 'LOAD_FAILURE',
    ADD_TODO = 'ADD_TODO'
  }

export interface State {
    readonly data: []
    readonly loading: boolean
    readonly error: boolean
  }

const INITIAL_STATE:State={
    data:[],
    loading:false,
    error:false
};

const reducer:Reducer = (state = INITIAL_STATE, action)=> { 

    switch(action.type){

        case Types.LOAD_REQUEST:
            return { ...state, loading: true };

        case Types.LOAD_SUCCCES:
            return {
                ...state, loading: false, error: false, data: action.payload.data,
                };

        case Types.LOAD_FAILURE:
            return {
                ...state, loading: false, error: true, data: [],
                };

        default:
            return state;

    }

    
};

const reducers = combineReducers({
    reducerTodo:reducer
  });

export type reducers = ReturnType<typeof reducers>

const sagaMiddleware = createSagaMiddleware();
const store:Store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;