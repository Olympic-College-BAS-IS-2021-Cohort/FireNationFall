import React, {useState} from 'react';
import axios from 'axios';

import PortfolioContext from '../../contexts/PortfolioContext';
import {useAuth0} from '../../react-auth0-spa';


import AboutForm from './AboutForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import SkillsForm from './SkillsForm';

import AfterSubmit from './AfterSubmit';
import {map} from 'react-bootstrap/cjs/ElementChildren';


export default (props) => {

	// state = {
	// 	forms:,
	// 	currentFormIndex : 0
	// };

	const {getTokenSilently} = useAuth0();

	let formsArray = [
		AboutForm,
		EducationForm,
		ExperienceForm,
		SkillsForm,
		AfterSubmit
	];

	const [form, setForm] = useState({
		formIndex : 0,
		formData: null
	});


	const onSaveHandler = async (values) => {
		if (form.formIndex < formsArray.length - 2) {
			setForm(prevState => {
				return {
					formIndex: prevState.formIndex + 1,
					formData: {
						...prevState.formData,
						...values
					}
				}
			});
		} else {

			const token = await getTokenSilently();

			const data = {
				...form.formData,
				...values
			};

			console.log(data);
			// {
			// 	clientID: 'OS4q4gAZovKeNFaZf9ScOYxrmZ4ojKps',
			// 		domain: 'fire-nation.auth0.com',
			// 	responseType: 'token id_token',
			// 	audience: 'https://localhost:3001/api',
			// 	redirectUri: 'https://localhost:3001/admin',
			// 	scope: 'openid profile read:timesheets create:timesheets'
			// }


			axios.post('https://localhost:3001/api/portfolios', {
				...data,
				experience: [data.experience],
				education: [data.education],
				skills: [data.skills]
			}, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(result => {
				console.log(result);
				setForm(prevState => {
					return {
						formIndex: prevState.formIndex + 1
					}
				});
			}).catch(err => {
				console.log(err);
			})
		}
	};

	//FIXME: rendering is not correct.

	let Component = null;
	// if (form.formIndex === formsArray.length - 2) {
	// 	Component = formsArray[form.formIndex]({onSave: onSaveHandler, btnName: 'Submit'});
	// } else if (form.formIndex === formsArray.length - 1) {
	// 	Component = formsArray[form.formIndex]({onSave: onSaveHandler, btnName: 'Save'});
	// } else {
	// 	Component = formsArray[form.formIndex]({onClick: () => console.log('clicked')})
	// }

	// if(form.formIndex === formsArray.length - 1) {
	// 	Component = formsArray[form.formIndex]({onClick: () => console.log('clicked')})
	// } else if(form.formIndex === formsArray.length - 2) {
	// 	Component = formsArray[form.formIndex]({onSave: onSaveHandler, btnName: 'Submit'});
	// } else {
	// 	Component = formsArray[form.formIndex]({onSave: onSaveHandler, btnName: 'Save'});
	// }

	//this Portfolio component will receive data as part of props

	formsArray = formsArray.map((form, index) => {
		if(index === formsArray.length - 1) {
			return form({onClick: () => console.log('clicked')})
		}
		if(index === formsArray.length - 2) {
			return form({onSave: onSaveHandler, btnName: 'Submit'})
		}
		return form({onSave: onSaveHandler, btnName: 'Save'})
	});
	//

	return (
		<>
			{formsArray[form.formIndex]}
		</>
	)
}