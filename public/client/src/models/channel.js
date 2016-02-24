import Backbone from 'backbone';

let ChannelModel = Backbone.Model.extend({
	defaults:{
		title:'untitled',
		location:''
	},
	idAttribute:'_id',
});

export default ChannelModel