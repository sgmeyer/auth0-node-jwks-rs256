import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import api from './api';
import config from './config.json';
import { jwtCheck } from './middleware/jwtCheck';

dotenv.load(); 

let app = express();
app.server = http.createServer(app);

app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

app.use('/api', jwtCheck, api());

app.use((err, req, res, next) => {
	console.log(err);

	res.status(err.status || 500).json(err);
});

app.server.listen(process.env.PORT || 3000);
console.log(`Started on port ${app.server.address().port}`);

export default app;