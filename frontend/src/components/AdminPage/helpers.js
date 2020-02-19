const transformItemsToLink = (array) => {
	return array.map((item, index) => {
		return {
			...item,
			key: index,
			as: 'a'
		}
	})
};

export default {
	transformItemsToLink
}