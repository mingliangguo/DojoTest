define([  "dojo/_base/declare", 
"dijit/TitlePane",
"dojo/text!./templates/myTitleBar.html",
"my/_BaseWidget"
], 

function(declare, TitlePane, templateString, _BaseWidget) {

    // I am creating this to create the multi-inheritance behavior for dijits
    // Since both _BaseWidget and TitlePane have inherited from some common dijit base classes
    // If we inherit them both, dojo will throw an error like - "Error: declare my.dijits.MyTitleBar: can't build consistent linearization"
    // return declare("my.dijits.MyTitleBar", [TitlePane, _BaseWidget], {
        return declare("my.dijits.MyTitleBar", [TitlePane], {
            templateString: templateString,

            constructor: function(){
                this.openPages = {}; 
                this._selectedPageTrace = [];
                this.myTitleBarDesc = "Hello from my TitleBar!";
            },

            postCreate: function() {
                this.inherited(arguments);
            },

            _eoc_:null
        });	

    });
