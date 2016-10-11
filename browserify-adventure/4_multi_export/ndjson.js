module.exports.parse = function (str) {
    return str.split('\n').map(JSON.parse);
};

module.exports.stringify = function (rows) {
    return rows.map(JSON.stringify).join('\n');
};
