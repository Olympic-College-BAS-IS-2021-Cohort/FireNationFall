import React from 'react';
import {Segment, Grid} from 'semantic-ui-react';
import {ReactComponent as WorkTogetherSVG} from '../../images/work-together.svg';



export default (props) => (
	<Grid columns={2} stackable verticalAlign={'middle'}>
		<Grid.Row>
			<Grid.Column width={5}>
				<Segment basic textAlign={'center'}>A Team of passionate developers and IT professionals</Segment>
			</Grid.Column>
			<Grid.Column width={11}>
				<Segment basic>
					<WorkTogetherSVG style={{width: "100%"}}/>
				</Segment>
			</Grid.Column>
		</Grid.Row>
	</Grid>
);

