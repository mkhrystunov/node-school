module.exports = (context) => {
    return 'Hello ' + context.data.root.query.name + context.data.root.query.suffix;
};
