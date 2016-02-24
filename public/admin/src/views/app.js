import Backbone from 'backbone';
import _ from 'underscore';
import ChannelCollection from 'models/channelCollection';
import ChannelList from 'views/channellist';

function createDOM(type, classname, parent) {
	let dom = document.createElement(type);
	if (classname) {
		dom.className = classname
	}
	if (parent) {
		parent.appendChild(dom)
	}
	return dom;
}


let AppView = Backbone.View.extend({
	views:[],

	initialize: function(){
		this.channelListWrapper = createDOM('div','channellist-wrapper',this.el);
		this.addBtn = createDOM('div','add-btn',this.el);
		this.addBtn.textContent = 'Add Channel';
		this.addBtn.onclick = () => this.channelCollection.create();
		this.channelCollection = new ChannelCollection;

		this.loadChannels();
	},
	loadChannels:function(){
		this.channelCollection.fetch({
			success: () => {
				this.channelList = new ChannelList({
					collection: this.channelCollection
				});

				this.channelListWrapper.appendChild(this.channelList.el);
				this.channelList.render();
			}
		})
	},

	render: function(){

	},
})

export default AppView;