import Backbone from 'backbone';
import PlayerView from 'views/player';

let AppView = Backbone.View.extend({
	initialize: function () {
		this.player = new PlayerView();
		this.el.appendChild(this.player.el);
	},
	render: function(){
		
	}
});

export default AppView;