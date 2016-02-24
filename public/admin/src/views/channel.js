import Backbone from 'backbone';
import $ from 'jquery';
import EditableField from 'views/editableField';

function createDOM(type, classname, parent) {
	var dom = document.createElement(type);
	if (classname) {
		dom.className = classname
	}
	if (parent) {
		parent.appendChild(dom)
	}
	return dom;
}

let ChannelView = Backbone.View.extend({
	className:'channel',
	initialize: function(argument) {
		this.titleField = new EditableField({
			model:this.model,
			fieldName: 'title',
			label:'Название:',
		});
		this.locationField = new EditableField({
			model:this.model,
			fieldName: 'location',
			label:'URL',
		});
		this.el.appendChild( this.titleField.el );
		this.el.appendChild( this.locationField.el );

		this.removeBtn = createDOM('div','remove',this.el);
		this.removeBtn.textContent = 'REMOVE!';
		this.removeBtn.onclick = () => this.model.destroy();

		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);

		this.titleField.render();
		this.locationField.render();
	},
	render: function(){
		this.titleField.render();
		this.locationField.render();
		// this.titleDOM.textContent = this.model.get('title');
		// this.locationDOM.textContent = this.model.get('location');
	}
})

export default ChannelView;