function *factorial(n) {
    var current = 1;
    var total = 1;
    while (current <= n) {
        total *= current++;
        yield total;
    }
}

for (var n of factorial(5)) {
    console.log(n);
}
