import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/abhishek').then(
	function success(){
		app.listen(process.env.PORT || 4000, () => {
			console.log('Server started');
		});
	},
	function error(e){
		console.log(e);
	}
);

import Models from './Models';
import Routes from './Routes';

import { OAuth } from './OAuth';

app.use('/users', Routes.users);
app.use('/post', OAuth, Routes.posts);