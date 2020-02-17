import React from 'react';
import {Placeholder, Card, Icon} from 'semantic-ui-react';


export default (props) => (
	<Card fluid>
		<Placeholder fluid>
			<Placeholder.Image square/>
		</Placeholder>
		<Card.Content>
			<Placeholder>
				<Placeholder.Header>
					<Placeholder.Line length='very short'/>
					<Placeholder.Line length='medium'/>
				</Placeholder.Header>
				<Placeholder.Paragraph>
					<Placeholder.Line length='short'/>
				</Placeholder.Paragraph>
			</Placeholder>
		</Card.Content>
	</Card>
);

