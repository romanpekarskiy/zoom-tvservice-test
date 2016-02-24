import Backbone from 'backbone';

let ChannelModel = Backbone.Model.extend({
	defaults:{
		title:'untitled',
		location:''
	}
});

export default ChannelModel