import ChannelCollection from 'models/channelCollection'
import AppView from 'views/app';

var app = new AppView();
document.body.appendChild(app.el);
app.render();

window.app = app;