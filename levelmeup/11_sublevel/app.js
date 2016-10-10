let level = require('level');
let sublevel = require('level-sublevel');

let db = sublevel(level(process.argv[2]));

let robotsDb = db.sublevel('robots');
robotsDb.put('slogan', 'beep boop');
let dinosaursDb = db.sublevel('dinosaurs');
dinosaursDb.put('slogan', 'rawr');
