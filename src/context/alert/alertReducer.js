import * as actions from '../types';

const alertReducer = (state, action) => {
	switch (action.type) {
		case actions.SET_ALERT:
			return {
				alert: action.payload
			}
		case actions.REMOVE_ALERT:
			return {
				alert: null
			}
		default:
			return state;
		}
}

export default alertReducer;