let picture = require('cat-picture');
let image = require('lightning-image-poly');
let remote = require('electron').remote;
let fs = require('fs');

let save = () => {
    remote.getCurrentWindow().webContents.printToPDF({
        portrait: true
    }, (error, data) => {
        if (error) {
            return alert(error.message);
        }
        fs.writeFile('annotation.pdf', data, (error) => {
            if (error) {
                alert('Error generationg pdf: ' + error.message);
            } else {
                alert('Pdf is saved');
            }
        })
    })
};

let src = picture.src;
picture.remove();

let viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 80) {
        save();
    }
});
