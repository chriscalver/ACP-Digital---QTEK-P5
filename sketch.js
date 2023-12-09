let qteklogo;
let xpos = 360;
const message = 'Wire Chart';
const messageX = xpos;
const messageY = 330;
const message2 = 'Electrical Drawing';
const message2X = xpos;
const message2Y = 370;
const message3 = 'Pictures';
const message3X = xpos;
const message3Y = 410;
const message4 = 'Terminal Layout';
const message4X = xpos;
const message4Y = 450;
const message5 = 'Cable Layout Chart';
const message5X = xpos;
const message5Y = 490;
const message6 = 'Backplate Layout';
const message6X = xpos;
const message6Y = 530;

const NUM_IMGS = 5,
  imgs = [];
let currentImg = 0;


let menu = true;
let pictures = false;

function preload() {
    qteklogo = loadImage('pics/QTEK.gif');
    font = loadFont('oswald.ttf');

    // for (let i = 0; i < NUM_IMGS; i++) {
    //     imgs[i] = loadImage(`http://picsum.photos/640/360/?random?sig=${i}`);
    //   }
    let images = 5;
    for (let i = 0; i < images; i++) {
        path = 'pics/' + str(i) + '.jpg' // create a path to the image
        loaded_image = loadImage(path)     // load the image from the path
        imgs.push(loaded_image)             // add the loaded path to ims
      }

}

console.log(imgs);

function setup() {
    createCanvas(1000, 700);
   // setupButtons();
}




function draw() {
    background('WHITE');

   
   
   
   
   
   
   
   
   
    if (menu) {
        push();
        imageMode(CENTER);
        image(qteklogo, 450, 130, qteklogo.width, qteklogo.height);
        pop();
       // image(imgs[currentImg], 0, 0);
        textFont(font);
        fill('grey');
        line(360, 235, 625, 235);
        // textAlign(CENTER);
        textSize(26);
        if (isMouseInsideText(message, messageX, messageY)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message, messageX, messageY);
        if (isMouseInsideText(message2, message2X, message2Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message2, message2X, message2Y);
        if (isMouseInsideText(message3, message3X, message3Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message3, message3X, message3Y);
        if (isMouseInsideText(message4, message4X, message4Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message4, message4X, message4Y);
        if (isMouseInsideText(message5, message5X, message5Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message5, message5X, message5Y);
        if (isMouseInsideText(message6, message6X, message6Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message6, message6X, message6Y);
        textFont(font);
        fill('grey');
        textSize(14);
        // text('ACP Digital Solutions', xpos, height - 30);
        textSize(32);
        fill(198, 0, 0);
        text('ACP Digital Solutions', xpos, 230);
        textSize(20);
        fill('black');
        text('SUPERBOMBER #23352', xpos, 257);
        //image(qteklogo, 0, 0, qteklogo.width /2,  qteklogo.height /2);
        console.log(qteklogo.width);
    }
}



if(pictures){

menu = false;

push();
        imageMode(CENTER);
        image(qteklogo, 450, 130, qteklogo.width, qteklogo.height);
        pop();

}

// const setupButtons = _ => {
//     previous = createButton('Prev');
//     previous.position(400, 400);
    
//     previous.mouseClicked(_ => {
//       if (currentImg > 0) currentImg--;
//     });
  
//     next = createButton('Next');
//     next.position(450, 400);
    
//     next.mouseClicked(_ => {
//       if (currentImg < imgs.length - 1) currentImg++;
//     });
//   };

function mouseClicked() {
    if (isMouseInsideText(message, messageX, messageY)) {
        //  menu = false;
        //window.open('http://www.chriscalver.com/', '_blank');
        // window.open('/pics/QTEK.gif', '_blank');
        window.open('/data/Wirechart.pdf', '_blank');
    }

    if (isMouseInsideText(message2, message2X, message2Y)) {
        //  menu = false;
        //window.open('http://www.chriscalver.com/', '_blank');
        window.open('/data/Electrical.pdf', '_blank');
        // window.open('/data/Wirechart.gif', '_blank');
    }

    if (isMouseInsideText(message3, message3X, message3Y)) {
        //  menu = false;
        //window.open('http://www.chriscalver.com/', '_blank');
        window.open('/pics/0.jpg', '_blank');
        // window.open('/data/Wirechart.gif', '_blank');
    }
}

function isMouseInsideText(message, messageX, messageY) {
    const messageWidth = textWidth(message);
    const messageTop = messageY - textAscent();
    const messageBottom = messageY + textDescent();

    return mouseX > messageX && mouseX < messageX + messageWidth &&
        mouseY > messageTop && mouseY < messageBottom;
}

