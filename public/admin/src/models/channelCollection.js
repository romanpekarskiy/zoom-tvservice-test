import Backbone from 'backbone';
import ChannelModel from 'models/channel';

let ChannelCollection = Backbone.Collection.extend({
	model:ChannelModel,
	url: '/api/channels/',
});

export default ChannelCollection