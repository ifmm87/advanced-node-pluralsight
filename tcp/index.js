process.stdout.write('\u001B[2J\u001B[0;0f');
const server = require('net').createServer();
let counter = 0;
let sockets = {};

server.on('connection', socket => {
  socket.id = counter++;
  console.log ('Client connected');
  socket.write('Please type your name::::  \n');

  socket.on('data', data => {
    if (!sockets[socket.id]) {
      socket.name = data.toString();
      socket.write(`Welcome ${socket.name}`);
      sockets[socket.id] = socket;
      return;
    }
    Object.entries(sockets).forEach(([key, cs]) => {
      if (socket.id == key){
        return;
      }
      cs.write(`${socket.name}: `);
      cs.write(data);
    });
    // console.log('============================================');
    // console.log('data is:', data);
    // socket.write('data is: ');
    // socket.write(data);
  });

  socket.on('end', () => {
    delete sockets[socket.id];
    console.log('============================================');
    console.log('Client Disconnected');
  })
  socket.setEncoding('utf8');
});

server.listen(8000, () => console.log('Server bound'));
