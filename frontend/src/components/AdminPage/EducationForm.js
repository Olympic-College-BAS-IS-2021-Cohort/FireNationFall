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
				name: 'startDateSchool'
			},
			{
				label: 'End Date',
				control: 'input',
				type: 'date',
				name: 'endDateSchool'
			},
			{
				label: 'Major',
				control: 'input',
				name: 'major'
			}
		],
		onSubmit: function onPortfolioFormSubmit (packagedData)  {
			props.onSave({
				education: packagedData
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
			<h1>Education</h1>
			<FormBuilder {...formConfigs}/>
		</>
	)
}