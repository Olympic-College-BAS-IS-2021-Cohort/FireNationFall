import React from 'react';

import FormBuilder from '../Form/FormBuilder';


export default (props) => {

	const formConfigs = {
		fieldConfigs : [
			{
				label: 'Name',
				placeholder: `Enter subject's name`,
				control: 'input',
				name: 'name'
			},
			{
				label: 'Picture',
				placeholder: `select a picture file`,
				control: 'input',
				type: 'file',
				name: 'picture'
			},
			{
				label: 'About Me',
				placeholder: `Enter things about something`,
				control: 'textarea',
				name: 'about'
			},
			{
				label: 'Experience',
				placeholder: `Your past experience (optional)`,
				control: 'textarea',
				name: 'experience'
			},
			{
				label: 'Education',
				placeholder: `Your Education`,
				control: 'textarea',
				name: 'education'
			},
			{
				label: 'Skills',
				placeholder: `Your skills`,
				control: 'textarea',
				name: 'skills'
			},
			{
				label: 'Contact Me',
				placeholder: `Your contact info`,
				control: 'textarea',
				name: 'contact'
			},
		]
	};

	const handleOnSubmit = (e, ...rest) => {
		console.log('handling portfolio form');
		console.log(e, rest);
	};

	return (
		<>
			<FormBuilder {...formConfigs} onSubmit={handleOnSubmit}/>
		</>
	)
}

