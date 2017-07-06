
module.exports.spell = function (canon){
    return function auxilium(playerName){
        var MSG = canon.MSG;

        if (typeof playerName === "undefined") {
            return canon.magik.msg(MSG.AUXILIUM_PLAYERNAME_REQUIRED);
        }

        if(canon.sender.playerListName == playerName) {
            canon.magik.msg(MSG.AUXILIUM_SELFHEAL_DISALLOWED);
            return;
        }

        var player = canon.plugin.getServer().getPlayer(playerName);
        if (!player) {
            canon.magik.msg([MSG.AUXILIUM_PLAYERNAME_404, playerName]);
            return;
        }

        player.setHealth(20);

        canon.magik.dixit(canon.sender.playerListName + ' healed you!', playerName);

        canon.magik.msg([MSG.AUXILIUM_SUCCESS, playerName]);
    };
};