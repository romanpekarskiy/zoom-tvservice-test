var express = require('express');
var app = express();

app.use('/client', express.static('public/client/out'));
app.use('/admin', express.static('public/admin/app'));

app.listen(8080);
console.log('ready at '+ 8080 +' port');