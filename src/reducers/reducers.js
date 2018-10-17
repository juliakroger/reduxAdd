import { combineReducers } from 'redux';

import {ADD_ONE, SUB_ONE} from '../actions/types';


const valuesReducer = (state = {value: 0}, action) => {
	switch(action.type){
		case ADD_ONE:
		return {...state, value: state.value + 1}

		case SUB_ONE:
		return {...state, value: state.value - 1}
		
		default: 
		return state;
	}
}

const rootReducer = combineReducers({
	values: valuesReducer
})

export default rootReducer;