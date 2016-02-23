import Backbone from 'backbone';
import _ from 'underscore';
import PlayerView from 'views/player';
import InfoPanelView from 'views/infopanel';
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

		this.infopanel = new InfoPanelView();
		this.el.appendChild(this.infopanel.el);

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
		this.player.on('playing',() => this.showInfo(3000));

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

	showInfo: function( delay ){
		if(delay != undefined){
			clearTimeout(this.infopanelHidingTO);
			this.infopanelHidingTO = setTimeout(() => {
				this.infopanel.hide();
			}, delay);
		} else {
			clearTimeout(this.infopanelHidingTO);
		}
		this.infopanel.show();
	},

	toggleInfo: function(){
		if(this.infopanel.showed){
			this.infopanel.hide();
		} else {
			this.infopanel.show();
		}
	},

	playChannel: function( channel ){
		this.currentChannel = channel;

		this.infopanel.model = channel;
		this.infopanel.render();
		
		let location = channel.get('location');
		this.player.play(location);
	},

	render: function(){
		
	}
});

export default AppView;