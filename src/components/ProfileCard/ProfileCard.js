import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import {Card, Image, Button, Responsive} from 'semantic-ui-react';

const ProfileCard = (props) => {
	console.log(props);
	return (
		<Card>
			<Image src={'/avatars/T.png'} size={'medium'} centered/>
			<Card.Content textAlign={'center'}>
				<Card.Header>Tai</Card.Header>
				<Card.Meta>
					<span>Full-stack engineer</span>
				</Card.Meta>
				<Card.Description>
					Tai is a full-stack web engineer
				</Card.Description>
			</Card.Content>
			<Card.Content extra textAlign={'center'}>
				<Button as={Link} to={`${props.match.url}/${'1'}`}>View Portfolio</Button>
			</Card.Content>
		</Card>
	)
};

export default withRouter(ProfileCard);