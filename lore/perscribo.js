

function checkParams(spell, lore, MSG){
    if (!spell) {     
        return MSG.PERSCRIBO_USAGE;
    }
    if (!spell.name) {      
        return MSG.PERSCRIBO_NAMED_SPELL;
    }
    return true;
}

function addSpellToLore(magik, spell, lore){
    if (!magik.Lore[lore]) {
        magik.creo(lore, true); 
    }

    magik.Lore[lore][spell.name] = spell;
    return true;
}

module.exports.spell = function (canon){
    return function perscribo(spell, lore){
        var magik = canon.magik;
        var MSG = canon.MSG;
        lore = lore || canon.sender.name; 

        addSpellToLore(magik, spell, lore);
        magik.msg([MSG.PERSCRIBO_CREATED, lore, spell.name]);
        return true;
    };
};
