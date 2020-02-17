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
			name: 'Log In'
		}
	],
	onSubmit: function handleSubmit (e) {
		console.log(e);
		console.log('handling submit');
	}
};

const FormBuilder = (props) => {

	// const [formState, setFormState] = useState({});

	const handleOnChange = (e) => {
		props.onChange(e.target.name, e.target.value);
	};

	return (
		<Form widths={'equal'} onSubmit={props.onSubmit} style={{width: '100%'}}>
			{props.fieldConfigs.map((fieldConfig, index) => {
				if(fieldConfig.control !== 'button') {
					return <FormField key={index} {...fieldConfig} onChange={handleOnChange}/>
				}
				return  <FormField key={index} {...fieldConfig}> {fieldConfig.name}</FormField>
			})}
		</Form>
	)
};

FormBuilder.propTypes = {
	fieldConfigs: PropTypes.array.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
};


export default FormBuilder;