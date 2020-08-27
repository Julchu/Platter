"use strict";

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.isAuthenticated()) {
		res.render('index', { title: 'Saveury', about: "Serving savoury hors d'oeuvres" });
	} else {
		res.redirect("/login");
	}
});

module.exports = router;