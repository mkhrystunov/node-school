module.exports = function *multiplier() {
    var num = 1;
    var multiplier = 1;
    while(true) {
        multiplier = yield num++ * (multiplier || 1);
    }
};
