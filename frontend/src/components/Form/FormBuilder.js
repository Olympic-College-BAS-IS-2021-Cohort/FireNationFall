import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Button, Form, FormField, FormGroup} from 'semantic-ui-react'
import {Formik} from 'formik';
import * as Yup from 'yup';

import CustomField from './CustomField';


//example of rule sets
const rulesSet = {
	required: {
		validate: (value, condition = false) => {
			return ('' !== value.trim()) === condition;
		}
	},
	minLength: {
		validate: (value, condition = 1) => {
			return value.length >= condition;
		}
	}
}

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

	const {formGroups, onChange, onSubmit, ...formProps} = props;

	const [validForm, setValidForm] = useState(null);

	const fieldConfigs = formGroups.reduce((acc, formGroup) => {
		return acc.concat(formGroup);
	});

	const initialValues = fieldConfigs.reduce((acc, fieldConfig) => {
		return {
			...acc,
			[fieldConfig.name]: fieldConfig.initialValue
		}
	}, {});


	//package all yup validations into a Yup object that Formik can utilize.
	const validationSchema = Yup.object(fieldConfigs.reduce((acc, fieldConfig) => {
		return {
			...acc,
			[fieldConfig.name]: fieldConfig.validationSchema
		}
	}, {}));

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, {setSubmitting}) => {
				console.log(values);
				onSubmit(values);
				setSubmitting(false);
			}}
			{...formProps}
		>
			{
				props => {
					return (
						<Form onSubmit={props.handleSubmit} {...formProps}>
							{
								formGroups.map(formGroup => {

									return (
										<FormGroup widths={'equal'}>
											{formGroup.map(fieldConfig => {
												let Component = <CustomField key={fieldConfig.name} {...fieldConfig}/>;

												if(fieldConfig.type === 'file') {
													Component = <FormField key={fieldConfig.name} {...fieldConfig} onChange={e => {
														props.setFieldValue('picture', e.currentTarget.files[0])
													}}/>
												}
												return Component;
											})}
										</FormGroup>
									)

								})
							}
							<Button style={{justifySelf: 'right'}} type={'submit'}>{formProps.btnName}</Button>
						</Form>
					)
				}
			}
		</Formik>
	)
};


// {
// 	props => {
// 		return  (
// 			<Form onSubmit={props.handleSubmit} {...formProps}>
// 				{
// 					fieldConfigs.map(fieldConfig => {
// 						return (
// 							<CustomField {...fieldConfig}/>
// 						)
// 					})
// 				}
// 				<Button style={{justifySelf: 'right'}} type={'submit'}>{formProps.btnName}</Button>
// 			</Form>
// 		)
// 	}
// }

FormBuilder.propTypes = {
	fieldConfigs: PropTypes.array.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
};


export default FormBuilder;