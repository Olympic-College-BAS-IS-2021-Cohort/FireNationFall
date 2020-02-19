import React from 'react';
import {Image, Segment, Header, Grid, Container} from 'semantic-ui-react';

//Todo: move inline styles to separate modules
//Todo: refactor the several containers to its own component.


const dummyData = {
	about: {
		description: 'this is the description about me'
	},
	experience : [
		{
			company: 'first company',
			position: 'developer',
			duration: 'from this date to this date',
			description: 'description of what i worked with'
		}
	],
	education: {
		school: 'school name',
		major: 'major 1',
		duration: 'from this to that'
	},
	skills: {
		languages: [
			'language 1',
			'language 2'
		],
		tools: [
			'tool 1',
			'tool 2'
		],
		frameworks: [
			'framework 1',
			'framework 2'
		]
	}
};



export default (props) => {
	return (
		<Container fluid style={{padding: "0px"}}>
			<Grid centered>
				<Grid.Row centered style={{minHeight: "100vh"}}>
					<Segment basic>
						<Image src={'/avatars/T.png'} size={'small'} centered circular/>
						<Header as={'h2'} textAlign={'center'}>
							<Header.Content>Tai Ng</Header.Content>
						</Header>
					</Segment>
				</Grid.Row>
				<Grid.Row centered style={{minHeight: "100vh", background: "linear-gradient(to bottom, #114fad, #0073d1)"}}>
					<Container textAlign={'left'}>
						<Header as={'h1'}>
							About Me
						</Header>
						<p>Some information here</p>
						<p>Some information here</p>
						<p>Some information here</p>
					</Container>
				</Grid.Row>
				<Grid.Row centered style={{minHeight: "100vh", background: "linear-gradient(to bottom, #34c24c, #0b991e)"}}>
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