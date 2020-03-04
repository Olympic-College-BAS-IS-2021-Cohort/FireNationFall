import React, {useState} from 'react';
import {Accordion, Icon, Grid, Segment, List, Header} from 'semantic-ui-react';
import {useAuth0} from '../../react-auth0-spa';

import Portfolio from './Portfolio';
import AboutForm from './PortfolioForms/AboutForm';
import ArticleForm from './ArticleForms/ArticleForm';
import helpers from './helpers';

export default (props) => {

	const SelectIndicator = (props) => {
		return (
			<Header as={'h2'} icon>
				<Icon name={'hand point left'}/>
				Please select a function
				<Header.Subheader>
					A form will appear according to choice.
				</Header.Subheader>
			</Header>
		)
	};

	const [activeIndex, setActiveIndex] = useState(null);
	const [ComponentToRender, setComponentToRender] = useState(SelectIndicator);

	const handleOnClick = (e, titleProps) => {
		const {index} = titleProps;
		const newIndex = activeIndex === index ? -1 : index;
		setActiveIndex(newIndex);
	};

	const {logout} =  useAuth0();

	const handleListItemClick = (e, maybe) => {
		const {index} = maybe;

		switch (index) {
			case -1:
				setActiveIndex(-1);
				setComponentToRender(SelectIndicator);
				break;
			case 0:
				//since Portfolio is a class, JSX has to be used.
				setComponentToRender(<Portfolio/>);
				break;
			case 1:
				//TODO: pass in data here when editing portfolio
				setComponentToRender(<Portfolio/>);
				break;
			case 2:
				setComponentToRender(ArticleForm);
				break;
			case 3:
				setComponentToRender(ArticleForm);
				break;
			default:
				setComponentToRender((props) => {
					return (
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

	return (
		<Grid style={{minHeight: '100vh'}} container>
			<Grid.Row style={{marginTop: '20px'}}>
				<Grid.Column width={4} style={{height: '100%'}} verticalAlign={'middle'}>
					<Segment>
						<List link>
							<List.Item as={'a'} index={-1} onClick={handleListItemClick}>
								Home
							</List.Item>
						</List>
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
						<List link>
							<List.Item as={'a'} index={-1} onClick={() => logout()}>
								Logout
							</List.Item>
						</List>
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