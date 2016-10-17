/* global claim */
/* jshint proto: true */
var machine = {};
var vehicle = {};
var robot = {};

vehicle.__proto__ = machine;
robot.__proto__ = machine;

claim(vehicle.motors, undefined);
claim(robot.motors, undefined);

machine.motors = 4;

claim(vehicle.motors, 4);
claim(robot.motors, 4);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
    machine: machine,
    vehicle: vehicle,
    robot: robot
};
