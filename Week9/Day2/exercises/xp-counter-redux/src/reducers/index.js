import counterReducer from './counter';
import loggedReducer from './islogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
})

export default allReducers;