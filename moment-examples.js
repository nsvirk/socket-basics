var moment = require('moment');
var now = moment();

/*
console.log(now.format()); 

now.subtract(1, 'hour');

console.log(now.format()); 
console.log(now.format('h:mma')); 

console.log(now.format('X')); 
console.log(now.valueOf()); 
*/

var timestamp = now.valueOf();
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mma'));