const EventEmitter = require('events');
class WithLog extends EventEmitter {
  execute(taskFunc) {
    console.log('============================================');
    console.log('Before executing');
    this.emit('begin');
    taskFunc();
    this.emit('end');
    console.log('============================================');
    console.log('After Executing');
  }
}
const withLog = new WithLog();
withLog.on('begin', () => console.log('About to execute'));
withLog.on('end', () => console.log('Done with execute'));
withLog.execute(() => setTimeout(() => console.log('*** executing task****')), 500);
