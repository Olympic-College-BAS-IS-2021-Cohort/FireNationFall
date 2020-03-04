import React from 'react';

import {Header, List} from 'semantic-ui-react';

export default props => {
	return (
		<>
			<Header>{props.category}</Header>
			<List relaxed={'very'}>
				{props.list.map(skill => {
					return (
						<List.Item>
							<List.Content>
								<List.Description>{skill}</List.Description>
							</List.Content>
						</List.Item>
					)
				})}
			</List>
		</>
	)
}