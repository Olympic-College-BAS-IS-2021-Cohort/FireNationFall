import React, {useState} from 'react';
import {Grid, GridColumn, Button, Form, FormInput, Header, ItemGroup} from 'semantic-ui-react';
import ResultLink from './ResultLink';

import axios from 'axios';

export default props => {

	const [results, setResults] = useState(null);

	const handleOnSubmit = (e) => {
		//send axios request for resources
		e.preventDefault();

		console.log(e.target.name.value);

		axios.get(`/api/portfolios/?name=${e.target.name.value}`)
			.then(result => {
				console.log(result);
				//set result to list of result links
				//when the LInk is clicked, set parent context to the data
				setResults(result.data);
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
			{results && <ItemGroup divided link>
				{results.map(result => {
				return <ResultLink {...result}/>
			})}
			</ItemGroup>}
		</>
	);
}