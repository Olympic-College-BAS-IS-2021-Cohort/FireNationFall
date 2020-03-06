import React, {useState} from 'react';
import {Grid, GridColumn, Button, Form, FormInput, Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import axios from 'axios';

export default props => {

	const [results, setResults] = useState(null);

	const handleOnSubmit = (e) => {
		//send axios request for resources
		e.preventDefault();

		axios.get(`/portfolios?name=${e.target.name.value}`)
			.then(result => {
				console.log(result);

			})
			.catch(e => {
				console.log(e);
			});
	};
	return (
		<>
			<Header as={'h2'}>Search Portfolios</Header>
			<Form onSubmit={handleOnSubmit}>
				<Grid columns={2}>
					<GridColumn verticalAlign={'middle'}>
						<FormInput
							placeholder={'Enter search term'}
							name={'name'}
						/>
					</GridColumn>
					<GridColumn verticalAlign={'middle'}>
						<Button type={'submit'}>Search</Button>
					</GridColumn>
				</Grid>
			</Form>
			{results && <Header as={'h3'}>Found {results.length} {results.length > 1 ? 'results' : 'result'}:</Header>}
			{results && results.map(result => {
				return <p>result</p>
			})}
		</>
	);
}