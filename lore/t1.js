module.exports.spell = function (canon) {
    return function t1() {
        var BossBarAPI = Java.type("org.inventivetalent.bossbar.BossBarAPI");
        var TextComponent = Java.type("net.md_5.bungee.api.chat.TextComponent");

        var insulinBar = BossBarAPI.addBar(magik.getSender(),
            new TextComponent("Insulin"),
            BossBarAPI.Color.BLUE,
            BossBarAPI.Style.NOTCHED_20,
            0.5 
        );

        var bglBar = BossBarAPI.addBar(magik.getSender(),
            new TextComponent("BGL"),
            BossBarAPI.Color.RED,
            BossBarAPI.Style.NOTCHED_20,
            0.5 
        );

        T1 = {
            bars: {
                insulin: insulinBar,
                bgl: bglBar
            },
            state: {
                bgl: 6,
                insulinOnBoard: 0.3,
                carbsOnBoard: 0.5
            }
        }
        magik.dixit("Initialised T1");
    }
}