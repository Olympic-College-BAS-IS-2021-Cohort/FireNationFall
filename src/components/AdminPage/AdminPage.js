import React, {useState} from 'react';
import {Accordion, Icon, Grid, Container, Segment, List} from 'semantic-ui-react';


import helpers from './helpers';

export default (props) => {

	const [activeIndex, setActiveIndex] = useState(null);

	const handleOnClick = (e, titleProps) => {
		const {index} = titleProps;
		const newIndex = activeIndex === index ? -1 : index;
		setActiveIndex(newIndex);
	};

	const handleListItemClick = (e, maybe) => {
		console.log(e, maybe);
	};

	const portfolioFunctions = [
		{
			content: 'New Portfolio',
			index: 0
		},
		{
			content: 'Edit Portfolio',
			index: 1
		}
	];

	const articlefunctions = [
		{
			content: 'New Article',
			index: 0
		},
		{
			content: 'Edit Article',
			index: 0
		}
	];

	return (
		<Grid style={{minHeight: '100vh'}} container>
			<Grid.Row>
				<Grid.Column width={4} style={{height: '100%'}} verticalAlign={'middle'}>
					<Segment>
						<Accordion fluid>
							<Accordion.Title
								active={activeIndex === 0}
								onClick={handleOnClick}
								index={0}
							>
								<Icon name="dropdown"/>
								Portfolios
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 0}>
								<List link animated onItemClick={handleListItemClick}
								      items={helpers.transformItemsToLink(portfolioFunctions)}/>
							</Accordion.Content>
							<Accordion.Title
								active={activeIndex === 1}
								onClick={handleOnClick}
								index={1}
							>
								<Icon name="dropdown"/>
								Article
							</Accordion.Title>
							<Accordion.Content active={activeIndex === 1}>
								<List link animated onItemClick={handleListItemClick}
								      items={helpers.transformItemsToLink(articlefunctions)}/>
							</Accordion.Content>
						</Accordion>
					</Segment>
				</Grid.Column>
				<Grid.Column width={12} style={{height: '100%'}}>
					<Segment>
						<Accordion>
							<Accordion.Title>
								<Icon name="dropdown"/>
								Render something dynamic here
							</Accordion.Title>
						</Accordion>
					</Segment>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}