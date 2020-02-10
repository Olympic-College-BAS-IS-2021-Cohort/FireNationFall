import React, {useRef, useState} from 'react';
import {Sticky, Container} from 'semantic-ui-react';

import Navigation from '../Navigation/Navigation';
import SideBarNavigation from '../Navigation/SideBarNavigation';

import styles from './Layout.module.css'


const Layout = (props) => {
	const containerRef = useRef(null);

	//set visible state for sidebar here?
	const [visibleSidebar, setVisibleSidebar] = useState(false);

	const handleSidebarClick = (visible = true) => {
		setVisibleSidebar(visible)
	};

	return (
		<div ref={containerRef} className={styles.Layout}>
			<Sticky context={containerRef}>
				<Navigation layoutRef={containerRef} onClick={handleSidebarClick}/>
			</Sticky>
			<SideBarNavigation visible={visibleSidebar} onClick={handleSidebarClick}>
				{props.children}
			</SideBarNavigation>
		</div>
	)
};

export default Layout;
