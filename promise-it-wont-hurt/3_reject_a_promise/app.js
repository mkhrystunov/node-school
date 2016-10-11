'use strict';

new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('REJECTED!'));
    }, 300);
}).then(() => {

}, (error) => {
    console.log(error.message);
});