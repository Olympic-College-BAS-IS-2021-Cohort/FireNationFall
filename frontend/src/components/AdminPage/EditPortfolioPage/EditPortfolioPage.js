import React from 'react';

import {Grid, GridRow, Container} from 'semantic-ui-react';

import SearchPage from './SearchPage';

export default props => {

	//have an array of components to render
	//[SearchPage, Portfolio]
	//render the Search Page first
	//when user click on a link in SearchPage
	//pass the data to Portfolio and render that


	return <Container fluid>
		<SearchPage/>
	</Container>
};