const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const rolSchema = new Schema({
    name: String,
});

module.exports.rolesModel = Model('Roles', rolSchema);