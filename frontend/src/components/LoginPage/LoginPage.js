import React from 'react';
import {useAuth0} from '../../react-auth0-spa';


import LoginForm from './LoginForm';

export default (props) => {

	const handleFormSubmit = (formState) => {
		props.history.push('/admin')
	};

	console.log(props);

	const {isAuthenticated, loginWithRedirect,logout} = useAuth0();

	return(
		<div>
			{!isAuthenticated && <button onClick={() => loginWithRedirect({})}>Log in</button>}
			{isAuthenticated && <button onClick={() => logout()}>Log out</button>}
		</div>
	)
}