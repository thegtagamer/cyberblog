'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _sha = require('sha.js');

var _sha2 = _interopRequireDefault(_sha);

var _OAuth = require('./../OAuth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserModel = _mongoose2.default.model('users');
var router = _express2.default.Router();

router.post('/register', function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
		var user, newUser;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return UserModel.findOne({ username: req.body.username }).exec();

					case 3:
						user = _context.sent;

						if (!(user === null)) {
							_context.next = 15;
							break;
						}

						req.body.password = new _sha2.default.sha256().update(req.body.password).digest('hex');
						newUser = new UserModel(req.body);
						_context.t0 = res;
						_context.next = 10;
						return newUser.save();

					case 10:
						_context.t1 = _context.sent;
						_context.t2 = {
							success: true,
							data: _context.t1
						};
						return _context.abrupt('return', _context.t0.send.call(_context.t0, _context.t2));

					case 15:
						return _context.abrupt('return', res.send({ success: false, error: 'Username already exists' }));

					case 16:
						_context.next = 21;
						break;

					case 18:
						_context.prev = 18;
						_context.t3 = _context['catch'](0);
						return _context.abrupt('return', res.status(500).send({ success: false, error: 'Internal server error' }));

					case 21:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined, [[0, 18]]);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());

router.post('/login', function () {
	var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
		var user;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.prev = 0;
						_context2.next = 3;
						return UserModel.findOne({ username: req.body.username }).exec();

					case 3:
						user = _context2.sent;

						if (!user) {
							_context2.next = 17;
							break;
						}

						if (!(new _sha2.default.sha256().update(req.body.password).digest('hex') === user.password)) {
							_context2.next = 14;
							break;
						}

						_context2.t0 = res.status(200);
						_context2.next = 9;
						return (0, _OAuth.genToken)(user._id);

					case 9:
						_context2.t1 = _context2.sent;
						_context2.t2 = {
							success: true,
							data: _context2.t1
						};
						return _context2.abrupt('return', _context2.t0.send.call(_context2.t0, _context2.t2));

					case 14:
						return _context2.abrupt('return', res.status(401).send({ success: false, error: 'Incorrect password' }));

					case 15:
						_context2.next = 18;
						break;

					case 17:
						return _context2.abrupt('return', res.send(404).send({ success: false, error: 'Username doesn\'t exist' }));

					case 18:
						_context2.next = 23;
						break;

					case 20:
						_context2.prev = 20;
						_context2.t3 = _context2['catch'](0);
						return _context2.abrupt('return', res.status(500).send({ success: false, error: 'Internal server error' }));

					case 23:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined, [[0, 20]]);
	}));

	return function (_x3, _x4) {
		return _ref2.apply(this, arguments);
	};
}());

exports.default = router;