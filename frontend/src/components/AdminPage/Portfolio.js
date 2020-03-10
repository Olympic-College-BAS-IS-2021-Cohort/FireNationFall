import React, {useState} from 'react';
import {Header} from 'semantic-ui-react';

import axios from 'axios';

import {useAuth0} from '../../react-auth0-spa';


import AboutForm from './PortfolioForms/AboutForm';
import EducationForm from './PortfolioForms/EducationForm';
import ExperienceForm from './PortfolioForms/ExperienceForm';
import SkillsForm from './PortfolioForms/SkillsForm';

import AfterSubmit from './AfterSubmit';


export default (props) => {

	console.log('props in Portfolio', props);
	let aboutInitialData, experienceInitialData, educationInitialData, skillsInitialData, isEditing;

	if (props.data) {
		isEditing = true;
		const {education, experience, skills, about, name, pictureUrl, metaInfo, shortDescription, published} = props.data;
		aboutInitialData = {
			about,
			name,
			pictureUrl,
			metaInfo,
			shortDescription,
			published
		};
		experienceInitialData = experience;
		educationInitialData = education;
		skillsInitialData = skills;
	}
	const {getTokenSilently} = useAuth0();

	const [form, setForm] = useState({
		formIndex: 0,
		formData: null
	});

	function buildFormData(formData, data, parentKey) {
		if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
			Object.keys(data).forEach(key => {
				buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
			});
		} else {
			const value = data == null ? '' : data;

			formData.append(parentKey, value);
		}
	}


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

			const formData = new FormData();

			buildFormData(formData, data);


			if(!isEditing) {
				axios.post('/api/portfolios', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
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
					console.log('error posting portfolio', err);
				})
			} else {
				axios.patch(`/api/portfolios/${props.data._id}`, formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
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
					console.log('err editing portfolio', err);
				})
			}
		}
	};

	//FIXME: passing only the first element in arrays
	let formsArray = [
		AboutForm({
			onSave: onSaveHandler,
			btnName: 'Save',
			initialData: aboutInitialData
		}),
		EducationForm({onSave: onSaveHandler, btnName: 'Save', initialData: educationInitialData}),
		ExperienceForm({onSave: onSaveHandler, btnName: 'Save', initialData: experienceInitialData}),
		SkillsForm({onSave: onSaveHandler, btnName: 'Submit', initialData: skillsInitialData}),
		AfterSubmit()
	];
	//

	return (
		<>
			{formsArray[form.formIndex]}
		</>
	)
}