

var items = {
    "LIZARDEYES":       1,
    "UNICORNTEARS":     2,
    "DRAGONSCALES":     4,
    "SALAMANDERTOES":   8,
    "GOBLINSNOT":       16,
    "FIREFLIES":        32,
    "EAGLEFEATHER":     64
};
module.exports.items = items;

var spells = {
    incendium:  "magik.incendium",
    iacta:      "magik.iacta",
    radiatum:   "magik.radiatum",
    noxvida:    "magik.noxvida",
    infierno:   "magik.infierno",
    volare:     "magik.volare",
    celeritate: "magik.celeritate"
};

module.exports.spells = spells;

function mix(ingredients, MSG){
    if (typeof ingredients == "string") return MSG.CALDARIUM_NEEDARRAY;
    if (!ingredients || !Array.isArray(ingredients) || ingredients.length < 3) {
        return MSG.CALDARIUM_INSUFFICIENT;
    }

    if (ingredients.length > 3) {
        return MSG.CALDARIUM_TOOMANYINGREDIENTS;
    }

    var INGREDIENTS = [];
    INGREDIENTS.push(ingredients[0].toUpperCase());
    INGREDIENTS.push(ingredients[1].toUpperCase());
    INGREDIENTS.push(ingredients[2].toUpperCase());

    var cauldron = items[INGREDIENTS[0]] | items[INGREDIENTS[1]] | items[INGREDIENTS[2]];

    var results = {};
    var incendium       = items.LIZARDEYES | items.UNICORNTEARS | items.DRAGONSCALES; 
    var radiatum        = items.LIZARDEYES | items.UNICORNTEARS | items. SALAMANDERTOES; 
    var iacta           = items.LIZARDEYES | items.UNICORNTEARS | items.GOBLINSNOT; 
    var noxvida         = items.UNICORNTEARS | items.FIREFLIES | items.SALAMANDERTOES; 
    var infierno        = items.FIREFLIES | items.GOBLINSNOT | items.SALAMANDERTOES; 
    var volare          = items.EAGLEFEATHER | items.GOBLINSNOT | items.DRAGONSCALES; 
    var celeritate      = items.GOBLINSNOT | items.FIREFLIES | items.EAGLEFEATHER; 
    results[incendium]  = spells.incendium;
    results[radiatum]   = spells.radiatum;
    results[iacta]      = spells.iacta;
    results[noxvida]    = spells.noxvida;
    results[infierno]   = spells.infierno;
    results[volare]     = spells.volare;
    results[celeritate] = spells.celeritate;

    if (isNaN(cauldron) || typeof cauldron === "undefined" || typeof results[cauldron] === "undefined") return MSG.CALDARIUM_FAIL;

    return results[cauldron];
}

module.exports.mix = mix;

function celeritate(canon, ingredients){
    if (ingredients.length === 3 && canon.dynamic.egypt && canon.dynamic.egypt.celeritateIngredients.length === 3){
        var i = [
            ingredients[0].toUpperCase(),
            ingredients[1].toUpperCase(),
            ingredients[2].toUpperCase()
        ];
        var e = canon.dynamic.egypt.celeritateIngredients;
        if (i.indexOf(e[0]) != -1 && i.indexOf(e[1]) != -1 && i.indexOf(e[2]) != -1) {
            return true;
        }
    }
    return false;
}
module.exports.celeritate = celeritate;

module.exports.spell = function (canon) {
    var MSG = canon.MSG;
    return function caldarium(ingredients){
        if (!Array.isArray) {
            Array.isArray = function(arg) {
                return Object.prototype.toString.call(arg) === "[object Array]";
            };
        }


        if (celeritate(canon, ingredients)) {
            canon.magik.celeritate();
            return;
        }
        var result = mix(ingredients, MSG);

        if (result == MSG.CALDARIUM_FAIL || result == MSG.CALDARIUM_INSUFFICIENT || result == MSG.CALDARIUM_TOOMANYINGREDIENTS) canon.magik.msg(result);
        else
            canon.magik.msg([MSG.CALDARIUM_SPECIFIC, result]);
    };
};
