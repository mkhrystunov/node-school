module.exports = function () {
    return [].reduce.call(arguments, function (totalDucks, argument) {
        return totalDucks + Object.prototype.hasOwnProperty.call(argument, 'quack');
    }, 0);
};
