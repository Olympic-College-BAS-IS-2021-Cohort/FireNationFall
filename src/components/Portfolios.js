import React from 'react';
import {Card, Segment, Header} from 'semantic-ui-react';

import CardPlaceholder from './CardPlaceholder/CardPlaceholder';


export default (props) => (
	<>
		<Header as={'h2'} attached={'top'}>
			Team Members
		</Header>
		<Segment attached color={'red'} style={{borderRadius: '0'}}>
			<Card.Group itemsPerRow={3} stackable>
				<CardPlaceholder/>
				<CardPlaceholder/>
				<CardPlaceholder/>
			</Card.Group>
		</Segment>

	</>
);


{/*<Grid columns={3} stackable>*/}
{/*	<Grid.Row>*/}
{/*		<Grid.Column>*/}
{/*			<CardPlaceholder/>*/}
{/*		</Grid.Column>*/}
{/*		<Grid.Column>*/}
{/*			<CardPlaceholder/>*/}
{/*		</Grid.Column>*/}
{/*		<Grid.Column>*/}
{/*			<CardPlaceholder/>*/}
{/*		</Grid.Column>*/}
{/*	</Grid.Row>*/}
{/*</Grid>*/}