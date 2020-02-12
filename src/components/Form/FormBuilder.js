import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Form, FormField} from 'semantic-ui-react';

//an example formConfigs
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
			type: 'password',
			name: 'password'
		},
		{
			control: 'button',
			type: 'submit',
			content: 'Log In'
		}
	],
	onSubmit: function handleSubmit (e) {
		console.log(e);
		console.log('handling submit');
	}
};

const FormBuilder = (props) => {

	const [formState, setFormState] = useState({});

	const handleOnChange = (e, {name, value}) => {
		console.log('handling on change of', name);
	};

	return (
		<Form widths={'equal'} onSubmit={props.onSubmit}>
			{props.formConfigs.fieldConfigs.map(fieldConfig => {
				if(fieldConfig.control !== 'button') {
					return <FormField {...fieldConfig} onChange={handleOnChange}/>
				}
				return  <FormField {...fieldConfig}/>
			})}
		</Form>
	)
};

FormBuilder.propTypes = {
	fieldConfigs: PropTypes.array.isRequired,
	onSubmit: PropTypes.func.isRequired
};


export default FormBuilder;