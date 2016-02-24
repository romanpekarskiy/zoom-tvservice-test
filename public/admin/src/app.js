import ChannelCollection from 'models/channelCollection';
import ChannelList from 'views/channellist';

let channelCollection = new ChannelCollection();

channelCollection.fetch({
	success: function() {
		let app = new ChannelList({
			collection: channelCollection
		});

		document.body.appendChild(app.el);

		app.render();

		window.app = app;
	}
})
