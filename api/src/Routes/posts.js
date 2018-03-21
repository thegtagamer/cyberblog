import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const PostModel = mongoose.model('post');

router.get('/', async (req, res) => {
	try{
		return res.status(200).send({ success: true, data: await PostModel.find({ userId: req.userId }).exec() });
	}catch(e){
		return res.status(500).send({ success: false, error: e });
	}
});

router.get('/:postId', async (req, res) => {
	try{
		return res.status(200).send({ success: true, data: await PostModel.findOne({ _id: mongoose.mongo.ObjectId(req.params.postId) }).exec() });
	}catch(e){
		return res.status(500).send({ success: false, error: e });
	}
});

router.post('/new', async (req, res) => {
	try{
		return res.status(200).send({ success: true, data: await new PostModel({
			userId: req.userId,
			...req.body
		}).save()});
	}catch(e){
		console.log(e);
		return res.status(500).send({ success: false, error: e });
	}
})

export default router;