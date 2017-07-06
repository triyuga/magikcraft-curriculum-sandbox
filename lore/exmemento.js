
module.exports.spell = function (canon){
    return function exmemento(){
        var me = canon.sender.getName();
        return canon.magik.mementii[me];
    };
};
