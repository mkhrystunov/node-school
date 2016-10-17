var Robot = {
    new: function () {
        return Object.create(Robot);
    }
};

module.exports = {
    Robot: Robot
};
