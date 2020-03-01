import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Button, Form, FormField} from 'semantic-ui-react';
import {Form as FinalForm, Field as FinalField} from 'react-final-form'

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
		},
		{
			control: 'nested',
			fieldConfigs: [{
				//...nested fieldConfigs
			}]
		}
	],
	onSubmit: function handleSubmit(e) {
		console.log(e);
		console.log('handling submit');
	}
};

const FormBuilder = (props) => {

	const {fieldConfigs, onChange, onSubmit, ...formProps} = props;

	const handleOnSubmit = (e) => {
		e.preventDefault();

		const data = fieldConfigs.reduce((acc, fieldConfig) => {

			if(fieldConfig.type && fieldConfig.type === 'file') {
				acc = {
					...acc,
					[fieldConfig.name] : e.target[fieldConfig.name].files[0]
				}
			} else {
				acc = {
					...acc,
					[fieldConfig.name] : e.target[fieldConfig.name].value
				};
			}

			return acc;
		},{});

		onSubmit(data);
	};

	const handleOnChange = (e) => {

		//may be we don't need an intermediate step here
		props.onChange(e);
	};


	return (
		<Form onSubmit={handleOnSubmit} {...formProps}>
			{
				fieldConfigs.map((fieldConfig) => {
					return (
						<FormField key={fieldConfig.name} {...fieldConfig} onChange={handleOnChange}/>
					)
				})
			}
			<Button style={{justifySelf: 'right'}} type={'submit'}>{props.btnName}</Button>
		</Form>
	)
};

FormBuilder.propTypes = {
	fieldConfigs: PropTypes.array.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
};


export default FormBuilder;