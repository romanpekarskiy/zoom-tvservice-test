import Backbone from 'backbone';
import _ from 'underscore';
import ChannelView from 'views/channel';

var ChannelList = Backbone.View.extend({
	views:[],

	initialize: function(){
		this.listenTo(this.collection, 'add', this.onAddOne);
		this.listenTo(this.collection, 'reset', this.onReset);
		this.onReset();
	},

	render: function(){
		_.each(this.views,view => view.render())
	},

	onReset: function() {
		_.each(this.views,view => view.remove())
		this.views = [];
		this.collection.forEach( model => this.onAddOne(model))
	},

	onAddOne: function(channel) {
		var newview = new ChannelView({model:channel});
		this.views.push(newview);
		this.el.appendChild(newview.el);
	},

})

export default ChannelList;