const EventEmitter = require('events');
const readline = require('readline');

const read =  readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);
server.on('response', response => {
  console.log(response, 'from the server');
});

read.on('line', input => {
  client.emit('command', input);
})
