var DB = require('nedb');
var channels = new DB({ filename: 'channels.db', autoload: true });
var express = require('express');
var router = express.Router();

router.use('/',function(req, res) {
	res.json({message:'ok'});
})

module.exports = router;
