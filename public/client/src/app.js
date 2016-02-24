import ChannelCollection from 'models/channelCollection';
import ChannelModel from 'models/channel';
import AppView from 'views/app';

let channelCollection = new ChannelCollection();

channelCollection.fetch({
	success: function() {
		let app = new AppView({
			collection: channelCollection
		});

		document.body.appendChild(app.el);

		app.render();

		window.app = app;
	}
})

window.channelCollection = channelCollection;