import React from 'react';

import FormBuilder from '../../Form/FormBuilder';

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
		onSubmit: function onSkillsFormSubmit (packagedData)  {

			packagedData['list'] = packagedData['list'].split(',').map(skill => {
				return skill.trim();
			});

			packagedData = formConfigs.fieldConfigs.reduce((acc, currentConfig) => {
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
			<h1>Skills</h1>
			<FormBuilder {...formConfigs}/>
		</>
	)
}