import Backbone from 'backbone';
import PlayerView from 'views/player';
import $ from 'jquery';
import keyCodes from 'utils/keyCodes';

function numberCap(seeking, max){
    return (seeking % max + max) % max;
}

let AppView = Backbone.View.extend({
	currentChannel: undefined,
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
		this.playChannel(this.collection.first());
	},

	nextChannel: function(){
		let currentIndx = this.collection.indexOf(this.currentChannel);
		let nextChannelIndx = numberCap(++currentIndx, this.collection.length);
		this.playChannel(this.collection.models[nextChannelIndx]);
	},

	prevChannel: function(){
		let currentIndx = this.collection.indexOf(this.currentChannel);
		let nextChannelIndx = numberCap(--currentIndx, this.collection.length);
		this.playChannel(this.collection.models[nextChannelIndx]);
	},

	toggleInfo: function(){

	},

	playChannel: function( channel ){
		this.currentChannel = channel;
		let location = channel.get('location');
		this.player.play(location);
	},

	render: function(){
		
	}
});

export default AppView;