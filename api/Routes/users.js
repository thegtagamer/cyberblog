import express from 'express';
import mongoose from 'mongoose';

const UserModel = mongoose.model('users');
const router = express.Router();

router.post('/register', async (req, res) => {
	const newUser = new UserModel({
		name: req.body.body.name,
		username: req.body.body.username,
		email: req.body.body.email,
		password: req.body.body.password
	});
	console.log(newUser);
	return res.send({ success: true, data: await newUser.save() });
});

router.post('/login', async(req, res)=>{
email: req.body.body.email,
password=req.body.password;


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