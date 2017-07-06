
module.exports.spell = function(canon) {
    return function incendium(name){
        var MSG = canon.MSG;
        MagikCraftAPI.incendium(canon.sender, name);

    };
};

module.exports.test = function() {
    return true;
};