

module.exports.spell = function (canon){
    return function ianuae (location){
        var MSG = canon.MSG;
        canon.magik.dixit(MSG.IANUAE);
        if (!location) {
            canon.magik.dixit("Nowhere to teleport to...");
            canon.magik.dixit(MSG.IANUAE_USAGE);
        } else
            canon.sender.teleport(location);
    };
};

module.exports.test = function() {
    return true;
};