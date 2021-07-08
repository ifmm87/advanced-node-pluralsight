process.stdout.write('\u001B[2J\u001B[0;0f');
const server = require('net').createServer();
let counter = 0;
let connections = {};

server.on('connection', (socket) => {
  socket.id =  counter ++;

  console.log('New client connected');
  socket.write('Please enter your name:');
  socket.on('data', data => {
    if (!connections[socket.id]) {
      socket.name = data.toString().trim();
      socket.write('Welcome' + socket.name + '\n');
      connections[socket.id] = socket;
      return;
    }
    // console.log(connections);
    Object.keys(connections).forEach((key) => {
      if (socket.id == key) return;
      connections[key].write(`${socket.name} 02:45:\n`);
      connections[key].write(data);
    })
    console.log('data coming from the client', data.toString());
  });

  socket.on('end', () => {
    delete connections[socket.id];
    console.log('client has disconnected');
  });
});

server.listen(8000, () => console.log('server found'));
