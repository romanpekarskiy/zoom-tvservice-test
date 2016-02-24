import ChannelCollection from 'models/channelCollection';
import AppView from 'views/app';
import $ from 'jquery';
import uuid from 'uuid';

let channelCollection = new ChannelCollection();

let clientId = localStorage.getItem('clientId');
if(!clientId){
	clientId = uuid.v1();
	localStorage.setItem('clientId',clientId);
	$.ajax({url:`/api/clients/${clientId}`});
}

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