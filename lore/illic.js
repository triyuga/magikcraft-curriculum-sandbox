
module.exports.spell = function (canon){
    return function illic(){
        var MSG = canon.MSG;

        return canon.sender.getTargetBlock(null, 100).getLocation();
    };
};

module.exports.test = function() {
    return true;
};