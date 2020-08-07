import {createStore, Reducer} from 'redux';

enum Types {
    LOAD_REQUEST = 'LOAD_REQUEST',
    LOAD_SUCCCES = 'LOAD_SUCCCES',
    LOAD_FAILURE = 'LOAD_FAILURE'
  }

interface State {
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

const store = createStore(reducer);

export default store;