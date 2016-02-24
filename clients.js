var DB = require('nedb');
var clients = new DB({ filename: 'clients.db', autoload: true });
var express = require('express');
var router = express.Router();
var auth = require('./auth');

router.route('/:clientId')
	.get(function(req, res){
		var clId = req.params.clientId;
		res.json({'message':'ok'});

		clients.findOne({ clId:clId }, function(err, doc){
			if(doc == null){
				clients.insert({ clId:clId });
			}
		});
	})

module.exports = router;