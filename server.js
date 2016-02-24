var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var channelsApi = require('./channels');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/client', express.static('public/client/out'));
app.use('/admin', express.static('public/admin/out'));
app.use('/api/channels', channelsApi);

app.listen(8080);
console.log('ready at '+ 8080 +' port');