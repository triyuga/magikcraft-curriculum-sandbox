
module.exports.spell = function (canon){

    return function hic(){
        var MSG = canon.MSG;

        return canon.sender.getLocation();
    };
};
