
module.exports.spell = function (canon) {
    return function shakti(location){
        var MSG = canon.MSG;

        if (typeof location === "undefined") {
            location = canon.magik.aspecto();
        }
        canon.sender.getWorld().strikeLightning(location);
    };
};
