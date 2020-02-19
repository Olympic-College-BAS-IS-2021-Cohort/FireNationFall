import React from 'react';
import {Segment} from 'semantic-ui-react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Portfolios from './components/Portfolios';
import Portfolio from './components/Portfolio/Portfolio';
import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation/Navigation';

import AdminPage from './components/AdminPage/AdminPage';
import LoginPage from './components/LoginPage/LoginPage';
import PrivateRoute from './components/HOC/PrivateRoute';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					{/*<Route path={'/not-log-in'} render={props => <LoginPage {...props}/>}/>*/}
					<Route path={'/admin/not-log-in'} component={LoginPage}/>
					<Route path={'/admin'} component={AdminPage}/>
					<Route path={'/'} render={props => {
						return (
							<>
								<div style={{height: '75px'}}>
									<Navigation/>
								</div>
								<Switch>
									<Route path="/portfolios/:id" render={(props) => <Portfolio {...props}/>}/>
									<Route path="/portfolios" render={props => <Portfolios {...props}/>}/>
									<Route exact path="/" render={props => <Home {...props}/>}/>
									<Route render={() => <h1>Page not Found!</h1>}/>
								</Switch>
							</>
						)
					}}/>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
