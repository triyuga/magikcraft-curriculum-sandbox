

var allowedItems = {
    "ELYTRA": "ELYTRA"
};

function theThing(item){
    if (item) return allowedItems[item.toUpperCase()]; else return false;
}

module.exports.spell = function (canon) {
    var MSG = canon.MSG;
    var manifest;

    manifest = function (item){
        var MATERIAL = Java.type("org.bukkit.Material");
        var ItemStack = Java.type("org.bukkit.inventory.ItemStack");
        var thing = new ItemStack(MATERIAL[item]);
        canon.sender.getInventory().addItem(thing);
        canon.magik.msg(MSG.DECLARO);
    };

    return function declaro(item){
        var thing = theThing(item);
        if (thing) manifest(thing);
    };

};
