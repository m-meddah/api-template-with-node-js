const http = require('http');
const dotenv = require('dotenv');
const debug = require('debug')('app:server');
const app = require('./app');

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const port = process.env.PORT ?? 3000;

const server = http.createServer(app);

server.listen(port, () => {
    debug(`Listening on ${port}`);
});