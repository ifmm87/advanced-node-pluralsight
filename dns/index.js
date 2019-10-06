const dns = require('dns');
dns.lookup('google.com', (err, address) => {
  console.log('==========addresssss==================================');
  console.log(address);
});

dns.resolve4('pluralsight.com','MX', (err, address)=> {
  console.log(address);
});
dns.reverse('35.161.75.227','MX', (err, address)=> {
  console.log(address);
});
