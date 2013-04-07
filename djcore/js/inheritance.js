/**
* Simple test for dojo's inheritance system.
* Dojo supports both single inheritance and multi-inheritance. Single inheritance is straightforward and similar to other mainstream languages.
* While for multi-inheritance, it's a bit tricky. Unlike Java, javascript is a prototype based language and its inheritance system is based on 
* the prototype. And javascript has its own method to detect instanceof and it doesn't work well for multi-inheritance.
* 
* Basically, for multi-inheritance, Dojo only makes the first class in the prototype chain, which will work for instanceof. While for other classes,
* they will not work with instancof check. To deal with that, Dojo provide its only mechanism, isInstanceOf which can be used to check if an object 
* is an instance of a given class.
* 
* For more details, please refer to http://dojotoolkit.org/reference-guide/1.8/dojo/_base/declare.html
*/ 
require(["dojo/_base/declare"], function(declare){
    var garyAClazz = declare("garyA", null, {
        constructor: function(){
            console.info("constructor => garyA");
        },
        say: function() {
            console.info("hello from garyA");
        }, 
        sayA: function() {
            console.info("sayA from garyA");
        }
    });

    var redAClazz = declare("redA", null, {
        constructor: function(){
            console.info("constructor => red.A");
        },
        say: function() {
            this.inherited(arguments);
            console.info("hello from redA");
        },
        sayA: function() {
            console.info("sayA from redA");
        },
        redA: function() {
            this.inherited(arguments);
            console.info("redA from redA");
        }
    });

    var blueAClazz = declare("blueA", null, {
        constructor: function(){
            console.info("constructor => blueA");
        },
        say: function() {
            this.inherited(arguments);
            console.info("hello from blueA");
        },
        sayA: function() {
            console.info("sayA from blueA");
        },
        blueA: function() {
            console.info("blueA from blueA");
        }
    });

    var garyBClazz = declare("garyB", [garyAClazz, redAClazz, blueAClazz], {
        constructor: function(){
            this.inherited(arguments);
            console.info("constructor => gary.B");
        },
        say: function() {
            this.inherited(arguments);
            console.info("hello from garyB");
        },
        sayB: function() {
            console.info("sayB from garyB");
        }

    });

    var a = new garyAClazz();
    a.say();

    var zz = new garyB();
    var saystr = garyB.prototype.say.toString();
    console.info("garyB.say:" + saystr);
    console.dir(zz);
    zz.say();

    zz.sayA();
    zz.sayB();

    console.info("-----------------");
    console.info("zz instanceof garyAClazz: " + (zz instanceof garyAClazz));
    console.info("zz instanceof redAClazz: " + (zz instanceof redAClazz));
    console.info("zz instanceof garyBClazz: " + (zz instanceof garyBClazz));
    console.info("zz isInstanceof redAClazz: " + (zz.isInstanceOf(redAClazz)));

});

