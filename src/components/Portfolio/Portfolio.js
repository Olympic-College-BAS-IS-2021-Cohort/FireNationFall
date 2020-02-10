import React from 'react';
import {Image, Segment, Header, Grid} from 'semantic-ui-react';


export default (props) => {
	console.log(props);
	return (
		<>
			<Grid>
				<Grid.Row centered>
					<Segment basic>
						<Image src={'/avatars/T.png'} size={'small'} centered circular/>
						<Header as={'h2'} textAlign={'center'}>
							<Header.Content>Tai Ng</Header.Content>
						</Header>
					</Segment>
				</Grid.Row>
			</Grid>
		</>
	)
};