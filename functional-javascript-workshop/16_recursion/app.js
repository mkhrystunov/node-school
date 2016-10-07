module.exports = function getDependencies(tree, dependencies) {
    dependencies = dependencies || [];

    Object.keys((tree && tree.dependencies) ? tree.dependencies: []).forEach(function(dependencyName) {
        var dependencyNode = tree.dependencies[dependencyName];
        var dependency = dependencyName + '@' + dependencyNode.version;
        if (dependencies.indexOf(dependency) === -1) {
            dependencies.push(dependency);
        }
        getDependencies(dependencyNode, dependencies);
    });

    return dependencies.sort();
};
