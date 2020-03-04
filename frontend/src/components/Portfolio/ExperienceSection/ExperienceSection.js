import React from 'react';
import {Header} from 'semantic-ui-react';


export default props => {
	return (
		<>
			<p>{props.company}</p>
			<Header as={'h3'}>{props.company}</Header>
			<Header as={'h4'}>{props.position}</Header>
			<p>{props.jobDescription}</p>
			<p>{props.startDateJob}</p>
			<p>{props.endDateJob}</p>
		</>
	)
}