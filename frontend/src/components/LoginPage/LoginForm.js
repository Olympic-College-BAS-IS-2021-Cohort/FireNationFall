import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Container} from 'semantic-ui-react';

import FormBuilder from '../Form/FormBuilder';


const formConfigs = {
	fieldConfigs: [
		{
			label: 'User Name',
			placeholder: 'Enter your username',
			control: 'input',
			name: 'username'
		},
		{
			label: 'Password',
			placeholder: 'Enter your password',
			control: 'input',
			name:'password',
			type: 'password'
		},
		{
			control: 'button',
			type: 'submit',
			name: 'Log In'
		}
	]
};

export default (props) => {
	const [formState, setFormState] = useState({});


	const onChangeHandler = (name, value) => {
		setFormState({
			...formState,
			[name]: value
		})
	};

	const onSubmitHandler = () => {
		console.log(formState);
		//once user submit credentials
		//push url to the admin page
		props.onFormSubmit(formState)
	};
	//todo: remove inline style and move it to a css module
	return(
		<Container style={{height: '80vh', width: '500px', display: 'flex', alignItems: 'center'}}>
			<FormBuilder {...formConfigs} onChange={onChangeHandler} onSubmit={onSubmitHandler}/>
		</Container>
	)
}

