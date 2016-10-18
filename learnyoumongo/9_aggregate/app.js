let mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if (err) {
        throw err;
    }
    let collection = db.collection('prices');
    collection.aggregate([
        {$match: {
            size: process.argv[2]
        }},
        {$group: {
            _id: 'average',
            average: {
                $avg: '$price'
            }
        }}
    ]).toArray((err, results) => {
        if (err) {
            throw err;
        }
        console.log(Number(results.length === 0 ? 0 : results[0].average).toFixed(2));
        db.close();
    });
});
