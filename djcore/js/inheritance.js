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

