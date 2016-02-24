var express = require('express');
var app = express();
var channelsApi = require('./channels');

app.use('/client', express.static('public/client/out'));
app.use('/admin', express.static('public/admin/out'));
app.use('/api/channels', channelsApi);

app.listen(8080);
console.log('ready at '+ 8080 +' port');