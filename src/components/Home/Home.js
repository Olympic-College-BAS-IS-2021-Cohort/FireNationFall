import React from 'react';
import {Segment, Grid, Container} from 'semantic-ui-react';
import {ReactComponent as WorkTogetherSVG} from '../../images/work-together.svg';



export default (props) => (
	<Container>
		<Grid stackable verticalAlign={'middle'} centered>
			<Grid.Row>
				<Grid.Column width={4}>
					<Segment basic textAlign={'center'}>A Team of passionate developers and IT professionals</Segment>
				</Grid.Column>
				<Grid.Column width={11}>
					<Segment basic>
						<WorkTogetherSVG style={{width: "100%"}}/>
					</Segment>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container>

);

