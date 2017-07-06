
module.exports.spell = function (canon) {
    return function infierno(){
        var MSG = canon.MSG;

        var Fireball = Java.type("org.bukkit.entity.Fireball");
        var p = canon.sender;
        p.launchProjectile(Fireball.class);
    };
};

module.exports.test = function() {
    return true;
};