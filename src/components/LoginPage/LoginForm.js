import React from 'react';
import PropTypes from 'prop-types'
import {Container} from 'semantic-ui-react';

import FormBuilder from '../Form/FormBuilder';


const formConfigs = {
	fieldConfigs: [
		{
			label: 'User Name',
			placeholder: 'Enter your username',
			control: 'input'
		},
		{
			label: 'Password',
			placeholder: 'Enter your password',
			control: 'input',
			type: 'password'
		},
		{
			control: 'button',
			type: 'submit',
			name: 'Log In'
		}
	],
	onSubmit: function handleSubmit (e) {
		console.log(e);
		console.log('handling submit');
	}
};

export default (props) => {

	return(
		<Container>

		</Container>
	)
}

