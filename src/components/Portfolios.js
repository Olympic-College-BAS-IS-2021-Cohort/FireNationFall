import React from 'react';
import {Card, Grid, Segment, Header, Container} from 'semantic-ui-react';

import CardPlaceholder from './CardPlaceholder/CardPlaceholder';
import ProfileCard from './ProfileCard/ProfileCard';


export default (props) => (
	<Grid>
		<Grid.Row centered>
			<Header as={'h2'} attached={'top'}>
				Team Members
			</Header>
		</Grid.Row>

		<Grid.Row>
			<Segment attached style={{borderRadius: '0'}}>
				<Card.Group itemsPerRow={3} centered stackable>
					<ProfileCard/>
					<ProfileCard/>
					<ProfileCard/>
					<ProfileCard/>
					<ProfileCard/>
				</Card.Group>
			</Segment>
		</Grid.Row>
	</Grid>
);


{/*<Grid columns={3} stackable>*/
}
{/*	<Grid.Row>*/
}
{/*		<Grid.Column>*/
}
{/*			<CardPlaceholder/>*/
}
{/*		</Grid.Column>*/
}
{/*		<Grid.Column>*/
}
{/*			<CardPlaceholder/>*/
}
{/*		</Grid.Column>*/
}
{/*		<Grid.Column>*/
}
{/*			<CardPlaceholder/>*/
}
{/*		</Grid.Column>*/
}
{/*	</Grid.Row>*/
}
{/*</Grid>*/
}