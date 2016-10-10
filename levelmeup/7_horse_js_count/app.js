module.exports = (db, dateString, callback) => {
    let counter = 0;
    db.createReadStream({gte: dateString})
        .on('data', counter++)
        .on('error', callback)
        .on('end', () => {
            callback(null, counter);
        });
};
