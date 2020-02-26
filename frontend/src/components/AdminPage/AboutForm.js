import React from 'react';

import {Step, Button} from 'semantic-ui-react';


import FormBuilder from '../Form/FormBuilder';


export default (props) => {

	const formConfigs = {
		fieldConfigs : [
			{
				label: 'Name',
				placeholder: `Enter subject's name`,
				control: 'input',
				name: 'name'
			},
			{
				label: 'Picture',
				placeholder: `select a picture file`,
				control: 'input',
				type: 'file',
				name: 'picture',
				enctype: 'multipart/form-data'
			},
			{
				label: 'About Me',
				placeholder: `Enter things about something`,
				control: 'textarea',
				name: 'about'
			}
		],
		onSubmit: function onPortfolioFormSubmit (values)  {
			console.log('handling portfolio form');
			console.log(values);
			//passing values of this form up to container's component
			props.onSave(values);
		},
		onChange: function onPortfolioInputChanges (inputName, value) {
			console.log('handling portfolio input changes');
			console.log(inputName, value);
		},
		btnName: props.btnName
	};

	return (
		<>
			<h1>About</h1>
			<FormBuilder {...formConfigs}/>
		</>
	)
}

