import {Reducer} from 'redux';

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

export const reducer:Reducer = (state = INITIAL_STATE, action)=> { 

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

 //******************************************************actions********************************** */
 
export function addTodo(todo:any){
    return(
        {
            type:"ADD_TODO",
            payload:{
                data:todo
            }
        }
    )
}