"use strict";

let profileServices = require("../services/profileServices");
let createOrder = require("../services/orderServices").createOrder;

let express = require("express");
let router = express.Router();

router.get("/", async (req, res, next) => {
	if (!req.isAuthenticated()) {
		res.redirect("/login");
	}

	res.render("catererProfile", {title: "Caterer Profile"});
});

// Get profile information of selected (profileId) 
router.get("/:profileId", async (req, res, next) => {
	if (!req.isAuthenticated()) {
		res.redirect("/login");
	}
	
	// let data = await profileServices.getUserInfo(req.params.profileId);
	let user = await profileServices.getUser(req.params.profileId);

	res.render("catererProfile", {title: user.username, about: user.bio, contact: user.contactInfo, profileId: user.profileId});
});

/* Unnecessary when FE form can be set to GET request with action="profileId"/order/ */

// router.post("/:profileId", async (req, res, next) => {
// 	res.redirect("/catererProfile/" +  req.params.profileId + "/order");
// });

// Test Order dashboard
router.get("/:profileId/order", async (req, res, next) => {
	if (req.isAuthenticated()) {
		let userType = await profileServices.getUserType(req.params.profileId);
		if (userType === "caterer") {
			res.render("order", { title: "Book an order", about: "Choose a timeslot with ", profileId: req.params.profileId });
		} else {
			res.redirect("/catererProfile/" +  req.params.profileId);
		}
	} else {
		res.redirect("/login");
	}
});

// Create order with current logged-in user and selected (viewed) profile
router.post("/:profileId/order", async (req, res, next) => {
	console.log(req.user.userType);
	if (req.isAuthenticated()) {
		// let order = await createOrder(req.body.startTime, req.body.endTime, req.params.profileId, req.user.id);
		let daySelect = req.body.daySelect;
		let timeSelect = req.body.timeSelect;

		console.log(daySelect);
		console.log(timeSelect);
	
		
		// res.status(response);
		res.redirect("/catererprofile/" + req.params.profileId);

		// TODO: redirect to successful order page
	} else {
		res.redirect("/login");
	}
});

module.exports = router;