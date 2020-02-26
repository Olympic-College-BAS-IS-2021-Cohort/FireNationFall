import React, {useState} from 'react';
import axios from 'axios';

import PortfolioContext from '../../contexts/PortfolioContext';
import {useAuth0} from '../../react-auth0-spa';


import AboutForm from './AboutForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import SkillsForm from './SkillsForm';


export default (props) => {

	// state = {
	// 	forms:,
	// 	currentFormIndex : 0
	// };

	const {getTokenSilently} = useAuth0();

	const [formData, setFormData] = useState(null);

	const [forms, setForms] = useState([
		AboutForm,
		EducationForm,
		ExperienceForm,
		SkillsForm
	]);

	const [currentFormIndex, setFormIndex] = useState(0);

	const onSaveHandler = async (values) => {
		if (currentFormIndex < forms.length - 1) {
			setFormIndex(prevState => prevState + 1);
			setFormData({
				...formData,
				...values
			});
		} else {

			const token = await getTokenSilently();

			console.log({
				...formData,
				...values
			})
			// {
			// 	clientID: 'OS4q4gAZovKeNFaZf9ScOYxrmZ4ojKps',
			// 		domain: 'fire-nation.auth0.com',
			// 	responseType: 'token id_token',
			// 	audience: 'https://localhost:3001/api',
			// 	redirectUri: 'https://localhost:3001/admin',
			// 	scope: 'openid profile read:timesheets create:timesheets'
			// }



			// axios.post('https://localhost:3001/api/portfolios', {
			// 	published: false,
			// 	name: 'Tai',
			// 	pictureUrl: 'some url here',
			// 	about: 'some about details',
			// 	experience: [{
			// 		startDate: '2020-02-19',
			// 		endDate: '2020-02-19',
			// 		position: 'main person',
			// 		jobDescription: 'job description'
			// 	}],
			// 	education: [{
			// 		institution: 'OC',
			// 		startDate: '2020-02-19',
			// 		endDate: '2020-02-19',
			// 		description: 'education description'
			// 	}],
			// 	skills: [{
			// 		category: 'languages',
			// 		list: [
			// 			'language 1',
			// 			'language 2'
			// 		]
			// 	}]
			// }, {
			// 	headers: {
			// 		Authorization: `Bearer ${token}`
			// 	}
			// }).then(result => {
			// 	console.log(result);
			// }).catch(err => {
			// 	console.log(err);
			// })
		}
	};

	let Component = null;
	if (currentFormIndex === forms.length - 1) {
		Component = forms[currentFormIndex]({onSave: onSaveHandler, btnName: 'Submit'});
	} else {
		Component = forms[currentFormIndex]({onSave: onSaveHandler, btnName: 'Save'});
	}


	return (
		<>
			{Component}
		</>
	)
}