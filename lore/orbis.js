
module.exports.spell = function (canon) {
    return function orbis(location) {
        return canon.sender.getWorld().getName();
    };
};

