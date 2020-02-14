import React, {useState} from 'react';
import {Route, Redirect} from 'react-router-dom';


export default ({component: Component, ...rest}) => {
	console.log(rest);

	const [isAuthorized, setAuthorization] = useState(false);


	return (
		<div>
			<Route {...rest} render={props => {

				return(
					isAuthorized ?
							<Component {...props}/>
							:
							<Redirect to={'/'}/>
				)
			}}/>
		</div>
	)
}
