
module.exports.spell = function (canon) {
    return function album() {
        return MagikCraftAPI.getSpellsList(canon.sender, canon.sender.getName());
    };
};