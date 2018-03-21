'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.model('users', _mongoose2.default.Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		lowercase: true
	},
	name: {
		type: String
	},
	password: {
		type: String,
		required: true
	}
}, {
	timestamps: true
}));