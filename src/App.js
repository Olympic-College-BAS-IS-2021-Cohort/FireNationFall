import React from 'react';
import {Segment} from 'semantic-ui-react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Portfolios from './components/Portfolios';

import Layout from './components/Layout/Layout';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <div>
                        <Switch>
                            <Route path="/portfolios" render={props => <Portfolios {...props}/>}/>
                            <Route exact path="/" render={ props => <Home {...props}/>}/>
                            <Route render={(props) => <Portfolio {...props}/>}/>
                            <Route render={() => <h1>Page not Found!</h1>}/>
                        </Switch>
                </div>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
