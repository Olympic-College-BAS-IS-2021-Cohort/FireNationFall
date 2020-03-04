import React, {useRef} from 'react';
import * as Yup from 'yup';

import {Step, Button} from 'semantic-ui-react';


import FormBuilder from '../../Form/FormBuilder';


export default (props) => {

	const FILE_SIZE = 30000 * 1024;
	const SUPPORTED_FORMATS = [
		'image/jpg',
		'image/jpeg',
		'image/gif',
		'image/png'
	];

	const formConfigs = {
		fieldConfigs: [
			{
				label: 'Name',
				placeholder: `Enter subject's name`,
				control: 'input',
				name: 'name',
				autocomplete: 'off',
				validationSchema: Yup.string().min(1, 'Must have at least 1 character').required('Required')
			},
			{
				label: 'Picture',
				placeholder: `select a picture file`,
				control: 'input',
				type: 'file',
				name: 'picture',
				// validationSchema: Yup
				// 	.mixed()
				// 	.required("A file is required")
				// 	.test(
				// 		"fileSize",
				// 		"File too large, max of up to 0.375MB is allowed",
				// 		value => value && value.size <= FILE_SIZE
				// 	)
				// 	.test(
				// 		"fileFormat",
				// 		"Unsupported Format",
				// 		value => value && SUPPORTED_FORMATS.includes(value.type)
				// 	)
			},
			{
				label: 'Meta Info',
				placeholder: 'Add a short description of your role (e.g: Network Engineer)',
				control: 'input',
				name: 'metaInfo',
				validationSchema: Yup.string().min(1, 'Must have at least 1 character').required('Required')
			},
			{
				label: 'Short Description',
				placeholder: 'Add a short description of yourself',
				control: 'textarea',
				name: 'shortDescription',
				validationSchema: Yup.string().min(1, 'Must have at least 1 character').max(250, 'Max of 250 chars').required('Required')
			},
			{
				label: 'About Me',
				placeholder: `Enter things about something`,
				control: 'textarea',
				name: 'about',
			},
			{
				label: 'Published',
				control: 'input',
				type: 'checkbox',
				name: 'published',
				validationSchema: Yup.boolean().required('Required')
			}

		],
		onSubmit: function onPortfolioFormSubmit(packagedData) {
			console.log(packagedData);
			//passing values of this form up to container's component
			props.onSave(packagedData);
		},
		btnName: props.btnName,
		enctype: 'multipart/form-data'
	};

	return (
		<>
			<h1>About</h1>
			<FormBuilder {...formConfigs}/>
		</>
	)
}

