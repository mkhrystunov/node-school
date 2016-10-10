module.exports.init = (db, words, callback) => {
    let operations = words.map((word) => {
        return {
            operation: 'put',
            key: word.length + '!' + word,
            value: word
        };
    });
    db.batch(operations);
    callback();
};

module.exports.query = (db, word, callback) => {
    let results = [];
    let key = word.length + '!' + word.replace(/\*/g, '');
    db.createReadStream({gte: key, lte: key + '\xff'})
        .on('data', (data) => {
            results.push(data);
        })
        .on('error', callback)
        .on('end', () => {
            callback(null, results);
        });
};
