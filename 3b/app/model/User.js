const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    phone: String,
});

const UserModel = mongoose.model('User', schema);
module.exports = UserModel;
