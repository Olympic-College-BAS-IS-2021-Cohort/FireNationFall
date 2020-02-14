import React, {useState} from 'react';
import {Accordion, Icon, Grid, Segment, List} from 'semantic-ui-react';

import PortfolioForm from './PortfolioForm';
import helpers from './helpers';

export default (props) => {

	const [activeIndex, setActiveIndex] = useState(null);
	const [ComponentToRender, setComponentToRender] = useState((props) => {
		return(
			<p>
				Please select a function
			</p>
		)
	});

	const handleOnClick = (e, titleProps) => {
		const {index} = titleProps;
		const newIndex = activeIndex === index ? -1 : index;
		setActiveIndex(newIndex);
	};

	const handleListItemClick = (e, maybe) => {
		const {index} = maybe;

		switch(index) {
			case 0: setComponentToRender(PortfolioForm);
			break;
			default: setComponentToRender((props) => {
				return(
					<p>
						Please select a function
					</p>
				)
			});
		}
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
			index: 2
		},
		{
			content: 'Edit Article',
			index: 3
		}
	];

	console.log(ComponentToRender);

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
								      items={helpers.transformItemsToLink(portfolioFunctions)} listname={'portfolio'}/>
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
						{ComponentToRender}
					</Segment>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}