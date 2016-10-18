let mongo = require('mongodb').MongoClient;

let firstName = process.argv[2];
let lastName = process.argv[3];

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if (err) {
        throw err;
    }

    let docsCollection = db.collection('docs');
    let doc = {firstName, lastName};
    docsCollection.insertOne({doc}, (err) => {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify(doc));
        db.close();
    });
});
