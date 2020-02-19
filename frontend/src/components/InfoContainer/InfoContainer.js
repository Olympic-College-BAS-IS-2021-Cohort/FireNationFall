import React from 'react';
import {Container, Header} from 'semantic-ui-react';

export default (props) => {
	return (
		<Container textAlign={'left'}>
			<Header as={'h1'}>
				{props.header}
			</Header>
			{props.children}
		</Container>
	)
}