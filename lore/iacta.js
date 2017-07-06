
module.exports.spell = function (canon) {
    return function iacta(name){
        var MSG = canon.MSG;
        MagikCraftAPI.iactare(canon.sender, name);

    };
};

module.exports.test = function() {
    return true;
};