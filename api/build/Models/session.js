'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.model('session', _mongoose2.default.Schema({
	token: {
		type: String,
		required: true,
		unique: true
	},
	userId: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: 'user'
	}
}, {
	timestamps: true
}));