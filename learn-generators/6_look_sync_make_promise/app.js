function askFoo() {
    return new Promise((resolve, reject) => {
        resolve('foo');
    });
}

function run(generator) {
    var it = generator(go);

    function go(promise) {
        if (promise.done) {
            return promise.value;
        }

        return promise.value.then(function (value) {
            return (go(it.next(value)));
        }, function (error) {
            return go(it.throw(error));
        });
    }

    go(it.next());
}

run(function*() {
    try {
        var foo = yield askFoo();
        console.log(foo);
    } catch (e) {
        console.error(e);
    }
});
