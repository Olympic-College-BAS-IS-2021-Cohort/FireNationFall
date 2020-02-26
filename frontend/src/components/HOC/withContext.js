import React, {useContext} from 'react';


//this module wraps a context around a component prop and pass data up to the
//container component
//this is to reduce the amount of rendering the container component has to make
//because useContext will force the calling component to re-render.

export default ({component: WrappedComponent, context: Context, defaultContextVal, ...rest}) => {

	const context = useContext(Context);

	console.log(context);

	return(
		<Context.Provider value={defaultContextVal || undefined}>
			<WrappedComponent {...rest}/>
		</Context.Provider>
	)
}