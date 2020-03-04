import React from 'react';
import {Header} from 'semantic-ui-react';

export default props => {
	return (
		<>
			<Header as={'h3'}>{props.instituion}</Header>
			<Header as={'h4'}>{props.major}</Header>
			<p>{props.description}</p>
		</>
	)
}