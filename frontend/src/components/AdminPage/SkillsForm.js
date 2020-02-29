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
		onSubmit: function onPortfolioFormSubmit (values)  {
			console.log(values, 'skills form');
			//passing values of this form up to container's component
			const list = [
				'category',
				'list'
			];
			props.onSave({
				skills: list.reduce((acc, currentVal) => {
					if(currentVal === 'list') {
						acc = {
							...acc,
							[currentVal]: values[currentVal].split(',').map(skill => {
								return skill.trim();
							})
						}
					} else {
						acc = {
							...acc,
							[currentVal]: values[currentVal]
						}
					}
					return acc;
				}, {})
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
			<h1>Skills</h1>
			<FormBuilder {...formConfigs}/>
		</>
	)
}