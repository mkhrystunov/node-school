module.exports = (...numbers) => numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
