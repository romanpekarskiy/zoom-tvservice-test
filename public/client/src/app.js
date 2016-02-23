import ChannelCollection from 'models/channelCollection';
import ChannelModel from 'models/channel';
import AppView from 'views/app';

let channelCollection = new ChannelCollection([
	new ChannelModel({title:'ART',location:'http://live.art.cdnvideo.ru/art-pull//ed6b7e08ea/playlist.m3u8'}),
	new ChannelModel({title:'КПРФ',location:'http://kprf-live.cdn.ngenix.net/live/_definst_/stream_high/playlist.m3u8'}),
]);

let app = new AppView({
	collection: channelCollection
});

document.body.appendChild(app.el);

app.render();

window.app = app;