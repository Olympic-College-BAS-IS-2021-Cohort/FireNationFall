import React from 'react';

import {Header, List} from 'semantic-ui-react';

import styles from './SkillsSection.module.css'

export default props => {
	return (
		<>
			<Header className={styles.Category}>{props.category}</Header>
			<List relaxed={'very'}>
				{props.list.map(skill => {
					return (
						<List.Item className={styles.ListItem}>
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