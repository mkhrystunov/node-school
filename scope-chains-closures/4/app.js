function foo() {
    var bar;

    quux = 'foo';
    function zip() {
        var quux = 'zip';
        bar = true;
    }

    return zip;
}