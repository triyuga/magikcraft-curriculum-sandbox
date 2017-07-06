

var durations = {
    default: 200,
    max: 500
};

function sanitizeTime(time){
    var duration;
    if (!time) {
        duration = durations.default;
    } else {
        if (time > durations.max) {
            duration = durations.max;
         } else {
            duration = time;
         }
    }
    return duration;
}

module.exports.spell = function(canon){
    return function volare(time){
        var duration = sanitizeTime(time);
        canon._darkmagik_.potion("LEVITATION", {duration: duration});
        canon.magik.dixit("Volare!");
    };
};

