var express = require('express');
var app = express();

app.use('/client', express.static('client'));

app.listen(8080);
console.log('ready at '+ 8080 +' port');