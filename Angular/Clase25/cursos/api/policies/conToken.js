var passport = require('passport');

module.exports = function (req, res, next) {
   passport.authenticate('jwt', function (error, user, info) {
	 if (error) return res.serverError(error);
	 if (!user) {
		 res.status(401)
		return res.json({error: "no estás autorizado"})
	 }
	 	
	  //return res.unauthorized(null, info && info.code, info && info.message);
	req.user = user;

	next();
   })(req, res);
};