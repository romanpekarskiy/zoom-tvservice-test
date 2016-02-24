import Backbone from 'backbone';
import $ from 'jquery';

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

let EditableField = Backbone.View.extend({
	className:'field-wrapper',
	initialize: function(options) {
		this.fieldName = options.fieldName;
		this.label = options.label;

		this.labelDOM = createDOM('div','label', this.el);
		this.labelDOM.textContent = this.label;
		
		this.fieldDOM = createDOM('div', 'field', this.el);
		this.inputDOM = createDOM('input', 'input', this.el);

		this.listenTo(this.model, 'change', this.render);

		this.fieldDOM.onclick = () => this.edit();
		this.inputDOM.onchange = () => {
			this.model.set(this.fieldName, this.inputDOM.value);
			this.model.save();
		};
	},
	edit:function(){
		$(this.fieldDOM).hide();
		$(this.inputDOM).show();
	},
	render: function(){
		$(this.fieldDOM).show();
		$(this.inputDOM).hide();

		var fieldValue = this.model.get(this.fieldName);
		this.fieldDOM.textContent = fieldValue;
		this.inputDOM.value = fieldValue;
	}
})

export default EditableField;