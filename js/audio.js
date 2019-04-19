const audioSrc = ['https://cdn.discordapp.com/attachments/568402956991332365/568515675585380352/hitmarker_2.mp3',  'https://cdn.discordapp.com/attachments/568402956991332365/568514899177635840/erro.mp3', 'https://cdn.discordapp.com/attachments/568402956991332365/568515724096700426/wololo.mp3']

const audioLib = {
    hit: null,
    err: null,
    wololo: null,
}

for (let i = 0;i< audioSrc.length; i++){
    const sample = new Switcher(audioSrc[i], 5)
    audioLib['son' + i] = sample
}

// errorSprite 

changeCanvas= () => {
    setInterval(() => {
      document.getElementById('canvas').style.backgroundColor = 'rgba(' +Math.floor(Math.random() * 255) +','+Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) +',' + 0.2 + ')'
    }, 200);
   
  }