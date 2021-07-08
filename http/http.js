const http = require('http').createServer();
const fs = require('fs');

http.on('request', (req, res) => {
  console.log(req.url);
  switch (req.url) {
    case '/home':
      res.writeHead(200, { 'content-type': 'text/html'})
      res.write(fs.readFileSync('./home.html'));
      res.end('ending hello from home');
      break;
    case '/':
      res.writeHead(200, { 'content-type': 'text/plain'})
      res.write('hellloooooo');
      res.end('ending hello');
      break;
    case '/status':
      res.writeHead(200, { 'content-type': 'application/json'})
      res.write(JSON.stringify({ message: 'my message'}));
      setTimeout(() => {
        res.write('continua');
        res.end();
      }, 3000)
      break;
  }
  
})

http.listen(8000, () => {
  console.log('server has been started');
})
