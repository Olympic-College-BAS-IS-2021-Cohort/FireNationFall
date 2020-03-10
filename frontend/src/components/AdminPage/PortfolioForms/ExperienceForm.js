import React from 'react';
import * as Yup from 'yup';
import FormBuilder from '../../Form/FormBuilder';



export default (props) => {

	let company, startDateJob, endDateJob, position, jobDescription;
	if(props.initialData) {
		const {initialData} = props;
		company = initialData.company;
		startDateJob = initialData.startDateJob;
		endDateJob = initialData.endDateJob;
		position = initialData.position;
		jobDescription = initialData.jobDescription;
	}

	const formConfigs = {
		formGroups: [
			[
				{
					label: 'Company',
					placeholder: `Where you worked`,
					control: 'input',
					name: 'company',
					initialValue: company
				}
			],
			[
				{
					label: 'Start Date',
					control: 'input',
					type: 'date',
					name: 'startDateJob',
					initialValue: startDateJob
				}
			],
			[
				{
					label: 'End Date',
					control: 'input',
					type: 'date',
					name: 'endDateJob',
					initialValue: endDateJob
				}
			],
			[
				{
					label: 'Position',
					control: 'input',
					name: 'position',
					initialValue: position
				}
			],
			[
				{
					label: 'Job Description',
					control: 'textarea',
					name: 'jobDescription',
					initialValue: jobDescription
				}
			]
		],
		onSubmit: function onPortfolioFormSubmit (packagedData)  {
			//FIXME: be careful when adding multiple forms
			const fieldConfigs = formConfigs.formGroups.reduce((acc, formGroup) => {
				return acc.concat(formGroup);
			});
			packagedData = fieldConfigs.reduce((acc, currentConfig) => {
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
			<h3>Experience</h3>
			<FormBuilder {...formConfigs}/>
		</>
	)
}