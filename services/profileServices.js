"use strict";

let User = require('../models/Users').User;
let bcryptServices = require("./bcryptServices");

let getUser = async (profileId) => {
	let user = await User.findOne({profileId: profileId});
	return user;
}

let getUserId = async (profileId) => {
	let user = await getUser(profileId);
	return user._id;
};

let getUserType = async (profileId) => {
	let user = await getUser(profileId);
	return user.userType;
}

let getUserInfo = async (profileId) => {
	let data = {
		name: "Name not Found",
		bio: "Bio not Found",
		contactInfo: "Contact info not found",
		userType: "Customer"
	}

	let user = await getUser(profileId);
	
	if (user) {
		data.name = user.username;
		data.bio = user.bio;
		data.contactInfo = user.contactInfo;
		data.userType = user.userType;
	}

	return data;
};

let getCustomerInfo = async (profileId) => {
	let customer = await getUser(profileId);
	let customerInfo;
	if (customer != "") {
		customerInfo = {
			userId: customer.profileId,
			username: customer.username,
			userType: customer.userType
		}
	}
	return customerInfo	
};

// TODO: validate proper user, and validate new username isn't taken
let setUsername = async (username, profileId) => {
	let response = "";
	let user = await User.findOne({username: username});
	if (user) {
		let exists = await User.findOne({profileId: profileId});
		if (!exists) {
			user.username = newUsername;
			await user.save();
		} else {
			response = "Username already exists";
		}
	} else {
		response = "User not found";
	}
	return response;
};

let setPassword = async (username, newPassword) => {
	let user = await User.findOne({username: username});

	if (user) {			
		let encryptedPassword = await bcryptServices.encrypt(newPassword);
		user.password = encryptedPassword;
		await user.save();
	} else {
		response = "User not found";
	}
};

module.exports = {
	getUser, getCustomerInfo, getUserInfo, getUserId, getUserType,
	setUsername, setPassword
};