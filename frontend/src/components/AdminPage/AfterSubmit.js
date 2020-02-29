import React from 'react';
import {Header, Icon, Button} from 'semantic-ui-react';


export default (props) => {
	return(
		<div>
			<Header as='h2' icon textAlign='center'>
				<Icon name='check circle' circular />
				<Header.Content>Completed</Header.Content>
			</Header>
		</div>
	)
};