module.exports = (someObj, maxNum = 10) => {
    var current = 0;
    var done = false;

    someObj.next = function () {
        if (current >= maxNum) {
            done = true;
        } else {
            current++;
        }

        return {
            value: current,
            done
        };
    };
    return someObj;
};
