import React from 'react';
import * as Yup from 'yup';
import FormBuilder from '../../Form/FormBuilder';



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
			packagedData = formConfigs.fieldConfigs.reduce((acc, currentConfig) => {
				return {
					...acc,
					[currentConfig.name] : packagedData[currentConfig.name]
				}
			}, {});

			props.onSave({
				experience: packagedData
			});
		},
		btnName: props.btnName
	};

	const pluckData = (allData) => {

	}

	return (
		<>
			<h1>Experience</h1>
			<FormBuilder {...formConfigs}/>
		</>
	)
}