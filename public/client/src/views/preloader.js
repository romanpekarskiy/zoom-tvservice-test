import Backbone from 'backbone';

let PreloaderView = Backbone.View.extend({
	className:'preloader hidden',
	initialize: function () {
		this.el.textContent = 'preloader!';

	},
	show: function(){
		this.el.className = 'preloader';
	},
	hide:function(){
		this.el.className = 'preloader hidden';
	}
});

export default PreloaderView;