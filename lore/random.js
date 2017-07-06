
module.exports.spell = function (canon){
    return function random(min, max){
        if (!min) {
            min = 10;
        }
        if (!max) {
            max = min;
            min = 1;
        }
        return Math.floor(Math.random() * (max - min +1)) + min;
    };
};