let mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/' + process.argv[2], (err, db) => {
    if (err) {
        throw err;
    }
    let collection = db.collection(process.argv[3]);
    collection.removeOne({
        _id: process.argv[4]
    }, (err) => {
        if (err) {
            throw err;
        }
        db.close();
    });
});
