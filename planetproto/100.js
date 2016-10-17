/* global claim */
// -> Define a 'Robot' function constructor
// -> Create two instances of Robot: 'robby' and 'cranky'
// -> Both robby and cranky should respond to 'parts' and 'capabilities', these 
//    should be empty arrays at first
function Robot() {
    this.parts = [];
}
Robot.prototype.capabilities = [];

var robby = new Robot();
var cranky = new Robot();

claim(robby.parts, []);
claim(cranky.parts, []);
claim(robby.capabilities, []);
claim(cranky.capabilities, []);

robby.parts.push('core');
robby.capabilities.push('fly');

claim(robby.parts, ['core']);
claim(cranky.parts, []);
claim(robby.capabilities, ['fly']);
claim(cranky.capabilities, ['fly']);

module.exports = {
    Robot: Robot,
    robby: robby,
    cranky: cranky
};
