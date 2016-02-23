import Backbone from 'backbone';

function cap2(number){
	var result = number + '';
	if(result.length < 2){
		result = '0'+result;
	}
	return result;
}

let InfoPanelView = Backbone.View.extend({
	className: 'infopanel',
	showed: true,
	initialize: function(){
		this.channelTitleDOM = document.createElement('div');
		this.channelTitleDOM.className = 'title';
		this.channelTitleDOM.textContent = 'lasdawdw';
		this.el.appendChild(this.channelTitleDOM);

		this.currentTimeDOM = document.createElement('div');
		this.currentTimeDOM.className = 'time';
		this.el.appendChild(this.currentTimeDOM);
		this.updateTime();
	},
	updateTime: function(){
		console.log('updateTime');
		let time = new Date;
		let minutes = cap2(time.getMinutes());
		let hours = cap2(time.getHours());

		this.currentTimeDOM.textContent = `${hours}:${minutes}`;

		var remainingTime = (60 - (new Date).getSeconds())*1000;
		console.log(remainingTime);
		setTimeout(() => this.updateTime(), remainingTime);
	},
	render: function(){
		this.channelTitleDOM.textContent = this.model.get('title');
	},
	show: function(){
		this.render();
		this.showed = true;
		this.el.className = 'infopanel';
	},
	hide: function(){
		this.showed = false;
		this.el.className = 'infopanel hidden';
	}
});

export default InfoPanelView;