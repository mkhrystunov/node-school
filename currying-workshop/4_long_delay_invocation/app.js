let sum = 0;
module.exports = function add(arg) {
    if (arg) {
        sum += arg;
        return add;
    } else {
        const temp = sum;
        sum = 0;
        return temp;
    }
};
