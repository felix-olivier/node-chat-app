const moment = require('moment');

// var date = new Date().getMonth();
// var months = ['jan', 'feb', 'etc']
// console.log(date);
// console.log(months[-10]);

// var date = moment().add(2, 'months').subtract(2, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
var date = moment()/*.add(1, 'h')*/;
console.log(date.format('h:mm a'));


var someTimestamp = moment().valueOf();
console.log(someTimestamp);
