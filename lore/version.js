
module.exports.spell = function version(canon){
    var _version = "null";
    return function version (){
        canon.magik.msg(["Magikcraft API %s", _version]);
    }
}
