const dgram = require('dgram');
const HOST = '127.0.0.1';
const PORT = 1987;

const client = dgram.createSocket('udp4');
client.send('helloo', PORT , HOST, (err) => {
  if (err) throw err;
  console.log('sent!!!!!');
  client.close();
});
