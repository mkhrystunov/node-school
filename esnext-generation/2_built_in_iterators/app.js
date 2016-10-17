module.exports = function filterNumbers(iterable) {
    var result = [];
    for (var element of iterable) {
        if (typeof element === 'number') {
            result.push(element);
        }
    }
    return result;
};
