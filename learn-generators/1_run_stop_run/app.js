function *range(from ,to) {
    var current = from;
    while(current <= to) {
        yield current++;
    }
}

for (var r of range(5, 10)) {
    console.log(r);
}
