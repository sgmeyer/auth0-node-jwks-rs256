import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import api from './api';
import config from './config.json';
import { jwtCheck } from './middleware/jwtCheck';

console.log(jwtCheck);

let app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));


app.use('/api', jwtCheck, api({ config }));

app.use((err, req, res, next) => {
	console.log(err);

	res.status(err.status || 500).json(err);
});

app.server.listen(process.env.PORT || config.port);
console.log(`Started on port ${app.server.address().port}`);

export default app;