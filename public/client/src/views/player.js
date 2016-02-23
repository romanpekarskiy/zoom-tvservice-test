import Backbone from 'backbone';
import PreloaderView from 'views/preloader';

let PlayerView = Backbone.View.extend({
	initialize: function () {
		this.videoElement = document.createElement('video');
		this.preloader = new PreloaderView();
		this.on('connecting',() => this.preloader.show());
		this.on('buffering',() => this.preloader.show());
		this.on('playing',() => this.preloader.hide());

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
					this.trigger('playing');
				}, false);

				this.mediaElement.addEventListener('waiting',() => {
					this.trigger('buffering');
				}, false);

				this.mediaElement.addEventListener('stalled',() => {
					this.trigger('buffering');
				}, false);

			    this.mediaElement.play();
			},
		});
		this.trigger('connecting');
	},
	play: function( location ){
		this.trigger('connecting');
		this.mediaElement.setSrc(location);
		this.mediaElement.play();
	}
});

export default PlayerView;