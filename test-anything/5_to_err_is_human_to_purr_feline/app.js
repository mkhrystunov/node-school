var test = require('tape');
var feedCat = require(process.argv[2]);

test('feedCat', function (t) {
    t.equal(feedCat('anything'), 'yum');
    t.throws(feedCat.bind(null, 'chocolate'));
    t.end();
});
