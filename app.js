const http = require('http');
const request = require('./routes')

const server = http.createServer(request)

server.listen(3000);