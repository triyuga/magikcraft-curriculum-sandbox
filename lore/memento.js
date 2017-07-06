
var persistence = require("./../util/persistence");

module.exports.spell = function (canon){
    return function memento(thing){
        var msg = canon.magik.msg;
        var MSG = canon.MSG;
        if (!thing) {
            return msg(MSG.MEMENTO_NOTHING);
        }
        var me = canon.sender.getName();
        canon.magik.mementii[me] = thing;


        if (thing instanceof Java.type("org.bukkit.Location")) {
            canon.sender.sendMessage(msg(MSG.MEMENTO_PLACE));
        } else {
            canon.sender.sendMessage(msg(MSG.MEMENTO_SPECIFIC));
        }
    };
};

module.exports.test = function() {
    return true;
};