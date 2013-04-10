define([
	"dojo/_base/declare", 
	"dijit/_Widget", 
	"dijit/_TemplatedMixin", 
	"dijit/_WidgetsInTemplateMixin", 
	"dijit/_Container", 
	"dijit/_Contained"
], function(
	declare,
	_Widget,
	_TemplatedMixin,
	_WidgetsInTemplateMixin,
	_Container,
	_Contained
) {
	
	return declare("my._BaseWidget", [_Widget, _TemplatedMixin, _WidgetsInTemplateMixin, _Container, _Contained], {
		postCreate: function() {
			this.inherited(arguments);
		},
		
		_eoc_:null
		
	});

});
