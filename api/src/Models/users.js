import mongoose from 'mongoose';

mongoose.model('users',
	mongoose.Schema({
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
	})
);