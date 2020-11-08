import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import * as actions from '../types';

const AlertState = (props) => {

	const initialState = {
		alert: null
	};

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	// set alert
	const setAlert = (msg, type) => {
		dispatch({
			type: actions.SET_ALERT,
			payload: { msg, type }
		})

		setTimeout(() => {
			dispatch({
				type: actions.REMOVE_ALERT
			})
		}, 5000)
	}

	return <AlertContext.Provider
		value={{
			alert: state.alert,
			setAlert
		}}
	>
		{props.children}
	</AlertContext.Provider>

}

export default AlertState;