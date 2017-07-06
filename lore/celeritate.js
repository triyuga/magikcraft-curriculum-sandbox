module.exports.spell = function(canon){
    return function celeritate(){
        canon.magik.msg(canon.MSG.CELERITATE);
        canon.sender.setWalkSpeed(1);
    };
};