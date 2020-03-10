import React from 'react';
import * as Yup from 'yup';
import FormBuilder from '../../Form/FormBuilder';

export default (props) => {

	let institution, startDateSchool, endDateSchool, major;
	if(props.initialData) {
		const {initialData} = props;
		institution = initialData.institution;
		startDateSchool = initialData.startDateSchool;
		endDateSchool = initialData.endDateSchool;
		major = initialData.major;
	}

	const formConfigs = {
		formGroups: [
			[
				{
					label: 'Institution',
					placeholder: `Where you graduated`,
					control: 'input',
					name: 'institution',
					initialValue: institution,
					validationSchema: Yup.string().required('Required')
				}
			],
			[
				{
					label: 'Start Date',
					control: 'input',
					type: 'date',
					name: 'startDateSchool',
					initialValue: startDateSchool,
					validationSchema: Yup.date().required('Required')
				}
			],
			[
				{
					label: 'End Date',
					control: 'input',
					type: 'date',
					name: 'endDateSchool',
					initialValue: endDateSchool
				}
			],
			[
				{
					label: 'Major',
					control: 'input',
					name: 'major',
					initialValue: major,
					validationSchema: Yup.string().min(1, 'Must have at least 1 character').required('Required')
				}
			]
		],
		onSubmit: function onPortfolioFormSubmit (packagedData)  {

			//FIXME: Be careful when adding multiple form, the reduced data won't be correct

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
				education: packagedData
			});
		},
		btnName: props.btnName
	};

	return (
		<>
			<h3>Education</h3>
			<FormBuilder {...formConfigs}/>
		</>
	)
}