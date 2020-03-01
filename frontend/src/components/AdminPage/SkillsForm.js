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
		onSubmit: function onSkillsFormSubmit (packagedData)  {

			packagedData['list'] = packagedData['list'].split(',').map(skill => {
				return skill.trim();
			});

			props.onSave({
				skills: packagedData
			});
		},
		onChange: function onSkillsInputChanges (inputName, value) {
			console.log('handling portfolio input changes');
			console.log(inputName, value);
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