let mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/' + process.argv[2], (err, db) => {
    if (err) {
        throw err;
    }
    let usersCollection = db.collection('users');
    usersCollection.updateOne({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    }, (err) => {
        if (err) {
            throw err;
        }
        db.close();
    });
});
