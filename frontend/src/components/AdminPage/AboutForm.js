import React, {useRef} from 'react';

import {Step, Button} from 'semantic-ui-react';


import FormBuilder from '../Form/FormBuilder';


export default (props) => {

	//

	const formConfigs = {
		fieldConfigs : [
			{
				label: 'Name',
				placeholder: `Enter subject's name`,
				control: 'input',
				name: 'name',
				rules: {
					required: true,
				}
			},
			{
				label: 'Picture',
				placeholder: `select a picture file`,
				control: 'input',
				type: 'file',
				name: 'picture',
				rules: {
					required: true
				}
			},
			{
				label: 'About Me',
				placeholder: `Enter things about something`,
				control: 'textarea',
				name: 'about',
				rules: {
					required: true
				}
			},
			{
				label: 'Published',
				control: 'input',
				type: 'checkbox',
				name: 'published'
			}

		],
		onSubmit: function onPortfolioFormSubmit (packagedData)  {

			//passing values of this form up to container's component
			props.onSave(packagedData);
		},
		onChange: function onPortfolioInputChanges (e) {
			console.log('handling portfolio input changes');
			console.log(e , 'event');
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

