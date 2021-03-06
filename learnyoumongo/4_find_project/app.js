let mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if (err) {
        throw err;
    }
    let parrotsCollection = db.collection('parrots');
    parrotsCollection.find({
        age: {
            $gt: Number(process.argv[2])
        }
    }, {
        name: 1,
        age: 1,
        _id: 0
    }).toArray((err, documents) => {
        if (err) {
            throw err;
        }
        console.log(documents);
        db.close();
    });
});
