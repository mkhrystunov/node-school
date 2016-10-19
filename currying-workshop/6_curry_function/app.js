module.exports = (fx) => {
    let arity = fx.length;

    return function f1() {
        let args = Array.prototype.slice.call(arguments, 0);
        if (args.length >= arity) {
            return fx.apply(null, args);
        } else {
            return function f2() {
                let args2 = Array.prototype.slice.call(arguments, 0);
                return f1.apply(null, args.concat(args2));
            };
        }
    };
};
