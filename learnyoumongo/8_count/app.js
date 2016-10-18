let mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if (err) {
        throw err;
    }
    let parrotsCollection = db.collection('parrots');
    parrotsCollection.count({
        age: {
            $gt: Number(process.argv[2])
        }
    }, (err, count) => {
        if (err) {
            throw err;
        }
        console.log(count);
        db.close();
    });
});
