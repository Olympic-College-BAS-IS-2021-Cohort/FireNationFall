import React, {useContext, useEffect} from 'react';
import {Card, Grid, Container, Header} from 'semantic-ui-react';

import ProfileCard from './ProfileCard/ProfileCard';
import PortfoliosContext from '../contexts/PortfoliosContext';

export default (props) => {

	const value = useContext(PortfoliosContext);

	useEffect(() => {

	},[value]);

	return (
		<Container textAlign={'center'}>
			<Grid centered>
				<Grid.Row centered>
					<Header as={'h2'} attached={'top'}>
						Team Members
					</Header>
				</Grid.Row>

				<Grid.Row centered>
					<Card.Group itemsPerRow={3} centered stackable>
						{value.portfolios.map((portfolio, index) => {
							return <ProfileCard key={portfolio.name} index={index} {...portfolio}/>
						})}
					</Card.Group>
				</Grid.Row>
			</Grid>
		</Container>
	)
};