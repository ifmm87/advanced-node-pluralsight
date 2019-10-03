process.stdout.write('\u001B[2J\u001B[0;0f');
const server = require('net').createServer();
let counter = 0;
let sockets = {};

server.on('connection', socket => {
  socket.id = counter++;
  sockets[socket.id] = socket;
  console.log('============================================');
  console.log(sockets);
  console.log ('Client connected');
  socket.write('Welcome new client! \n');

  socket.on('data', data => {
    Object.entries(sockets).forEach(([, cs]) => {
      cs.write(`${socket.id}: `);
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
