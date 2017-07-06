
function checkParam(time){
    var duration;
    if (!time) duration = 200;
    if (time > 1000) duration = 1000;
    return duration;
}

module.exports.spell = function(canon){
    return function noxvida(time){
        var duration = checkParam(time);
        canon.magik.dixit("Noxvida!");

        canon._darkmagik_.potion("NIGHT_VISION", {duration: duration});
    };
};

