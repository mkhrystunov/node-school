function *upper(arr) {
    for (var i = 0; i < arr.length; i++) {
        try {
            yield arr[i].toUpperCase();
        } catch (e) {
            yield null;
        }
    }
}

var bad_items = ['a', 'B', 1, 'c'];
for (var item of upper(bad_items)) {
    console.log(item);
}
