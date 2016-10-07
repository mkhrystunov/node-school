module.exports = function repeat (operation, num) {
    if (num <= 0) {
        return;
    }

    operation();

    // release control every 20 or so iterations
    if (num % 20 === 0) {
        setTimeout(function () {
            repeat(operation, --num)
        }, 0);
    } else {
        repeat(operation, --num);
    }
};
