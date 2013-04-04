define(["dojo/_base/declare", "dijit/Menu"], function(declare, Menu) {
	return declare("my.dijits.MyMenu", [Menu], {
		postCreate: function() {
			this.inherited(arguments);
			console.info("postCreate --- in MyMenu");
		}
	});
});