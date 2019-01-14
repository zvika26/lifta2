const http = require('http');
const app = require('./backend/app');
// const debug = require("debug")("node-angular");

const port = 3001;
app.set('port', port);

const server = http.createServer(app);
console.log('aaa');
server.listen(port);
