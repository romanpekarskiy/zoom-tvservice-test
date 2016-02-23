import Backbone from 'backbone';
import PreloaderView from 'views/preloader';

let PlayerView = Backbone.View.extend({
	initialize: function () {
		this.videoElement = document.createElement('video');
		this.preloader = new PreloaderView({player:this});
		this.el.appendChild(this.videoElement);
		this.el.appendChild(this.preloader.el);

		this._play = this.play;
		this.play = this.firstPlay;
	},
	firstPlay: function( location ){
		var self = this;
		this.videoElement.src = location;
		this.mediaElement = new MediaElement(this.videoElement, {
			pluginPath: 'mediaelement/',
			flashName: 'flashmediaelement.swf',
			silverlightName: 'silverlightmediaelement.xap',
			defaultVideoWidth: '100%',  
			defaultVideoHeight: '100%',
			timerRate: 250,
			success: (mediaElement, domObject) => { 
			    this.mediaElement.play();
			    this.play = this._play;
			},
		});
	},
	play: function( location ){
		this.mediaElement.setSrc(location);
		this.mediaElement.play();
	}
});

export default PlayerView;