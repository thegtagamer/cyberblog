'use strict';

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _Models = require('./Models');

var _Models2 = _interopRequireDefault(_Models);

var _Routes = require('./Routes');

var _Routes2 = _interopRequireDefault(_Routes);

var _OAuth = require('./OAuth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://localhost/abhishek').then(function success() {
	app.listen(process.env.PORT || 4000, function () {
		console.log('Server started');
	});
}, function error(e) {
	console.log(e);
});

app.use('/users', _Routes2.default.users);
app.use('/post', _OAuth.OAuth, _Routes2.default.posts);