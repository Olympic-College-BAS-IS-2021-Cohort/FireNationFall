import {createContext} from 'react';


export default createContext({
	published: false,
	name: '',
	pictureUrl: '',
	about: '',
	experience: [],
	education: [],
	skills: []
})
