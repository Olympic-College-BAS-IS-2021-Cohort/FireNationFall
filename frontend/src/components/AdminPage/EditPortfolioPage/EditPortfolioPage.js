import React, {useState} from 'react';

import {Grid, GridRow, Container} from 'semantic-ui-react';

import SearchPage from './SearchPage';
import Portfolio from '../Portfolio';

export default props => {
	const [currentPortfolio, setCurrentPortfolio] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);
	//have an array of components to render
	//[SearchPage, Portfolio]
	//render the Search Page first
	//when user click on a link in SearchPage
	//pass the data to Portfolio and render
	const handleItemClick = portfolioData => {
		//when an item is clicked
		//set active index to the next index
		//render the index at the new activeIndex
		console.log(portfolioData);
		setActiveIndex(prevState => {
			return prevState + 1;
		});
		setCurrentPortfolio(portfolioData);

	};

	const componentArray =[
		SearchPage({onItemClick: handleItemClick}),
		Portfolio({data: currentPortfolio})
	];




	return <Container fluid>
		{componentArray[activeIndex]}
	</Container>
};