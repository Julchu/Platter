"use strict";

let mongoose = require("mongoose");

var orderSchema = new mongoose.Schema({
    startTime: {type: Date, required: true},
    endTime: {type: Date, required: true},
    caterer: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true},
    customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true}
});

let Order = mongoose.model("Order", orderSchema, "Orders");

module.exports = {Order};