import React from 'react';
import {Image, Segment, Header, Grid, Container} from 'semantic-ui-react';


export default (props) => {
	return (
		<Container>
			<Grid centered>
				<Grid.Row centered style={{minHeight: "100vh"}}>
					<Segment basic>
						<Image src={'/avatars/T.png'} size={'small'} centered circular/>
						<Header as={'h2'} textAlign={'center'}>
							<Header.Content>Tai Ng</Header.Content>
						</Header>
					</Segment>
				</Grid.Row>
				<Grid.Row centered style={{minHeight: "100vh"}}>
					<Container textAlign={'left'}>
						<Header as={'h1'}>
							About Me
						</Header>
						<p>Some information here</p>
						<p>Some information here</p>
						<p>Some information here</p>
					</Container>
				</Grid.Row>
				<Grid.Row centered style={{minHeight: "100vh"}}>
					<Container textAlign={'left'}>
						<Header as={'h1'}>
							Experience
						</Header>
						<p>Some information here</p>
						<p>Some information here</p>
						<p>Some information here</p>
					</Container>
				</Grid.Row>
				<Grid.Row centered style={{minHeight: "100vh"}}>
					<Container textAlign={'left'}>
						<Header as={'h1'}>
							Education
						</Header>
						<p>Some information here</p>
						<p>Some information here</p>
						<p>Some information here</p>
					</Container>
				</Grid.Row>
				<Grid.Row centered style={{minHeight: "100vh"}}>
					<Container textAlign={'left'}>
						<Header as={'h1'}>
							Skills
						</Header>
						<p>Some information here</p>
						<p>Some information here</p>
						<p>Some information here</p>
					</Container>
				</Grid.Row>
				<Grid.Row centered style={{minHeight: "100vh"}}>
					<Container textAlign={'left'}>
						<Header as={'h1'}>
							Contact Me
						</Header>
						<p>Some information here</p>
						<p>Some information here</p>
						<p>Some information here</p>
					</Container>
				</Grid.Row>
			</Grid>
		</Container>
	)
};