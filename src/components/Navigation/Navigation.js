import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {

	const [expanded, setExpanded] = useState(false);

	const handleOnSelect = (eventKey, e)  =>{
		console.log(eventKey, e);
		setExpanded(!expanded);
	};

	return(
		<Navbar fixed={'top'} bg={'light'} expanded={expanded} expand="lg" onSelect={handleOnSelect} onToggle={handleOnSelect}>
			<Navbar.Brand as={Link} to={'/'}>FireNation</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link eventKey={'1'} as={Link} to={'/'}>Home</Nav.Link>
					<Nav.Link eventKey={'1'} as={Link} to={'/portfolios'}>Portfolios</Nav.Link>
					<Nav.Link eventKey={'1'} as={Link} to={'/blogs'}>Blogs</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-success">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	)
}
