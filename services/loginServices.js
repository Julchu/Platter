"use strict";

let Caterer = require('../models/Users').Caterer;
let Customer = require('../models/Users').Customer;
let User = require('../models/Users').User;
let bcryptServices = require("./bcryptServices");

let createUser = async (username, password, userType) => {
	let response = "";

	/* 	Checks if caterer's username exists in database
		If caterer doesn't exist, create new caterer object and save it to database
	*/
	if (username && password && (userType==="customer" || userType === "caterer")) {
		let exists = await User.find({ username: username });
		// If username doesn't exist, check datatype to create specific user type (caterer, customer)
		if (exists == "") {
			// If username doesn't exist, check datatype to create specific user type (caterer, customer)
			console.log("Trying to create user");
			let encryptedPassword = await bcryptServices.encrypt(password);
	
			// Setting type of user: caterer/customer
			let newUser;
			if (userType === "caterer") {
				newUser = new Caterer({});			
			} else if (userType === "customer") {
				newUser = new Customer({});
			}

			// Default user attributes
			newUser.username = username;
			newUser.password = encryptedPassword;
			newUser.userType = userType;

			// TODO: error catching
			await newUser.save();

			// let response = await newUser.save().then(() => {
			// 	console.log("user created");
			// 	console.log(response);
			// }).catch((err) => {
			// 	console.log(err.msg);
			// });
			
			
		} else {
			response = "User already exists";
		}
	}
	return response;
};

module.exports = {createUser};
