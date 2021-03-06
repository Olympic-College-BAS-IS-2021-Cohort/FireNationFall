import React, {useState, useEffect} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import axios from 'axios';

import Home from './components/Home/Home';
import Portfolios from './components/Portfolios';
import Portfolio from './components/Portfolio/Portfolio';
import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation/Navigation';

import AdminPage from './components/AdminPage/AdminPage';
import PrivateRoute from './components/HOC/PrivateRoute';

import PortfoliosContext from './contexts/PortfoliosContext';

function App() {

	const [portfolios, setPortfolios] = useState(null);

	//setting context data
	//after every render or re-render
	useEffect(() => {
		axios.get('/api/portfolios').then(result => {
			console.log(result);
			setPortfolios(result.data);
		}).catch(err => {
			console.log(err);
		});
	},[]);

	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<PrivateRoute path={'/admin'} component={AdminPage}/>
					<Route path={'/'} render={props => {
						return (
							<>
								<div style={{height: '75px'}}>
									<Navigation/>
								</div>
								<PortfoliosContext.Provider value={{portfolios}}>
									<Switch>
										<Route path="/portfolios/:id" render={(props) => <Portfolio {...props}/>}/>
										<Route path="/portfolios" render={props => <Portfolios {...props}/>}/>
										<Route exact path="/" render={props => <Home {...props}/>}/>
										<Route render={() => <h1>Page not Found!</h1>}/>
									</Switch>
								</PortfoliosContext.Provider>
							</>
						)
					}}/>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
