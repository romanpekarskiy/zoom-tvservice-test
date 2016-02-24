import Backbone from 'backbone';
import $ from 'jquery';

let channelView = Backbone.View.extend({
	className:'channel',
	initialize: function(argument) {
		this.el.appendChild( this.createChangebleField('title') );
		this.el.appendChild( this.createChangebleField('location') );
	},
	createChangebleField: function(fieldName){
		let wrapperDOM = document.createElement('div');
		let fieldDOM = document.createElement('div');
		let inputDOM = document.createElement('input');

		fieldDOM.className = 'field';
		inputDOM.className = 'input hidden';

		wrapperDOM.appendChild(fieldDOM);
		wrapperDOM.appendChild(inputDOM);

		this.listenTo(this.model,'change',() => {
			fieldDOM.textContent = this.model.get(fieldName);
			inputDOM.value = this.model.get(fieldName);
		});

		fieldDOM.onclick = () => {
			$(fieldDOM).hide();
			$(inputDOM).show();
			inputDOM.focus();
		}

		inputDOM.onchange = () => {
			this.model.set(fieldName,inputDOM.value);
		}

		return wrapperDOM;
	},
	render: function(){
		
	}
})