const EventEmitter = require('events');

class Server extends EventEmitter {
  constructor(client) {
    super();
    client.on('command', (command => {
      console.log('============================================');
      console.log(`Command: ${command}`);
      switch (command) {
        case 'help':
        case 'ls':
        case 'add':
        case 'delete':
          this[command]();
          break;
        default:
          this.emit('response', 'Unknown command');
      }
    }));
    };
  help() {
    this.emit('response', 'help...');
  }

  ls() {
    this.emit('response', 'ls...');
  }
  add() {
    this.emit('response', 'add...');
  }
  remove() {
    this.emit('response', 'remove...');
  }
}
module.exports = (client) => new Server(client);

