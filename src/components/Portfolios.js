import React from 'react';
import {Card, Grid, Segment, Header} from 'semantic-ui-react';

// import CardPlaceholder from './CardPlaceholder/CardPlaceholder';
import ProfileCard from './ProfileCard/ProfileCard';


export default (props) => (
	<Grid>
		<Grid.Row centered>
			<Header as={'h2'} attached={'top'}>
				Team Members
			</Header>
		</Grid.Row>

		<Grid.Row centered>
				<Card.Group itemsPerRow={3} centered stackable>
					<ProfileCard/>
					<ProfileCard/>
					<ProfileCard/>
					<ProfileCard/>
					<ProfileCard/>
				</Card.Group>
		</Grid.Row>
	</Grid>
);