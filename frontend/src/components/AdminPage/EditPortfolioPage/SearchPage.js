import React, {useState} from 'react';
import {Grid, GridColumn, Button, Form, FormInput, Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import axios from 'axios';

export default props => {

	const [results, setResults] = useState(null);

	const handleOnSubmit = (e, ...rest) => {
		//send axios request for resources
		e.preventDefault();
		console.log(e.name.value);
		console.log(rest);
	};

	return(
		<>
				<Header as={'h2'}>Search Portfolios</Header>
				<Form onSubmit={handleOnSubmit}>
					<Grid columns={2}>
						<GridColumn>
							<FormInput
								label={'Search'}
								placeholder={'Enter search term'}
								name={'searchTerm'}
							/>
						</GridColumn>
						<GridColumn>
							<Button type={'submit'}>Search</Button>
						</GridColumn>
					</Grid>
				</Form>
				{results && <Header as={'h3'}>Found {results.length} {results.length > 1 ? 'results': 'result'}:</Header>}
				{results && results.map(result => {
					return <p>result</p>
				})}
		</>
	);
}