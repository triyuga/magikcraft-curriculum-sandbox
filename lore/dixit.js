
module.exports.spell = function (canon){
    return function dixit(msg, whom){
        var audience;
        if (typeof whom !== "undefined") {
            audience = canon.plugin.getServer().getPlayer(whom);
        } else {
            if (typeof canon.sender !== "undefined") {
                audience = canon.sender;
            } else {
                audience = this;
            }
        }
        log.info("About to say");
        var _msg;
        if (typeof msg === "string") {
            _msg = msg;
        } else {
            if (typeof msg === "number") {
                _msg = msg;
            } else {
                if (typeof msg === "object") {
                    try {
                        _msg = JSON.stringify(msg);
                    } catch (e) {
                        _msg = msg;
                    }
                }
            }
        }
        if (audience) {
            audience.sendMessage(_msg);
        }

    };
};
