import React, {useRef} from 'react';

import {Sidebar, Icon, Menu, Sticky, Image, Segment, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const SideBarNavigation = (props) => {

	const sidebarRef = useRef(null);

	return (
		<Sidebar.Pushable>
			<Sidebar
				as={Menu}
				animation={'push'}
				icon={'labeled'}
				inverted
				vertical
				onHide={() => props.onClick(false)}
				onClick={() =>props.onClick(false)}
				visible={props.visible}
				width={'thin'}
			>
				<Menu.Item as={Link} to={'/'}>
					<Icon name={'home'}/>
					Home
				</Menu.Item>
				<Menu.Item as={Link} to={'/portfolios'}>
					<Icon name={'suitcase'}/>
					Portfolios
				</Menu.Item>
				<Menu.Item as={Link} to={'/blogs'}>
					<Icon name={'blogger'}/>
					Blogs
				</Menu.Item>

			</Sidebar>
			<Sidebar.Pusher dimmed={props.visible}>
				{props.children}
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	)
};

export default SideBarNavigation;
