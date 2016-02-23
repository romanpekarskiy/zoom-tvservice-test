import Backbone from 'backbone';
import PreloaderView from 'views/preloader';

let PlayerView = Backbone.View.extend({
	initialize: function () {
		this.videoElement = document.createElement('video');
		this.preloader = new PreloaderView({player:this});
		this.el.appendChild(this.videoElement);
		this.el.appendChild(this.preloader.el);
	},
	render: function(){

	},
	play: function( location ){
		this.videoElement.play(location);
	}
});

export default PlayerView;