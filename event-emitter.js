const EventEmitter = require('events');
// class WithLog extends EventEmitter {
//   execute(taskFunc) {
//     console.log('============================================');
//     console.log('Before executing');
//     this.emit('begin');
//     taskFunc();
//     this.emit('end');
//     console.log('============================================');
//     console.log('After Executing');
//   }
// }
// const withLog = new WithLog();
// withLog.on('begin', () => console.log('About to execute'));
// withLog.on('end', () => console.log('Done with execute'));
// withLog.execute(() => setTimeout(() => console.log('*** executing task****')), 500);

const fs = require('fs');

class WithTime extends EventEmitter {
  executes(asyncFunction, ...args) {
    // console.log('Executeee')
    console.time('execute');
    this.emit('begin');
    asyncFunction(...args, (err, data) => {
      if (err) {
        return this.emit('error', err);
      }
      this.emit('datita', data);
      console.timeEnd('execute');
      
      this.emit('end');
    });
    
  }
}

const withTime = new WithTime ();
withTime.on('begin', () => {
  console.log('about to execute the task');
});
withTime.on('end', () => {
  console.log('about to enddd the task');
});
withTime.on('datita', (data) => {
  console.log('dataaaa', data.toString());
});
withTime.executes(fs.readFile, __filename);
