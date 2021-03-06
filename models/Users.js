"use strict";

let mongoose = require("mongoose");

/* Using discriminators allows us to create base User "classes"
	Subclasses can inherit the attribute requirements from the User class
*/
var options = { discriminatorKey: 'Users' };

/* User base class */
var userSchema = new mongoose.Schema({
	// Username: must be unique
	username: {type: String, required: true},

	// TODO: encrypt password with BCrypt
	password: {type: String, required: true},

	// Username (unique identifier when people search)
	profileId: {type: String},

	// User's join date
	joinDate: {type: Date, required: true, default: Date.now()},
	
	// User type must be either customer or caterer: enumerators "customer", "caterer"
	userType: {type: String, required: true, enum: ['customer', 'caterer']},

	// TODO: validate phone number (REGEX?)
	phone: {type: Number},

	// TODO: Facebook, Instagram APIs
	contactInfo: [{type: String}],

	address: {type: String},

	// TODO: upcoming (singular) appointment and list of past appointments: {reference appointment database object};
	upcomingApt: {type: mongoose.Schema.Types.ObjectId, ref: 'Appointments'},
	pastApt: [{type: mongoose.Schema.Types.ObjectId, ref: 'Appointments'}]

	/* Mongoose schema referencing other users; populate documentation
		https://stackoverflow.com/questions/18001478/referencing-another-schema-in-mongoose
	*/

}, options);

let User = mongoose.model("User", userSchema, "Users");

/* Caterer users */
let catererSchema = new mongoose.Schema({	
}, options);

/* Customer users */
let customerSchema = new mongoose.Schema({
}, options);

// Admin users will be able to perform maintenance functionalities
let adminSchema = new mongoose.Schema({
}, options);

var Caterer = User.discriminator('Caterer', catererSchema);
var Customer = User.discriminator('Customer', customerSchema);
var Admin = User.discriminator('Admin', adminSchema);

module.exports = {User, Caterer, Customer, Admin};

/* Info/example of schema discriminators
	http://thecodebarbarian.com/2015/07/24/guide-to-mongoose-discriminators
*/
