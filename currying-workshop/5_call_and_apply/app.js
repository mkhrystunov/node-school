module.exports = {
    caller : (object, method, nameArg, ageArg, tShirtSizeArg) => {
        method.call(object, nameArg, ageArg, tShirtSizeArg);
    },
    applier: (object, method, argumentsArr) => {
        method.apply(object, argumentsArr);
    }
};
