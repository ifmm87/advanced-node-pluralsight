const dgram = require('dgram');

const server = dgram.createSocket('udp4');
server.on('listening', () => console.log('escuchando'));
server.on('message', (msg,finfo) => {
  console.log(`message is ${msg} ${finfo.port}`)
})
server.bind(1987, '127.0.0.1');

const client = dgram.createSocket('udp4');
client.send('my message sending', 1987, '127.0.0.1', (error, some) => {
  console.log('your message has been sent');
})
