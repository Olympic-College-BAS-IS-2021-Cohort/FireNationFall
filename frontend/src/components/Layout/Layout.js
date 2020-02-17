import React, {useRef, useState} from 'react';
import {Container} from 'semantic-ui-react';

import NavigationSemantic from '../Navigation/NavigationSemantic';
import Navigation from '../Navigation/Navigation';
import SideBarNavigation from '../Navigation/SideBarNavigation';

import styles from './Layout.module.css'


const Layout = (props) => {
	return (
		<div className={styles.Layout}>
			{props.children}
		</div>
	)
};

export default Layout;


{/*<Sticky context={containerRef}>*/}
{/*	<NavigationSemantic layoutRef={containerRef} onClick={handleSidebarClick}/>*/}
{/*</Sticky>*/}