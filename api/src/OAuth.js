import { v4 } from 'uuid';
import mongoose from 'mongoose';

const SessionModel = mongoose.model('session');

export async function genToken(userId) {
	return new Promise(async (resolve, reject) => {
		try{
			const token = await v4();
			if(await SessionModel.findOne({ token }).exec() === null){
				new SessionModel({ token, userId }).save();
				return resolve(token);
			}else{
				return await genToken(userId);
			}
		}catch(e){
			return reject({ success: false, error: 'Internal server error' });
		}
	});
}

async function findToken (token) {
	return new Promise(async (resolve, reject) => {
		const token = await SessionModel.find({ token }).exec();
		try{
			if(token){
				return resolve({ success: true, userId: token.userId });
			}else{
				return reject({ success: false, error: 'Invalid token' });
			}
		}catch(e){
			console.log(e);
			return reject({ success: false, error: 'Internal server error' });
		}
	});
}

export async function OAuth(req, res, next){
	try{
		const checkToken = await findToken(req.headers.authorization.split(" ")[1]);
		if(checkToken.success){
			req.userId = checkToken.userId;
			return next();
		}
		return res.status(500).send('Something is fishy');
	}catch(e){
		return res.send(e);
	}
}