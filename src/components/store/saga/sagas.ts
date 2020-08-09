import { call, put, select } from 'redux-saga/effects';
import { Types } from '../';
//import api from '../../../services/api';

//import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {

    
    //const response = yield call(api.get, 'repos/user');

   // yield put(loadSuccess(response.data));
  } catch (err) {
    //yield put(loadFailure());
  }
}

export function* addTodo(arg:any) {
  try {

    const datas = yield select(reducer => reducer.reducerTodo.data);
    
   yield put({type:Types.LOAD_REQUEST, payload:{data: [...datas, arg.payload.data]}});
  } catch (err) {
    //yield put(loadFailure());
  }
}

