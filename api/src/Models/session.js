import mongoose from 'mongoose';

mongoose.model('session',
	mongoose.Schema({
		token: {
			type: String,
			required: true,
			unique: true
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user'
		}
	}, {
		timestamps: true
	})
);