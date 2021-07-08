const fs = require('fs')
const path = require('path');
const dirname = path.join(__dirname, 'files');

const currentFiles = fs.readdirSync(dirname);
fs.watch(dirname, (eventType, filename) => {
  if (eventType === 'rename') {
    const index = currentFiles.indexOf(filename);
    if (index >= 0) {
      currentFiles.splice(index,1);
      console.log('removing file ' , filename);
      return;
    }
    currentFiles.push(filename);
      console.log('adding file ' , filename);

  }
})

