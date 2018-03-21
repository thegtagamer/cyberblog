import express from 'express';
import mongoose from 'mongoose';
import shajs from 'sha.js';

import { genToken } from './../OAuth';

const UserModel = mongoose.model('users');
const router = express.Router();

router.post('/register', async (req, res) => {
	try{
		console.log(req.body);
		const user = await UserModel.findOne({ username: req.body.username }).exec();
		if(user === null){
			req.body.password = new shajs.sha256().update(req.body.password).digest('hex');
			const newUser = new UserModel(req.body);
			return res.send({ success: true, data: await newUser.save() });
		}else{
			return res.send({ success: false, error: 'Username already exists'});
		}
	}catch(e){
		return res.status(500).send({ success: false, error: 'Internal server error' });
	}
})

router.post('/login', async (req, res) => {
	try{
		const user = await UserModel.findOne({ username: req.body.username }).exec();
		if(user){
			if(new shajs.sha256().update(req.body.password).digest('hex') === user.password){
				return res.status(200).send({ success: true, data: await genToken(user._id) })
			}else{
				return res.status(401).send({ success: false, error: 'Incorrect password'});
			}
		}else{
			return res.send(404).send({ success: false, error: 'Username doesn\'t exist'});
		}
	}catch(e){
		return res.status(500).send({ success: false, error: 'Internal server error' });
	}
});

export default router;