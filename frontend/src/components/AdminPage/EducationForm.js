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
		onSubmit: function onPortfolioFormSubmit (values, ...rest)  {
			console.log(values, 'educationform');
			const list = [
				'institution',
				'startDateSchool',
				'endDateSchool',
				'major'
			];
			//passing values of this form up to container's component

			//for each element in array
			props.onSave({
				education: list.reduce((acc, currentVal) => {
					return {
						...acc,
						[currentVal]: values[currentVal]
					}
				}, {})
			});
		},
		// onChange: function onPortfolioInputChanges (inputName, value) {
		// 	console.log('handling portfolio input changes');
		// 	console.log(inputName, value);
		// },
		btnName: props.btnName
	};

	return (
		<>
			<h1>Education</h1>
			<FormBuilder {...formConfigs}/>
		</>
	)
}