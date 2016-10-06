module.exports = function (array, callback) {
    return array.reduce(function (result, element, index, array) {
        result.push(callback(element, index, array));
        return result;
    }, []);
};
