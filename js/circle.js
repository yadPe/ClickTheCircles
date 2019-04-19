// //Generate and display random circle on canvas

// class Circle {
//     constructor(x, y, radius, color, comboKey) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.color = color;
//         this.comboKey = comboKey;
//     }
//     draw() {
//         //Randomness
//         this.x = Math.floor(Math.random() * (canvas.width - 100)) + 50;
//         this.y = Math.floor(Math.random() * (canvas.height - 100)) + 50;

//         switch (Math.floor(Math.random() * (5 - 1) + 1)) {
//             case 1:
//                 this.color = "red";
//                 break;
//             case 2:
//                 this.color = "blue";
//                 break;
//             case 3:
//                 this.color = "green";
//                 break;
//             case 4:
//                 this.color = "purple";
//                 break;
//             case 5:
//                 this.color = "pink";
//                 break;
//         }

//         //fake combo key
//         if (this.comboKey <= 7) {
//             this.comboKey++;
//         } else {
//             this.comboKey = 1;
//         }
//         //Draw
//         ctx.clearRect(0, 0, canvas.width, canvas.height);


//         ///ctx.save();

//         ctx.globalCompositeOperation = "destination-over";
//         //comboKey
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         ctx.font = 40 + "px Arial";
//         ctx.fillStyle = "rgba(255,255,255," + 0.8 + ")";
//         ctx.fillText(this.comboKey, this.x, this.y);
//         ctx.lineCap = "round";
//         //Outer
//         ctx.beginPath();
//         ctx.lineWidth = 5;
//         ctx.strokeStyle = "rgba(237, 237, 237 , 1)";
//         ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
//         ctx.stroke();
//         //Inner
//         var inGrd = ctx.createRadialGradient(
//             this.x,
//             this.y,
//             this.radius + 5,
//             this.x,
//             this.y,
//             this.radius - 30
//         );
//         inGrd.addColorStop(0, this.color);
//         inGrd.addColorStop(1, "transparent");
//         ctx.fillStyle = inGrd;
//         ctx.fill();
//         ctx.closePath();
//         // //glow
        
//         drawCombo(playerStats.currentCombo);

//         ///ctx.restore();
//         //update label
//         document.getElementById("Circle").innerHTML =
//             "Circle : x " + this.x + ", y " + this.y + ", " + this.color;
//     }
// }


// //Generate and display random circle on canvas

class Circle {
    constructor(image) {
        this.image = image;
    }
    draw() {
        this.x = Math.floor(Math.random() * (canvas.width - this.image.width)) + 10;
        this.y = Math.floor(Math.random() * (canvas.height - this.image.height)) + 10;
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        ///ctx.save();
        ctx.drawImage(this.image, this.x, this.y, this.image.width, this.image.height)

        ctx.globalCompositeOperation = "destination-over";
        //comboKey
        
        
        drawCombo(playerStats.currentCombo);


    }
}

class Personnage extends Circle{
    constructor(image, name){
        super(image)
        this.name = name;
    }

    draw() {
       

        ///ctx.save();
        bgCtx.drawImage(this.image, this.x, this.y, this.image.width/2, this.image.height/2)

        bgCtx.globalCompositeOperation = "destination-over";


    }
}

class Oeuf extends Circle{
    constructor(image, name, rarity){
        super(image)
        this.name = name;
        this.rarity = rarity;
    }
}