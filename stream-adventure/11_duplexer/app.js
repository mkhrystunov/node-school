let spawn = require('child_process').spawn;
let duplexer = require('duplexer2');

module.exports = (cmd, args) => {
    let proc = spawn(cmd, args);
    return duplexer(proc.stdin, proc.stdout);
};
