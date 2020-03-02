import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Button, Form, FormField} from 'semantic-ui-react';
import {Form as FinalForm, Field as FinalField} from 'react-final-form'


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

	const {fieldConfigs, onChange, onSubmit, ...formProps} = props;

	const [validForm, setValidForm] = useState(null);


	//
	const checkValidity = (value, rules) => {
		//rules shape
		// rules: {
		// 	required: true
		// }

		if(!rules) return true;

		for(let ruleKey in rules) {
			return rulesSet[ruleKey].validate(value, rules[ruleKey]);
		}
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		//check if every fields are valid before submitting




		const packagedData = fieldConfigs.reduce((acc, fieldConfig) => {

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

		let canSubmit = true;

		for(let fieldConfig in fieldConfigs) {
			if(!checkValidity(packagedData[fieldConfig.name], fieldConfig.rules)) {
				setValidForm(false);
				fieldConfig = {
					...fieldConfig,
					valid: false
				};
				canSubmit = false;
				break;
			}
		}

		if(canSubmit) {
			onSubmit(packagedData);
		}
	};

	const handleOnChange = (e) => {
		const inputName = e.target.name;

		console.log('tf');

		for(let fieldConfig in fieldConfigs) {
			//only check if it's the correct fieldConfig
			//otherwise break out of the loop
			console.log('what')
			if(fieldConfig.name === inputName) {
				//check if it pass the rules
				const value = e.target[inputName];
				const rules = fieldConfig.rules || null;

				console.log('not even');
				//check validity
				//if it returns false,
					//then set validForm to be false
					//and modify the fieldConfigs to include "valid" property
				if(!checkValidity(value, rules)) {
					console.log('got here');
					fieldConfig = {
						...fieldConfig,
						valid: false
					};
					setValidForm(false);
				} else {
					console.log('validated')
					if(fieldConfig.valid === false) {
						fieldConfig = {
							...fieldConfig,
							valid: true
						}
					}
				}
				break;
			}
		}

		console.log(fieldConfigs);

		//may be we don't need an intermediate step here
		// props.onChange(e);
	};

	const handleOnFocus = (e) => {
		console.log(e.target);
	};

	console.log(validForm);
	return (
		<Form onSubmit={handleOnSubmit} {...formProps}>
			{
				fieldConfigs.map((fieldConfig) => {
					return (
						<FormField key={fieldConfig.name} {...fieldConfig} onChange={handleOnChange} onFocus={handleOnFocus} error={fieldConfig.valid}/>
					)
				})
			}
			<Button style={{justifySelf: 'right'}} type={'submit'} disabled={!validForm}>{props.btnName}</Button>
		</Form>
	)
};

FormBuilder.propTypes = {
	fieldConfigs: PropTypes.array.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired
};


export default FormBuilder;