import React ,{useState} from 'react';
import {FormField} from 'semantic-ui-react';
import {useField} from 'formik';


export default ({onChange, ...props}) => {
	//type is included in props
	const [field, meta, helpers] = useField(props);

	const [fieldFile, setFile] = useState(null);


	let fieldProps = {
		...props,
		...field,
		...meta,
		error: meta.touched && meta.error? meta.error: null
	};

	// console.log(fieldProps.onChange.toString());


	return (
		<FormField {...fieldProps}/>
	)
};