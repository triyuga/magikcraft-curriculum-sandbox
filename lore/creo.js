
module.exports.spell = function (canon){
    return function creo(name, silent){
        var MSG = canon.MSG;
        silent = silent || false;
        var magik = canon.magik;
        if (magik.Lore[name] && !silent) {
            magik.msg([MSG.CREO_ALREADY_EXISTS, name]);
            return false;
        }
        magik.Lore[name] = {};
        if (!silent) magik.msg([MSG.CREO_CREATED, name]);
        return true;
    };
};

