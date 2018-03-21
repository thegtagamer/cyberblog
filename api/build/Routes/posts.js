'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var PostModel = _mongoose2.default.model('post');

router.get('/', function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.t0 = res.status(200);
						_context.next = 4;
						return PostModel.find({ userId: req.userId }).exec();

					case 4:
						_context.t1 = _context.sent;
						_context.t2 = {
							success: true,
							data: _context.t1
						};
						return _context.abrupt('return', _context.t0.send.call(_context.t0, _context.t2));

					case 9:
						_context.prev = 9;
						_context.t3 = _context['catch'](0);
						return _context.abrupt('return', res.status(500).send({ success: false, error: _context.t3 }));

					case 12:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined, [[0, 9]]);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());

router.post('/new', function () {
	var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.prev = 0;
						_context2.t0 = res.status(200);
						_context2.next = 4;
						return new PostModel((0, _extends3.default)({
							userId: req.userId
						}, req.body)).save();

					case 4:
						_context2.t1 = _context2.sent;
						_context2.t2 = {
							success: true,
							data: _context2.t1
						};
						return _context2.abrupt('return', _context2.t0.send.call(_context2.t0, _context2.t2));

					case 9:
						_context2.prev = 9;
						_context2.t3 = _context2['catch'](0);

						console.log(_context2.t3);
						return _context2.abrupt('return', res.status(500).send({ success: false, error: _context2.t3 }));

					case 13:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined, [[0, 9]]);
	}));

	return function (_x3, _x4) {
		return _ref2.apply(this, arguments);
	};
}());

exports.default = router;