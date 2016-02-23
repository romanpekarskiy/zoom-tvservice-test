import Backbone from 'backbone';
import _ from 'underscore';
import PlayerView from 'views/player';
import $ from 'jquery';
import keyCodes from 'utils/keyCodes';

let AppView = Backbone.View.extend({
	initialize: function () {
		this.player = new PlayerView();
		this.el.appendChild(this.player.el);
		$(document).keydown((ev) => {
			let keyCode = ev.keyCode;
			switch(keyCode){
				case keyCodes.UP:
					this.nextChannel();
				break;

				case keyCodes.DOWN:
					this.prevChannel();
				break;

				case keyCodes.SPACE:
					this.toggleInfo();
				break;
			}
		});
		this.player.play('http://kprf-live.cdn.ngenix.net/live/_definst_/stream_high/playlist.m3u8');
	},

	nextChannel: function(){

	},

	prevChannel: function(){

	},

	toggleInfo: function(){

	},

	playChannel: function( channel ){
		var location = channel.location;
		this.player.play(location);
	},

	render: function(){
		
	}
});

export default AppView;