'use strict';
const stream = require('stream');
class WSStream extends stream.Writable {
  constructor(ws = {}) {
    super();
    this.ws = ws;
  }
  setWS(ws) {
    this.ws = ws;
  }
  _write(chunk, enc, next) {
    if (this.ws.send) {
      this.ws.send(chunk.toString().replace(/\r?\n/g, ''));
    }
    next();
  }
}
module.exports = function(ws) {
  return new WSStream(ws);
};
