module.exports = function reduce (initialArray, callback, init) {
    return function reduceSingle(array, callback, init, index) {
        if (array.length === 0) {
            return init;
        }
        init = callback(init, array[0], index, initialArray);
        return reduceSingle(array.slice(1), callback, init, ++index);
    }(initialArray, callback, init, 0);
};
