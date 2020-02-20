import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Form, FormField} from 'semantic-ui-react';
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
			fieldConfigs : [{
				//...nested fieldConfigs
			}]
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
		<FinalForm onSubmit={(values) => {
			console.log('submitting');
			props.onSubmit(values);
		}} fieldConfigs={props.fieldConfigs} render={props => (
			<Form onSubmit={props.handleSubmit}>
				{props.fieldConfigs.map((fieldConfig, index) => {
					return <FinalField key={index} name={fieldConfig.name} render={({input, meta}) => {
						// console.log(input);
						return (
							<FormField {...input} {...fieldConfig}/>
						)
					}
					}/>
				})}
			</Form>
		)}/>
	)
};

{/*<form onSubmit={props.handleSubmit}>*/}
{/*	<FinalField name={'nameField'} render={({input, meta}) => (*/}
{/*		<div>*/}
{/*			<label>name</label>*/}
{/*			<input type="text" {...input} placeholder="name" />*/}
{/*		</div>*/}
{/*	)}/>*/}
{/*</form>*/}

{/*<Form widths={'equal'} onSubmit={props.onSubmit} style={{width: '100%'}}>*/}
{/*	{props.fieldConfigs.map((fieldConfig, index) => {*/}
{/*		if(fieldConfig.control !== 'button') {*/}
{/*			return <FormField key={index} {...fieldConfig} onChange={handleOnChange}/>*/}
{/*		}*/}
{/*		return  <FormField key={index} {...fieldConfig}> {fieldConfig.name}</FormField>*/}
{/*	})}*/}
{/*</Form>*/}

FormBuilder.propTypes = {
	fieldConfigs: PropTypes.array.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
};


export default FormBuilder;