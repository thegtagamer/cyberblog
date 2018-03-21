'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.OAuth = exports.genToken = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var genToken = exports.genToken = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(userId) {
		var _this = this;

		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						return _context2.abrupt('return', new _promise2.default(function () {
							var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
								var token;
								return _regenerator2.default.wrap(function _callee$(_context) {
									while (1) {
										switch (_context.prev = _context.next) {
											case 0:
												_context.prev = 0;
												_context.next = 3;
												return (0, _uuid.v4)();

											case 3:
												token = _context.sent;
												_context.next = 6;
												return SessionModel.findOne({ token: token }).exec();

											case 6:
												_context.t0 = _context.sent;

												if (!(_context.t0 === null)) {
													_context.next = 12;
													break;
												}

												new SessionModel({ token: token, userId: userId }).save();
												return _context.abrupt('return', resolve(token));

											case 12:
												_context.next = 14;
												return genToken(userId);

											case 14:
												return _context.abrupt('return', _context.sent);

											case 15:
												_context.next = 20;
												break;

											case 17:
												_context.prev = 17;
												_context.t1 = _context['catch'](0);
												return _context.abrupt('return', reject({ success: false, error: 'Internal server error' }));

											case 20:
											case 'end':
												return _context.stop();
										}
									}
								}, _callee, _this, [[0, 17]]);
							}));

							return function (_x2, _x3) {
								return _ref2.apply(this, arguments);
							};
						}()));

					case 1:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function genToken(_x) {
		return _ref.apply(this, arguments);
	};
}();

var findToken = function () {
	var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(token) {
		var _this2 = this;

		return _regenerator2.default.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						return _context4.abrupt('return', new _promise2.default(function () {
							var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
								var token;
								return _regenerator2.default.wrap(function _callee3$(_context3) {
									while (1) {
										switch (_context3.prev = _context3.next) {
											case 0:
												_context3.next = 2;
												return SessionModel.find({ token: token }).exec();

											case 2:
												token = _context3.sent;
												_context3.prev = 3;

												if (!token) {
													_context3.next = 8;
													break;
												}

												return _context3.abrupt('return', resolve({ success: true, userId: token.userId }));

											case 8:
												return _context3.abrupt('return', reject({ success: false, error: 'Invalid token' }));

											case 9:
												_context3.next = 15;
												break;

											case 11:
												_context3.prev = 11;
												_context3.t0 = _context3['catch'](3);

												console.log(_context3.t0);
												return _context3.abrupt('return', reject({ success: false, error: 'Internal server error' }));

											case 15:
											case 'end':
												return _context3.stop();
										}
									}
								}, _callee3, _this2, [[3, 11]]);
							}));

							return function (_x5, _x6) {
								return _ref4.apply(this, arguments);
							};
						}()));

					case 1:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, this);
	}));

	return function findToken(_x4) {
		return _ref3.apply(this, arguments);
	};
}();

var OAuth = exports.OAuth = function () {
	var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res, next) {
		var checkToken;
		return _regenerator2.default.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						_context5.prev = 0;
						_context5.next = 3;
						return findToken(req.headers.authorization.split(" ")[1]);

					case 3:
						checkToken = _context5.sent;

						if (!checkToken.success) {
							_context5.next = 7;
							break;
						}

						req.userId = checkToken.userId;
						return _context5.abrupt('return', next());

					case 7:
						return _context5.abrupt('return', res.status(500).send('Something is fishy'));

					case 10:
						_context5.prev = 10;
						_context5.t0 = _context5['catch'](0);
						return _context5.abrupt('return', res.send(_context5.t0));

					case 13:
					case 'end':
						return _context5.stop();
				}
			}
		}, _callee5, this, [[0, 10]]);
	}));

	return function OAuth(_x7, _x8, _x9) {
		return _ref5.apply(this, arguments);
	};
}();

var _uuid = require('uuid');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SessionModel = _mongoose2.default.model('session');