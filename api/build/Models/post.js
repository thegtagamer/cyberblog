'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.model('post', _mongoose2.default.Schema({
	userId: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: 'user'
	},
	title: {
		type: String,
		required: true
	},
	body: {
		type: String
	}
}, {
	timestamps: true
}));