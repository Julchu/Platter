"use strict";

let getUserId = require("./profileServices").getUserId;
let Order = require("../models/Orders").Order;

let createOrder = async (startTime, endTime, profileId, customerId) => {
	let response = "";
	// Validate against front-end script modifications (and changing to unavailable times)
	let starTimeValidator = (startTime.getMinutes() % 30 == 0);
	let endTimeValidator = (endTime.getMinutes() === startTime.getMinutes() + 30);

	if (starTimeValidator && endTimeValidator) {
		let catererId = await getUserId(profileId);
		let order = new Order({
			startTime: startTime,
			endTime: endTime,
			caterer: catererId,
			customer: customerId
		});

		// TODO: update corresponding users' orders

		// Test error/response to saving document
		// await order.save();
	} else {
		response = "Order not created"
	}
	return response;
}

module.exports = {createOrder};