var crypto = require('crypto');

var hash = crypto.createHash('sha1');
hash.update("test");
console.log(hash.digest('hex'));
