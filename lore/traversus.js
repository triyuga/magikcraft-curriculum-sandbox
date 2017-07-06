var CONST = require('./../lib/constants');
var MSG = require('./../lib/strings');

module.exports.spell = function (canon){
    return function traversus (powerX, powerY){
        if ("undefined" === typeof powerX) {
            return canon.magik.dixit(MSG.TRAVERSUS_USAGE);
        }


        var jumppowerX = parseFloat(powerX);
        if (isNaN(jumppowerX)) {
            return canon.magik.dixit(MSG.TRAVERSUS_USAGE);
        }

        var jumppowerY = parseFloat(powerX);
        if (isNaN(jumppowerY)) {
            return canon.magik.dixit(MSG.TRAVERSUS_USAGE);
        }

        var maxJumpPower = 3.9; 
        if (jumppowerX > 100) jumppowerX = 100;
        if (jumppowerX < -100) jumppowerX = -100;
        jumppowerX = (jumppowerX / 100) * maxJumpPower; 

        if (jumppowerY> 100) jumppowerY = 100;
        if (jumppowerY < -100) jumppowerY = -100;
        jumppowerY = (jumppowerY / 100) * maxJumpPower; 


        MagikCraftAPI.traversus(canon.sender, Java.to(jumppowerX, "double"), Java.to(jumppowerY, "double"));
        canon.magik.dixit(MSG.TRAVERSUS);

    };
};

module.exports.test = function() {
    return true;
}