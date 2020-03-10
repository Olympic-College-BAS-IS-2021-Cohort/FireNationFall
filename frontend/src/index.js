import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "./react-auth0-spa"
import config from "./auth_config.json";
import history from './utils/history';

const onRedirectCallback = appState => {
	history.push(
		appState && appState.targetUrl
			? appState.targetUrl
			: window.location.pathname
	);
};

// console.log(process.env);
// console.log(process.env.REACt);

ReactDOM.render( <Auth0Provider
	domain={config.domain}
	client_id={config.clientId}
	redirect_uri={`https://fire-nation.herokuapp.com/admin`}
	audience={config.audience}
	onRedirectCallback={onRedirectCallback}
>
	<App />
</Auth0Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
