import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Accordion, Icon, Grid, Container, Menu} from 'semantic-ui-react';


export default(props) => {


	return (
			<Container>
				<Grid columns={2}>
					<Grid.Column width={4}>
						<Accordion>
							<Accordion.Title>
								<Icon name="dropdown"/>
								Portfolios
							</Accordion.Title>
						</Accordion>
					</Grid.Column>
					<Grid.Column width={12}>
						<p>HEY YO</p>
					</Grid.Column>
				</Grid>
			</Container>
	)
}