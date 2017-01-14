const express = require('express'); // requerimos express
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require('socket.io');
const http = require('http');

const routes = require('./routes'); // importamos el index.js que esta en la carpeta routes
let app = express();
let server = http.createServer(app);
var io = socket(server);
let port = process.env.PORT || 8000;

exports.io = io;

app.use(bodyParser.urlencoded({entended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);

// inicio conexion a mongodb
mongoose.connect('mongodb://root:root@ds017553.mlab.com:17553/tallerdb', err =>{
	if (err) {
		console.log(err);
	}
	else {
		console.log('conección exitosa a Mongo DB');
	}
})
// fin de conexion a db

server.listen(port, err => {
	if (err) {
		console.log(err);
	}
	console.log('servidor corriendo!');
}); // iniciamos servidor