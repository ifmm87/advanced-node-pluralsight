const dns = require('dns');
dns.lookup('google.com', (err, address) => {
  console.log('==========addresssss==================================');
  console.log(address);
})
