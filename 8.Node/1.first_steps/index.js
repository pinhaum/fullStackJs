const moment = require('moment');

function sayMyName(name) {
  console.log(name);
  console.log(moment().format('HH:mm:ss'));
}

sayMyName('Gabriel Ramos');
