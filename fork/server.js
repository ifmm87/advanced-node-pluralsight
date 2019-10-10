const http = require('http');
const {fork} = require('child_process');

const server = http.createServer();
server.on('request', (req, res) => {
  if (req.url === '/compute') {
    // const compute = fork('./fork/compute.js');
    // compute.send('start');
    // compute.on('message', sum => {
    //   res.end(`La suma  is ${sum}`);
     let sum = 0;
    for(let i = 0; i < 4e9; i++) {
        sum+=1;
    }
    res.end(`la suma es ${sum}`)
     // return sum;   // });
  } else {
    res.end('Ok');
  }
})
server.listen(3000);
