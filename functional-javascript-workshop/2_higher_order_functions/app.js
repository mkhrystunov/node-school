module.exports = function repeat (operation, num) {
    console.log(num);
    if (num > 0) {
        operation();
        return repeat(operation, --num);
    }
};
