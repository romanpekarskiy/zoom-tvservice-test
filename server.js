var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var channelsApi = require('./channels');
var clientsApi = require('./clients');
var auth = require('./auth');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/client', express.static('public/client/out'));
app.use('/admin', auth, express.static('public/admin/out'));
app.use('/api/channels', channelsApi);
app.use('/api/clients', clientsApi);

app.listen(8080);
console.log('ready at '+ 8080 +' port');