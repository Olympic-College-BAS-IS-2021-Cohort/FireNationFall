import React from 'react';
import {Header} from 'semantic-ui-react';

import styles from './ExperienceSection.module.css'

export default props => {
	return (
		<>
			<Header as={'h3'} className={styles.Company}>{props.company}</Header>
			<Header as={'h4'} className={styles.Position}>{props.position}</Header>
			<p className={styles.Paragraph}>{props.jobDescription}</p>
			<p className={styles.Date}>{props.startDateJob} - {props.endDateJob || 'Present'}</p>
		</>
	)
}