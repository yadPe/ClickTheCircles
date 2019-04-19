//core functions, rules, animation

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback, element) {
            window.setTimeout(function () {

                callback(+performance.now());
            }, 1000 / 150); //max fps but capped to screen refreshRate
        };
})();

var currentFrame = 0;
var lastRun;//performance.now();
var game_running = true;

function animate() {
    if (!lastRun) {
        lastRun = performance.now();
        requestAnimFrame(animate);
        return;
    }
    var delta = (performance.now() - lastRun) / 1000;
    lastRun = performance.now();
    var FPS = Math.round(1 / delta);
    //drawCanvas()
    if (game_running) {
        requestAnimFrame(animate);
    } else {
        FPS = 0;
    }
    game();
    document.getElementById("Frame").innerHTML = "Frame : " + currentFrame + "(" + FPS + "fps)";
    currentFrame++;
}
animate();

var lastCircle;
var speed = 1000;

function game() {
    if (!lastCircle) {
        lastCircle = performance.now();
    }

    currentTime = performance.now();

    if (currentTime - lastCircle > speed) {
        lastCircle = performance.now();
        playerAccuracy.miss += 1;
        playerStats.accuracyMiss += 1;
        playerStats.currentCombo = 0;
        computeAccuracy(playerAccuracy.hit, playerStats.accuracyMiss);
        nextCircle();
        updateLabels();
    }

}

function mouseClick(event) {
    const clientPos = {
        x: event.clientX,
        y: event.clientY
    };
   
    var coords = "Client : x " + clientPos.x + ", y " + clientPos.y;
    document.getElementById("Mouse").innerHTML = coords;

    playerStats.totalClick += 1;
    playerStats.accuracyMiss += 1;

    let hitsCircle = isIntersect(clientPos, circle);
    document.getElementById("Intersect").innerHTML =
        "isIntersect : " + hitsCircle;

    if (hitsCircle) {
        audio.play()
        playerAccuracy.hit += 1;
        playerStats.currentCombo += 1;
        if (playerStats.currentCombo > 3) {
            document.body.style.backgroundImage = `url('Fond02.png')`
            playerStats.score += 100 * playerStats.currentCombo;
        } 
        if (playerStats.currentCombo > 4) {
           
            playerStats.score += 100 * playerStats.currentCombo;
        }
        if (playerStats.currentCombo > 5) {
            
            playerStats.score += 100 * playerStats.currentCombo;
        }
        if (playerStats.currentCombo > 6) {
           
            playerStats.score += 100 * playerStats.currentCombo;
          changeCanvas()

        }
        else {
            playerStats.score += 100;
        }
        nextCircle(hitsCircle);
    } else {
        createError()
        audiomiss.play()
        playerAccuracy.miss += 1;
        playerStats.currentCombo = 0;
        drawCombo(playerStats.currentCombo);
    }
    if (playerStats.currentCombo > playerStats.bestCombo) {
        audiowolo.play()
        playerStats.bestCombo = playerStats.currentCombo;
        document.getElementById("BestCombo").innerHTML =
            "Best Combo : x" + playerStats.bestCombo;
    }
    computeAccuracy(playerAccuracy.hit, playerStats.accuracyMiss);
    updateLabels();   
}

function nextCircle(hitsCircle) {

    circle.draw();

    lastCircle = performance.now();
    playerStats.totalCircle += 1;
    updateLabels();
}

function isIntersect(point, circle) {
    return (
        Math.sqrt(
            (point.x - (circle.x + hitLeftOffset)) ** 2 + (point.y - circle.y) ** 2
        ) < circle.radius
    );
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawCombo(playerCombo){
    //Combo Indicator
    ctx.beginPath();
    
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.font = 60 + "px Arial";
    ctx.fillStyle = "rgba(255,255,255," + 0.8 + ")";
    ctx.fillText("x" + playerCombo, 45, canvas.height - 50);
    ctx.lineCap = "round";

    ctx.closePath();
}

function updateLabels() {
    document.getElementById("Score").innerHTML = "Score : " + playerStats.score;
    document.getElementById("CurrentCombo").innerHTML =
        "Combo : x" + playerStats.currentCombo;
    document.getElementById("HitMiss").innerHTML =
        "Hit/Miss : " + playerAccuracy.hit + " / " + playerAccuracy.miss;
    document.getElementById("TotalClick").innerHTML =
        "Total Click : " + playerStats.totalClick;
}

function input(event) {
    circle.draw();
    document.getElementById("Key").innerHTML = "Key Pressed : " + event.key;
}