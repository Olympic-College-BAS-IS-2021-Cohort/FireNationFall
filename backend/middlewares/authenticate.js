const isAuthenticated = (req, res, next) => {
	if(req.isAuthenticated()) {
		next();
	} else {
		res.redirect(`https://localhost:3001/login`);
	}
};

module.exports = isAuthenticated;