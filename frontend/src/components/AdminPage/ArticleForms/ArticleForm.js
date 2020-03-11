import React from 'react';

import FormBuilder from '../../Form/FormBuilder';

export default (props) => {

	const formConfigs = {
		fieldConfigs : [
			{
				label: 'Title',
				placeholder: `Enter subject`,
				control: 'input',
				name: 'title'
			},
			{
				label: 'Author',
				placeholder: `Enter author's name`,
				control: 'input',
				name: 'author'
			},
			{
				label: 'Date Updated',
				placeholder: `Select Date`,
				control: 'input',
				type: 'date',
				name: 'date'
			},
			{
				label: 'Body',
				placeholder: `Details....`,
				control: 'textarea',
				name: 'body'
			}
		],
		onSubmit: function articleSubmit (e) {
			console.log('handling article submit');
		},
		onChange: function articleInputChangeHandler (inputName, value) {
			console.log('inputs are changing');
			console.log(inputName, value);
		}
	};

	return (
		<>
			<FormBuilder {...formConfigs}/>
		</>
	)
}
