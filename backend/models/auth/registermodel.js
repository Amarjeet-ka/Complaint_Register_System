const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerNewUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const RegisterNewUser = mongoose.model('Register', registerNewUserSchema);

module.exports = RegisterNewUser;
