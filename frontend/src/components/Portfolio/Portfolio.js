import React, {useContext} from 'react';
import {Image, Segment, Header, Grid, Container} from 'semantic-ui-react';

//Todo: move inline styles to separate modules
//Todo: refactor the several containers to its own component.

import PortfoliosContext from '../../contexts/PortfoliosContext';
import EducationSection from './EducationSection/EducationSection';
import ExperienceSection from './ExperienceSection/ExperienceSection';
import SkillsSection from './SkillsSection/SkillsSection';

//styles
import styles from './Portfolio.module.css'

const dummyData = {
	about: {
		description: 'this is the description about me'
	},
	experience : [
		{
			company: 'first company',
			position: 'developer',
			duration: 'from this date to this date',
			description: 'description of what i worked with'
		}
	],
	education: {
		school: 'school name',
		major: 'major 1',
		duration: 'from this to that'
	},
	skills: {
		languages: [
			'language 1',
			'language 2'
		],
		tools: [
			'tool 1',
			'tool 2'
		],
		frameworks: [
			'framework 1',
			'framework 2'
		]
	}
};



export default (props) => {

	const value = useContext(PortfoliosContext);
	const portfolio = value.portfolios[props.match.params.id];

	return (
		<Container fluid style={{padding: "0px"}}>
			<Grid centered>
				<Grid.Row centered style={{minHeight: "100vh"}}>
					<Segment basic>
						<Image src={`/${portfolio.pictureUrl}`} size={'small'} centered circular/>
						<Header as={'h2'} textAlign={'center'}>
							<Header.Content>{portfolio.name}</Header.Content>
							<Header.Subhead>{portfolio.metaInfo}</Header.Subhead>
						</Header>
					</Segment>
				</Grid.Row>
				<Grid.Row centered style={{minHeight: "100vh", backgroundColor: "#ffffff"}}>
					<Container textAlign={'left'}>
						<Header as={'h1'} className={styles.AboutHeader}>
							About Me
						</Header>
						<p className={styles.Paragraph}>{portfolio.about}</p>
					</Container>
				</Grid.Row>
				<Grid.Row centered style={{minHeight: "100vh", backgroundColor: "#152e4e"}}>
					<Container textAlign={'left'}>
						<Header as={'h1'} className={styles.ExperienceHeader}>
							Experience
						</Header>
						{portfolio.experience.map(experience => {
							return <ExperienceSection {...experience}/>
						})}
					</Container>
				</Grid.Row>
				<Grid.Row centered style={{minHeight: "100vh", backgroundColor: "#2ebaee"}}>
					<Container textAlign={'left'}>
						<Header as={'h1'} className={styles.EducationHeader}>
							Education
						</Header>
						{portfolio.education.map(education => {
							return <EducationSection {...education}/>
						})}
					</Container>
				</Grid.Row>
				<Grid.Row centered style={{minHeight: "100vh", backgroundColor: "#ffffff"}}>
					<Container textAlign={'left'}>
						<Header as={'h1'} className={styles.SkillsHeader}>
							Skills
						</Header>
						{portfolio.skills.map(skillList => {
							return (
								<SkillsSection {...skillList}/>
							)
						})}
					</Container>
				</Grid.Row>
				<Grid.Row centered style={{minHeight: "100vh", backgroundColor: "#0b192e"}}>
					<Container textAlign={'left'}>
						<Header as={'h1'} className={styles.ContactHeader}>
							Contact Me
						</Header>
						<p style={{color: "#9da3ab"}}>Contact Info goes here</p>
					</Container>
				</Grid.Row>
			</Grid>
		</Container>
	)
};