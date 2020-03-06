import React from 'react';

import {Item, ItemHeader, ItemContent, ItemDescription, ItemExtra, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


export default props => {

	return (
		<Item onClick={() => console.log('im clicked')}>
			<ItemContent>
				<ItemHeader>{props.name}</ItemHeader>
				<ItemDescription>{props.shortDescription}</ItemDescription>
				<ItemExtra>
					<Button primary floated={'right'} onClick={() => console.log('edit button clicked')}>
						Edit
					</Button>
				</ItemExtra>
			</ItemContent>
		</Item>
	)
}