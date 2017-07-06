import { globals, ICanon } from '../globals';
declare const Java: any, args: any;

const config = require('./../lib/constants').CONFIG;

module.exports.spell = function (canon: ICanon) {
    const { SpellControlGlobal, MagikCraftAPI } = globals;

    return function invoco_JS_ER789(spell: any) {
        var APIKEY = '86711FF3-60DA-4BC6-A121-437C5C5DA425';

        if (!spell) {
            return canon.magik.dixit("Usage: magik.invoco(spell: function)");
        }
        var jsargs;


        SpellControlGlobal.limitType = config.SPELL_LIMIT_BY_HEALTH_COST;

        SpellControlGlobal.abortSpellCast = false;
        SpellControlGlobal.firstOneFree = true;
        SpellControlGlobal.spellIterator = 0;
        SpellControlGlobal.isSurvivalMode = (canon.sender.getGameMode() == "SURVIVAL");
        var limitType = MagikCraftAPI.getMappedItem(APIKEY, config.SPELL_LIMITER_TYPE);
        if (typeof limitType != "undefined" && limitType) {
            SpellControlGlobal.limitType = limitType;
        }
        if (SpellControlGlobal.limitType == config.SPELL_LIMIT_BY_ITERATION) {
            var maxSpellIterations = MagikCraftAPI.getMappedItem(APIKEY, config.SPELL_MAX_ITERATIONS);
            if (typeof maxSpellIterations != "undefined" && maxSpellIterations) {
                SpellControlGlobal.maxSpellIterations = maxSpellIterations;
            }
        }
        if (MagikCraftAPI.getMappedItem(APIKEY, config.SPELL_CAST_FOOD_PENALTY) === 'true') {
            canon.sender.setFoodLevel(0);
        }

        globals.log.info(JSON.stringify(SpellControlGlobal));
        if (args) {
            jsargs = Java.from(args);
            return spell.apply(canon.sender, jsargs);
        } else return spell().bind(canon.sender);
    };
};