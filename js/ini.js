//initialization and responsive elements

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

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

    canvas.width = Math.floor(defWidth * canvasScale);
    canvas.height = Math.floor(defHeight * canvasScale);

    var canvasPositionInfo = canvas.getBoundingClientRect();
    hitLeftOffset = canvasPositionInfo.left;
    console.log(canvasPositionInfo);

    console.log(canvas.width);
    console.log(canvas.height);
}
$(document).ready(resizeEventHandler);

$(window).resize(resizeEventHandler);

var circle = new Circle(0, 0, 50, "red", 0);