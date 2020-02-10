import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Input, Menu, Sticky, Responsive, Segment, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import './Navigation.css'

const Navigation = (props) => {
	const [state, setState] = useState({
		activeItem: 'home'
	});

	const onMenuItemClick = (e, {name}) => {
		setState({
			activeItem: name
		})
	};

	return (
			<Menu
				pointing
				borderless
			>
					<Responsive minWidth={Responsive.onlyTablet.minWidth} as={Menu.Menu} position={'left'}>
						<Menu.Item
							as={Link}
							to={'/'}
							name={'home'}
							active={state.activeItem === 'home'}
							onClick={onMenuItemClick}
						/>
						<Menu.Item
							as={Link}
							to={'/portfolios'}
							name={'portfolios'}
							active={state.activeItem === 'portfolios'}
							onClick={onMenuItemClick}
						/>
						<Menu.Item
							as={Link}
							to={'/blog'}
							name={'blog'}
							active={state.activeItem === 'blog'}
							onClick={onMenuItemClick}
						/>
					</Responsive>

					<Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
						<Menu.Item
							as={Button}
							icon={'sidebar'}
							onClick={props.onClick}
						/>
					</Responsive>
				<Menu.Menu position={'right'}>
					<Menu.Item >
						<Input className={'icon'} icon={'search'} placeholder={'Search articles...'} />
					</Menu.Item>
				</Menu.Menu>
			</Menu>
	)
};

export default Navigation;

Navigation.propTypes = {
	layoutRef: PropTypes.object.isRequired
};
