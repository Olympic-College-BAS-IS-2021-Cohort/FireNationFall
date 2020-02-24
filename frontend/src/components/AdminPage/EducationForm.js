import React from 'react';

import FormBuilder from '../Form/FormBuilder';

export default (props) => {

	const formConfigs = {
		fieldConfigs : [
			{
				label: 'Institution',
				placeholder: `Where you graduated`,
				control: 'input',
				name: 'institution'
			},
			{
				label: 'Start Date',
				control: 'input',
				type: 'date',
				name: 'startDate'
			},
			{
				label: 'End Date',
				control: 'input',
				type: 'date',
				name: 'endDate'
			},
			{
				label: 'Major',
				control: 'input',
				name: 'major'
			}
		],
		onSubmit: function onPortfolioFormSubmit (values)  {
			console.log('handling education form');
			console.log(values);
		},
		onChange: function onPortfolioInputChanges (inputName, value) {
			console.log('handling portfolio input changes');
			console.log(inputName, value);
		}
	};

	return (
		<>
			<h1>Education</h1>
			<FormBuilder {...formConfigs}/>
		</>
	)
}