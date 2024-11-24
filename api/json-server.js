// api/json-server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/items.json'); // Reference your db.json file (you'll need to push this too)
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
