

module.exports.spell = function (canon) {
    function doNTimes(action, nTimes, delay, callback){

        var maxN = 10; 
        var minDelay = 100;

        if (!nTimes) {
            nTimes = 1;
        }
        if (nTimes > maxN) {
            nTimes = maxN;
        }
        if (!delay) {
            delay = 100;
        }
        if (delay < minDelay) {
            delay = minDelay;
        }

        function iterate(action, i){
            if (i > 0) {
                action(i);
                canon.magik.setTimeout(function() {
                    iterate(action, i-1);
                }, delay);
            } else {
                if (callback) return callback(); else return;
            }
        }
        iterate(action, nTimes);
    }
    return doNTimes;
};