const EventEmitter = require('events');

class Server extends EventEmitter {
  constructor(client) {
    super();
    client.on('command', (command) => {
      console.log(command, 'coming from the client')
      if (command === 'help') this.help();
      else {
        this.emit('response', 'unknown command' );
      }

    });
  }
  help () {
    this.emit('response', 'getting back help' )
  }
}

module.exports = (client) => new Server(client);
