// manage state based on actions for the various components
import * as actions from '../types';

const githubReducer = (state, action) => {
	switch (action.type) {
		case actions.SET_LOADING:
			return {
				...state,
				loading: true
			}
		case actions.GET_USER: {
			return {
				...state,
				user: action.payload,
				loading: false
			}
		}
		case actions.CLEAR_USERS:
			return {
				...state,
				users: [],
				loading: false
			}
		case actions.GET_REPOS:
			return {
				...state,
				repos: action.payload,
				loading: false
			}
		case actions.SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false
			}
		default:
			return state;
	}
}

export default githubReducer;