import React from 'react';

import FormBuilder from '../../Form/FormBuilder';

export default (props) => {

	let category, list;
	if(props.initialData) {
		const {initialData} = props;
		category = initialData.company;
		list = initialData.list.join(',');
	}

	const formConfigs = {
		formGroups: [
			[
				{
					label: 'Category',
					placeholder: `Category of this skill sets`,
					control: 'input',
					name: 'category',
					initialValue: category
				}
			],
			[
				{
					label: 'List of Skills',
					placeholder: 'Comma separate the individual skills',
					control: 'input',
					name: 'list',
					initialValue: list
				}
			]
		],
		onSubmit: function onSkillsFormSubmit (packagedData)  {

			const fieldConfigs = formConfigs.formGroups.reduce((acc, formGroup) => {
				return acc.concat(formGroup);
			});

			//TODO: onl works with 1 list for now, fix it when adding multiple forms
			packagedData['list'] = packagedData['list'].split(',').map(skill => {
				return skill.trim();
			});

			packagedData = fieldConfigs.reduce((acc, currentConfig) => {
				return {
					...acc,
					[currentConfig.name] : packagedData[currentConfig.name]
				}
			}, {});

			props.onSave({
				skills: packagedData
			});
		},
		btnName: props.btnName
	};

	return (
		<>
			<h3>Skills</h3>
			<FormBuilder {...formConfigs}/>
		</>
	)
}