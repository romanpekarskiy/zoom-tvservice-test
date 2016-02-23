import Backbone from 'backbone';
import PreloaderView from 'views/preloader';

let PlayerView = Backbone.View.extend({
	initialize: function () {
		this.videoElement = document.createElement('video');
		this.preloader = new PreloaderView();

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
			    this.play = this._play;
			    
				this.mediaElement.addEventListener('playing',() => {
					this.preloader.hide();
				}, false);

				this.mediaElement.addEventListener('waiting',() => {
					this.preloader.show();
				}, false);

				this.mediaElement.addEventListener('stalled',() => {
					this.preloader.show();
				}, false);

			    this.mediaElement.play();
			},
		});
		this.preloader.show();
	},
	play: function( location ){
		this.preloader.show();
		this.mediaElement.setSrc(location);
		this.mediaElement.play();
	}
});

export default PlayerView;