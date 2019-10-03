// exports.id = 1;
// exports = {id: 1};
// module.exports = {id: 1}
console.log('============================================');
console.log(arguments);
require = function(arg) {
  return {arg};
}


const fs = require('fs');
console.log('============================================');
console.log(fs);
