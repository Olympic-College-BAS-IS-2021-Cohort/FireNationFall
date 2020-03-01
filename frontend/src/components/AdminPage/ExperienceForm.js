import React from 'react';

import FormBuilder from '../Form/FormBuilder';



export default (props) => {

	const formConfigs = {
		fieldConfigs : [
			{
				label: 'Company',
				placeholder: `Where you worked`,
				control: 'input',
				name: 'company'
			},
			{
				label: 'Start Date',
				control: 'input',
				type: 'date',
				name: 'startDateJob'
			},
			{
				label: 'End Date',
				control: 'input',
				type: 'date',
				name: 'endDateJob'
			},
			{
				label: 'Position',
				control: 'input',
				name: 'position'
			},
			{
				label: 'Job Description',
				control: 'textarea',
				name: 'jobDescription'
			}
		],
		onSubmit: function onPortfolioFormSubmit (packagedData)  {
			props.onSave({
				experience: packagedData
			});
		},
		onChange: function onPortfolioInputChanges (inputName, value) {
			console.log('handling portfolio input changes');
			console.log(inputName, value);
		},
		btnName: props.btnName
	};

	return (
		<>
			<h1>Experience</h1>
			<FormBuilder {...formConfigs}/>
		</>
	)
}