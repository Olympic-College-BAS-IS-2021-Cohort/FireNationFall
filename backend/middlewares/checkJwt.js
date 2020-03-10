const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const authConfig = {
	domain: `fire-nation.auth0.com`,
	audience: `https://fire-nation.herokuapp.com/api`
};


const checkJwt = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
	}),

	audience: authConfig.audience,
	issuer: `https://fire-nation.auth0.com/`,
	algorithms: ['RS256']
});

module.exports = checkJwt;