//initialization and responsive elements

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const canvasBg = document.getElementById('bg')
const bgCtx =  canvasBg.getContext("2d");

var container = document.getElementById("game");
document.addEventListener("keypress", input);

const defWidth = 640;
const defHeight = 480;
var hitLeftOffset = 0;

function resizeEventHandler() {
    var positionInfo = container.getBoundingClientRect();
    console.log(positionInfo);

    var canvasScale = Math.min(
        window.innerWidth / defWidth,
        window.innerHeight / defHeight
    );

    canvas.width = window.innerWidth//Math.floor(defWidth * canvasScale);
    canvas.height = window.innerHeight//Math.floor(defHeight * canvasScale);

    canvasBg.width = window.innerWidth//Math.floor(defWidth * canvasScale);
    canvasBg.height = window.innerHeight//Math.floor(defHeight * canvasScale);


    var canvasPositionInfo = canvas.getBoundingClientRect();
    hitLeftOffset = canvasPositionInfo.left;
    console.log(canvasPositionInfo);

    console.log(canvas.width);
    console.log(canvas.height);

    if (oeufs.length === 0){
        fetchEggs()
    }

    if (personnages.length === 0){
        fetchCharacters()
    }

    if (oeufs){
        fetchEggs()
        oeufs.map(oeuf => {
            let ratio
            if (oeuf.image.height > oeuf.image.width) {
                ratio = (canvas.height / oeuf.image.height) / 4; 
            } else {
                ratio = (canvas.width / oeuf.image.width) / 4; 
            }
            oeuf.ratio = ratio
            return oeuf
        })
    }

    if (personnages){
        fetchCharacters()
        personnages.map(oeuf => {
            let ratio
            if (oeuf.image.height > oeuf.image.width) {
                ratio = (canvas.height / oeuf.image.height) / 4; 
            } else {
                ratio = (canvas.width / oeuf.image.width) / 4; 
            }
            oeuf.ratio = ratio
            return oeuf
        })
    }
   
}
$(document).ready(resizeEventHandler);

$(window).resize(resizeEventHandler);

//var circle = new Circle(0, 0, 50, "red", 0);



let personnages = []    
let oeufs = []
fetchCharacters = () => {
    fetch("http://easteregg.wildcodeschool.fr/api/characters")
    .then(response => response.json())
    .then(data => {
        //oeufs = data
        data.map(oeuf => oeuf.image = createImg(oeuf.image))
        return data
    }
    ).then(ok => ok
    ).then(egg => {
        //console.log(egg)
        return egg.map(oeuf => oeuf = new Personnage(oeuf.image, oeuf.name, oeuf.rarity))
    }).then( egg => {
        egg.map(oeuf => {
            let ratio
            if (oeuf.image.height > oeuf.image.width) {
                ratio = (canvas.height / oeuf.image.height) / 4; 
            } else {
                ratio = (canvas.width / oeuf.image.width) / 4; 
            }
            oeuf.ratio = ratio
            return oeuf
        })
        return egg
        
    }).then(egg => {
        egg.map(oeuf => {
            oeuf.image.height *= oeuf.ratio
            oeuf.image.width *= oeuf.ratio
            oeuf.width = oeuf.image.width
            oeuf.height = oeuf.image.height
            personnages.push(oeuf)
        })
    })
};

fetchEggs = () => {
    fetch("http://easteregg.wildcodeschool.fr/api/eggs")
    .then(response => response.json())
    .then(data => {
        //oeufs = data
        data.map(oeuf => oeuf.image = createImg(oeuf.image))
        return data
    }
    ).then(ok => ok
    ).then(egg => {
        //console.log(egg)
        return egg.map(oeuf => oeuf = new Oeuf(oeuf.image, oeuf.name, oeuf.rarity))
    }).then( egg => {
        egg.map(oeuf => {
            let ratio
            if (oeuf.image.height > oeuf.image.width) {
                ratio = (canvas.height / oeuf.image.height) / 4; 
            } else {
                ratio = (canvas.width / oeuf.image.width) / 4; 
            }
            oeuf.ratio = ratio
            return oeuf
        })
        return egg
        
    }).then(egg => {
        egg.map(oeuf => {
            oeuf.image.height *= oeuf.ratio
            oeuf.image.width *= oeuf.ratio
            oeuf.width = oeuf.image.width
            oeuf.height = oeuf.image.height
            oeufs.push(oeuf)
        })
    })
};



function createImg(src){
    const image = new Image();
    image.src = src
    return image
}

function generateDvdLogo(target) {
    var speed = 1;

    if (!dvdLogo) {
        loadDvdPng();
        return
    }

    if (dvdLogo.height > dvdLogo.width) {
        var logoSize = (canvas.height / dvdLogo.height) / 4; //Image take a 4th of the available height
    } else {
        var logoSize = (canvas.width / dvdLogo.width) / 4; //Image take a 4th of the available width
    }

    for (var i = 0; i < target; i++) {
        var x = Math.random() * (canvas.width - (dvdLogo.width * logoSize));
        var y = Math.random() * (canvas.height - (dvdLogo.height * logoSize));
        var dx = Math.random() * (5 - 1.5) + 1.5;
        var dy = Math.random() * (4 - 0.5) + 0.5;
        dvdArray.push(new EpicDvdLogo(x, y, dx, dy, logoSize, speed))
    }
}

//const imageLib = ['https://cdn.discordapp.com/attachments/568402956991332365/568756289384218624/Error_Message.png', ]
let errors = [];
let errorImg = new Image();
errorImg.src = 'https://cdn.discordapp.com/attachments/568402956991332365/568756289384218624/Error_Message.png';
errorImg.onload = function () {
    for (let i = 0; i<1; i++){
        const imaaa = new Image();
        imaaa.src = 'https://cdn.discordapp.com/attachments/568402956991332365/568756289384218624/Error_Message.png'
        const imaa = new Image();
        imaa.src = 'https://cdn.discordapp.com/attachments/568402956991332365/568757085387489292/Error_Message.png'
        errors.push(new ErrorMsg(imaaa))
        errors.push(new ErrorMsg(imaa))
    }
}


