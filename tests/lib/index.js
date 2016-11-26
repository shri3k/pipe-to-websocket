const test = require('tape');
const WSStream = require('../../lib');

const stream = require('stream');

test('has writable stream instance', t=>{
  const writable = WSStream();
  const writable2 = new WSStream();
  t.ok(writable instanceof stream.Writable, 'instance of writable');
  t.ok(writable2 instanceof stream.Writable, 'instance of writable2');
  t.end();
})
