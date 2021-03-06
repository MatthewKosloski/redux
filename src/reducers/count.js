import { INCREMENT_COUNT } from '../constants/actionTypes';

export default function(state = 0, action){
	switch(action.type) {
		case INCREMENT_COUNT: {
			return ++state;
		}
		default: {
			return state;
		}
	}
}