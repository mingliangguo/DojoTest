define(["dojo/_base/declare"], function(declare) {
    return declare(null, {
        name: "myModule",
        echo: function(msg) {
            console.info("hello from my module, message is:" + msg);
        },
        eco: null
    });
}
);
