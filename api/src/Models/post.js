import mongoose from 'mongoose';

mongoose.model('post',
	mongoose.Schema({
		userId: {
			type: mongoose.Schema.Types.ObjectId,
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
	})
);