/* global first, second */
first().then((data) => {
    return second(data);
}).then(console.log);
