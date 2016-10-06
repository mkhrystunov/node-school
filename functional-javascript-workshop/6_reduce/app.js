module.exports = function (words) {
    return words.reduce(function (obj, word) {
        obj[word] = ++obj[word] || 1;
        return obj;
    }, {});
};
