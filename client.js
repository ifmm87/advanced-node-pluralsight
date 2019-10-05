const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const client = new EventEmitter();
const server = require('./server.js')(client);
server.on('response', (response) => {
   console.log('============================================');
  console.log(response);
})

rl.on('line', (input) => {
  client.emit('command', input)
});
