module.exports = (db, dateString, callback) => {
    let date = new Date(dateString);
    let nextDateString = date.setDate(date.getDate() + 1).toISOString();

    let twits = [];
    db.createReadStream({gte: dateString, lte: nextDateString})
        .on('data', (data) => {
            twits.push(data.value);
        })
        .on('error', callback)
        .on('end', () => {
            callback(null, twits);
        });
};
