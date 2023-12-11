let qteklogo;
let xpos;
const message = 'Wire Chart';
//const messageX = xpos;
const messageY = 330;
const message2 = 'Electrical Drawing';
//const message2X = xpos;
const message2Y = 370;
const message3 = 'Pictures';
//const message3X = xpos;
const message3Y = 410;
const message4 = 'Terminal Layout';
//const message4X = xpos;
const message4Y = 450;
const message5 = 'Cable Layout Chart';
//const message5X = xpos;
const message5Y = 490;
const message6 = 'Backplate Layout';
//const message6X = xpos;
const message6Y = 530;

const NUM_IMGS = 5,
imgs = [];
let currentImg = 0;
let counter = 0;

let menu = true;
let pictures = false;

function preload() {
    qteklogo = loadImage('pics/QTEK.gif');
    font = loadFont('oswald.ttf');

    let images = 2;
    for (let i = 0; i < images; i++) {
        path = 'pics/' + str(i) + '.jpg' // create a path to the image
        loaded_image = loadImage(path)     // load the image from the path
        imgs.push(loaded_image)             // add the loaded path to ims
    }
   // console.log(imgs);

}

function setup() {
    createCanvas(1400, 900);
    xpos = width/2 - 100;
   // setupButtons();
   // console.log("pictures" + " " + pictures);
   // console.log("menu " + " " + menu);
   // console.log("width " + " " + width);
}



function draw() {
    background('yellow');


    if (menu) {
        //push();
        imageMode(CENTER);
        image(qteklogo, width/2, 130, qteklogo.width, qteklogo.height);
        //pop();
        // image(imgs[currentImg], 0, 0);
        textFont(font);
        fill('grey');
        line(xpos, 235, 725, 235);
        // textAlign(CENTER);
        textSize(26);
        if (isMouseInsideText(message, xpos, messageY)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message, xpos, messageY);
        if (isMouseInsideText(message2, xpos, message2Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message2, xpos, message2Y);
        if (isMouseInsideText(message3, xpos, message3Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message3, xpos, message3Y);
        if (isMouseInsideText(message4, xpos, message4Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message4, xpos, message4Y);
        if (isMouseInsideText(message5, xpos, message5Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message5, xpos, message5Y);
        if (isMouseInsideText(message6, xpos, message6Y)) {
            cursor(HAND);
            fill(0, 200, 255);
            //stroke(0, 200, 255);
        } else {
            cursor(ARROW);
            fill('grey');
            //  stroke(255);
        }
        text(message6, xpos, message6Y);

        // textFont(font);
        // fill('grey');
        // textSize(14);
        // text('ACP Digital Solutions', xpos, height - 30);
        textSize(32);
        fill(198, 0, 0);
        text('ACP Digital Solutions', xpos, 230);
        textSize(20);
        fill('black');
        text('SUPERBOMBER #23352', xpos, 257);
        //image(qteklogo, 0, 0, qteklogo.width /2,  qteklogo.height /2);

    }





    if (pictures) {

        //menu = false;
        //console.log(pictures)     
        //setupButtons();
        push();
        imageMode(CENTER);
        
        image(qteklogo, width - 200, 55, qteklogo.width / 2, qteklogo.height / 2);
        pop();

        fill('blue');
        // line(360, 235, 625, 235);
        // textAlign(CENTER);
        textSize(16);
        text("Back to Main", width - 270, 150);
        image(imgs[currentImg], 0, 20, imgs[currentImg].width*2, imgs[currentImg].height*2);

        if (counter < 1) {
            setupButtons();
        }
        console.log("pisc" + width);
        counter++;
       // console.log(counter);
        //  setupButtons();
    }






}

// end of draw






const setupButtons = _ => {
    previous = createButton('Prev');
    console.log("button" + width);
    previous.position(300, 100);

    if (menu) {
        previous.position(-940, 100);
    }
    previous.mouseClicked(_ => {
        if (currentImg > 0) currentImg--;
    });

    next = createButton('Next');
    next.position(300, 200);

    if (menu) {
        next.position(-1020, 100);
    }
    next.mouseClicked(_ => {
        if (currentImg < imgs.length - 1) currentImg++;
    });

};


function mouseClicked() {
    if (isMouseInsideText(message, xpos, messageY)) {
        //  menu = false;
        //window.open('http://www.chriscalver.com/', '_blank');
        // window.open('/pics/QTEK.gif', '_blank');
        window.open('/data/Wirechart.pdf', '_blank');
    }

    if (isMouseInsideText(message2, xpos, message2Y)) {
        //  menu = false;
        //window.open('http://www.chriscalver.com/', '_blank');
        window.open('/data/Electrical.pdf', '_blank');
        // window.open('/data/Wirechart.gif', '_blank');
    }

    if (isMouseInsideText(message3, xpos, message3Y)) {

        pictures = true;

        menu = false;
        console.log("pictures" + " " + pictures);
        console.log("menu " + " " + menu);

        //window.open('http://www.chriscalver.com/', '_blank');
        //window.open('/pics/0.jpg', '_blank');
        // window.open('/data/Wirechart.gif', '_blank');
    }
}

function isMouseInsideText(message, xpos, messageY) {
    const messageWidth = textWidth(message);
    const messageTop = messageY - textAscent();
    const messageBottom = messageY + textDescent();

    return mouseX > xpos && mouseX < xpos + messageWidth &&
        mouseY > messageTop && mouseY < messageBottom;
}

