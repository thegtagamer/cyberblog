import express from 'express';
import mongoose from 'mongoose';

const UserModel = mongoose.model('users');
const router = express.Router();

router.post('/register', async (req, res) => {
	const newUser = new UserModel({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	});
	return res.send({ success: true, data: await newUser.save() });
});

router.get('/:username', async (req, res) => {
	const user = await UserModel.findOne({ username: req.params.username }, { _id: false, password: false}).exec();
	console.log(user);
	if(user){
		return res.send({ success: true, data: user });
	}
	return res.send({ success: false, error: 'Incorrect username' });
});

export default router;