require(["dijit/Menu", "dijit/MenuItem", "dijit/CheckedMenuItem", "dijit/MenuSeparator", "dijit/PopupMenuItem"], function(Menu, MenuItem, CheckedMenuItem, MenuSeparator, PopupMenuItem){
    var pMenu;
    pMenu = new Menu({
        targetNodeIds: ["progmenu"]
    });
    pMenu.addChild(new MenuItem({
        label: "Simple menu item"
    }));
    pMenu.addChild(new MenuItem({
        label: "Disabled menu item",
        disabled: true
    }));
    pMenu.addChild(new MenuItem({
        label: "Menu Item With an icon",
        iconClass: "dijitEditorIcon dijitEditorIconCut",
        onClick: function(){alert('i was clicked');}
    }));
    pMenu.addChild(new CheckedMenuItem({
        label: "checkable menu item"
    }));
    pMenu.addChild(new MenuSeparator());
    pMenu.addChild(new MenuSeparator());
    var pSubMenu = new Menu();
    pSubMenu.addChild(new MenuItem({
        label: "Submenu item"
    }));
    pSubMenu.addChild(new MenuItem({
        label: "Submenu item"
    }));
    pMenu.addChild(new PopupMenuItem({
        label: "Submenu",
        popup: pSubMenu
    }));

    pMenu.startup();
});
