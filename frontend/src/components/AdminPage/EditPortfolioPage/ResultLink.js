import React from 'react';

import {Item, ItemHeader, ItemContent, ItemDescription, ItemExtra, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


export default props => {
	return (
		<Item onClick={() => props.onClick(props)}>
			<ItemContent>
				<ItemHeader as={'a'}>{props.name}</ItemHeader>
				<ItemDescription>{props.shortDescription}</ItemDescription>
				<ItemExtra>
					<Button primary floated={'right'}>
						Edit
					</Button>
				</ItemExtra>
			</ItemContent>
		</Item>
	)
}