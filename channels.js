var DB = require('nedb');
var channels = new DB({ filename: 'channels.db', autoload: true });
var express = require('express');
var router = express.Router();
var auth = require('./auth');

router.route('/')
	.get(function(req, res){
		channels.find({}, function(err, docs){
			if(err){
				res.status(500).send('error!');
			} else {
				res.json(docs);		
			}
		});
	})
	.post(auth, function(req, res){
		var channel = req.body;
		console.log('channel',channel);
		channels.insert(channel, function(err, newDoc){
			if(err){
				res.status(500).send('error!');
			} else {
				res.json({'message':'ok'});		
			}
		});
	});

router.route('/:channelId')
	.get(function(req, res){
		var chId = req.params.channelId;
		channels.findOne({_id:chId}, function(err, doc){
			if(err){
				res.status(500).send('error!');
			} else {
				res.json(doc);		
			}
		});
	})
	.delete(auth, function(req, res){
		var chId = req.params.channelId;
		channels.remove({_id:chId}, function(err, numRemoved){
			if(err){
				res.status(500).send('error!');
			} else {
				res.json({message:'ok'});
			}
		});
	})
	.put(auth, function(req, res){
		var chId = req.params.channelId;
		channels.update({_id:chId}, req.body, {}, function(err, numReplaced){
			if(err){
				res.status(500).send('error!');
			} else {
				res.json({message:'ok'});
			}
		});
	});

module.exports = router;