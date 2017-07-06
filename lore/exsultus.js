
module.exports.spell = function (canon){
    return function exsultus(power){
        var MSG = canon.MSG;
        var CONST = canon.CONST;
        var magik = canon.magik;
        var msg = magik.msg.bind(canon.sender);
        if ("undefined" === typeof power) {
            return msg(MSG.EXSULTUS_USAGE);
        }


        var jumppower = parseFloat(power);
        if (isNaN(jumppower)) {
            return msg(MSG.EXSULTUS_USAGE);
        }

        var maxJumpPower = 50; 

        if (jumppower > 100) jumppower = 100;
        if (jumppower < -100) jumppower = -100;
        jumppower = (jumppower / 100) * maxJumpPower; 



        var noJumpingWorlds = ["world-nefas", "tutorial"];

        if (magik.orbis && (noJumpingWorlds.indexOf(magik.orbis().name) !== -1)) {
            magik.dixit("No jumping allowed!");
        } else
        MagikCraftAPI.exsultus(canon.sender, jumppower);
    };
};

