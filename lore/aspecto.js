
module.exports.spell = function (canon) {
    return function aspecto() {
        var location = canon.sender.getTargetBlock(null, 200).getRelative(0, 1, 0).getLocation();
        return location;
    };
};
