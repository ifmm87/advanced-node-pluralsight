const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    console.time('execute');
    this.emit('begin');
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit('error', err);
      }
      this.emit('data', data);
      console.log('============================================');
      console.log(data);
      console.timeEnd('execute');
      this.emit('end');
    });
  }
}
const withTime = new WithTime();
withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('done with execute'));
withTime.on('data', data => console.log(`Length: ${data.length}`));
withTime.on('error', console.error);

// withTime.execute(fs.readFile, __filename);
withTime.execute(fs.readFile, '');
withTime.execute(fs.readFile, __filename);
