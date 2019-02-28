//player related variables and compute

var playerStats = {
    accuracy: 0,
    totalClick: 0,
    totalCircle: 0,
    currentCombo: 0,
    bestCombo: 0,
    score: 0,
    accuracyMiss: 0
};
var playerAccuracy = {
    hit: 0,
    miss: 0
};

function computeAccuracy(hit, clicks) {
    playerStats.accuracy = Math.round(hit / clicks * 100);
    document.getElementById("Accuracy").innerHTML =
        "Accuracy : " + playerStats.accuracy + "%";
}

/*
function drawComboOn(item) {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText(playerStats.currentCombo, item.x, item.y);
}
*/

