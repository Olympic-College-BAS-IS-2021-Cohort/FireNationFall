import React from 'react';

import FormBuilder from '../Form/FormBuilder';

export default (props) => {

	const formConfigs = {
		fieldConfigs : [
			{
				label: 'Category',
				placeholder: `Category of this skill sets`,
				control: 'input',
				name: 'category'
			},
			{
				label: 'List of Skills',
				placeholder: 'Comma separate the individual skills',
				control: 'input',
				name: 'list'
			}
		],
		onSubmit: function onPortfolioFormSubmit (values)  {
			console.log('handling skills form');
			console.log(values);
		},
		onChange: function onPortfolioInputChanges (inputName, value) {
			console.log('handling portfolio input changes');
			console.log(inputName, value);
		}
	};

	return (
		<>
			<h1>Skills</h1>
			<FormBuilder {...formConfigs}/>
		</>
	)
}