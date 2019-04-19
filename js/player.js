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
    console.log(playerStats.totalClick)
   

}

/*
function drawComboOn(item) {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText(playerStats.currentCombo, item.x, item.y);
}
*/



audio = new Audio()
audio.src = 'https://cdn.discordapp.com/attachments/568402956991332365/568515675585380352/hitmarker_2.mp3',

audio.play()

audiomiss = new Audio()
audiomiss.src = 'https://cdn.discordapp.com/attachments/568402956991332365/568514899177635840/erro.mp3'

audiomiss.play()

audiowolo = new Audio()
audiowolo.src = 'https://cdn.discordapp.com/attachments/568402956991332365/568515724096700426/wololo.mp3'
audiowolo.play()

createError = () => {
  var catDiv = document.createElement("div");
  catDiv.style.width = "200px";
  catDiv.style.height = "200px";
 
  catDiv.style.color = "white";

  catDiv.style.position = 'absolute'
  catDiv.style.top = Math.floor(Math.random() * window.innerHeight) + 'px'
  catDiv.style.left = Math.floor(Math.random() * window.innerHeight) + 'px'
   
document.body.appendChild(catDiv);

let errors = ['0','https://cdn.discordapp.com/attachments/568402956991332365/568690186355998720/Install_error.png', 'http://atom.smasher.org/error/98.png.php?icon=Error&style=98&title=Canvas+Error&url=&text=cmon+pls.&b1=&b2=&b3=','https://cdn.discordapp.com/attachments/568402956991332365/568690217155035146/5d2285a5a6914b51ec030fd42dca0624_icon.png','https://cdn.discordapp.com/attachments/568402956991332365/568690807175905280/erreur_internet.png']
  catDiv.style.backgroundImage = errors[Math.floor(Math.random() * 4)] 



}
let errors = ['0','https://cdn.discordapp.com/attachments/568402956991332365/568690186355998720/Install_error.png', 'http://atom.smasher.org/error/98.png.php?icon=Error&style=98&title=Canvas+Error&url=&text=cmon+pls.&b1=&b2=&b3=','https://cdn.discordapp.com/attachments/568402956991332365/568690217155035146/5d2285a5a6914b51ec030fd42dca0624_icon.png','https://cdn.discordapp.com/attachments/568402956991332365/568690807175905280/erreur_internet.png']
makeObject = (url) => {
  const imgarray = []
  for (let i = 0; i < 4; i++) {
var img = new Image();
Image.src = url;

imgarray.push(Image)
  }
  console.log(imgarray)
  return imgarray
  
}



for (let i = 0; i < 4; i++) {
  makeObject(errors[i])


}

changeCanvas= () => {
  setInterval(() => {
    document.getElementById('canvas').style.backgroundColor = 'rgba(' +Math.floor(Math.random() * 255) +','+Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) +',' + 0.2 + ')'
  }, 200);
 
}

