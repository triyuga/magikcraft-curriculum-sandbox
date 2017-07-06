module.exports.spell = function (canon) {
    return function radiatum(name){
        var MSG = canon.MSG;
        MagikCraftAPI.radiatum(canon.sender, name);

    };
};

module.exports.test = function() {
    return true;
};