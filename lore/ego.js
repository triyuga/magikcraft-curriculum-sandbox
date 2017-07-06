
module.exports.spell = function (canon) {
    return function ego(){
        if (typeof canon.sender !== "undefined") return canon.sender; else return undefined;
    };
};
