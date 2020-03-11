import React from 'react';
import {Header} from 'semantic-ui-react';

import styles from './EducationSection.module.css'

export default props => {
	return (
		<>
			<Header as={'h3'} className={styles.Header}>{props.instituion}</Header>
			<Header as={'h4'} className={styles.SubHeader}>{props.major}</Header>
			<p className={styles.Date}>{props.startDateSchool} - {props.endDateSchool || 'Present'}</p>
			<p className={styles.Paragraph}>{props.description}</p>
		</>
	)
}