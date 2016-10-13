module.exports = (...numbers) => {
    return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
};
