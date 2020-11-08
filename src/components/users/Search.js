import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const [ text, setText ] = useState('')

	const onChange = (event) => {
		setText(event.target.value);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		if ( text === '') {
			alertContext.setAlert('Please enter something', 'light')
		} else {
			githubContext.searchUsers(text);
			setText(''); // clear the form after
		}
	}

	return (
		<div>
			<form className="form" onSubmit={onSubmit}>
				<input
					type="text"
					name="text" // we use this to set state
					placeholder="Search Users..."
					value={text}
					onChange={onChange} />
				<input
					type="submit"
					value="Search"
					className="btn btn-dark btn-block" />
			</form>
			{ githubContext.users.length > 0 && (
				<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
			)}
		</div>
	)
}

export default Search;