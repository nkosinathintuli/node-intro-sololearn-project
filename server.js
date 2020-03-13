// Create Web Server
const http = require('http');
const app = require('./app');// import app module
const port = process.env.PORT || 3000;
const server = http.createServer(app);// add app, this allows to send a req to the server and get a res
server.listen(port);
// to run server $node server.js 
//package history for routes redirect