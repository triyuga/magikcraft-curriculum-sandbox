
module.exports.spell = function (canon){
    return function satio(playerName){
        var MSG = canon.MSG;

        if (typeof playerName === "undefined") {
            canon.magik.msg(MSG.SATIO_GENERIC);
            return canon.sender.setFoodLevel(30);
        }
        var player = canon.plugin.getServer().getPlayer(playerName);
        if (typeof player === "undefined") {
            return canon.sender.sendMessage("Could not find " + playerName);
        }
        player.setFoodLevel(20);
    };
};