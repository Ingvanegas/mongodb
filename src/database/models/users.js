const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const userSchema = new Schema({
    name: String,
    lastName: String,
    email: String,
    age: Number,
});

module.exports.userModel = Model('Users', userSchema);