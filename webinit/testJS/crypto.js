var crypto = require('crypto');

//console.log(crypto.getHashes());

var sha1 = crypto.createHash('sha1').update('ok').digest('hex');
console.log(sha1);
var sha2 = crypto.createHash('sha1');
sha2.update('ok');
var go = sha2.digest('hex');
console.log(go);
//sha1.update('ok1123');
//var go = sha1.digest('hex');
//console.log(go);
//sha1.update('okbar');
//console.log(sha1.digest('hex'));
