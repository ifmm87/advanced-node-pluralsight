const dgram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';

// SERVER
const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP Server Listening'));

server.on('message', (msg, rinfo) => {
  console.log('============================================');
  console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});

server.bind(PORT, HOST);



//client
const client = dgram.createSocket('udp4');
client.send('Ivan Rocks', PORT, HOST, (err)=> {
  if(err) throw err;
  console.log('============================================');
  console.log('UDP message sent');
  client.close();
})
