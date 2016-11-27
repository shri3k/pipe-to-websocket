'use strict';
const { port } = require('./config');
const WSStream = require('./lib');

const WSS = require('uws').Server;
const wss = new WSS({
  port
});
// eslint-disable-next-line
console.log('Listening on', port);

const readStream = new WSStream();
process.stdin.pipe(readStream);
wss.on('connection', (ws) => {
  console.log('client connected'); // eslint-disable-line
  readStream.setWS(ws);
  // eslint-disable-next-line
  ws.on('close', () => console.log('client disconnected'));
});
