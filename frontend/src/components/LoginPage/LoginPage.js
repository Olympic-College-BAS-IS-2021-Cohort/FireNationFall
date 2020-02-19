import React from 'react';

import LoginForm from './LoginForm';

export default (props) => {

	const handleFormSubmit = (formState) => {
		props.history.push('/admin')
	};

	return(
		<div>
			<LoginForm onFormSubmit={handleFormSubmit}/>
		</div>
	)
}