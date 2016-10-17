module.exports = function generate(isEven) {
    var num = isEven ? 0 : -1;

    return {
        next: function(swap) {
            num += swap ? 1 : 2;
            return {
                value: num
            };
        }
    };
};
