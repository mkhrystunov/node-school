/* global setImmediate */
let foot = {
    kick: () => {
        this.yelp = 'Ouch!';
        setImmediate(() => console.log(this.yelp));
    }
};
foot.kick();