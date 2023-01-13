let x = 0;
let y = 0;
let theta = 0;
let inc = 0.05; // the amount to increment the offset
let offset = 1.57; // the amount offset from wave start
let amplitude;
let frequency;
let maxAngle;
let a = 0;
let b = 0;
let length = 10;
let fr = 10;


function setup() {

    // amplitude = windowHeight * 8;
    // frequency = windowWidth * 8;
    maxAngle = (0.05) * TAU;
    
    createCanvas(windowWidth, windowHeight);
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;

    window.addEventListener('mousedown', mouseDown)
    function mouseDown() {
        fr = 100
    }
    window.addEventListener('mouseup', mouseUp)
    function mouseUp() {
        fr = 10
    }
    
}
function draw() {
    background(0);
    noStroke();
    

    while (theta < maxAngle + offset) {
        // amplitude = sin(theta - offset)
        //     // amplitude = ((theta-offset)/maxAngle)* (windowHeight/2)

        //     //for mouse move
        //     for (let i= length; i>0; i--){
        //     y = sin(theta) * (random(mouseY-(windowHeight/2)))+(random(mouseY-(windowHeight/2)))
        //    x = sin(theta) * (random(mouseX-(windowWidth/2)))+(random(mouseX-(windowWidth/2)));
        //     stroke(250-(250/length * i),60,60)
        //     strokeWeight(10)
        //     noFill()
        //     ellipse(x+windowWidth/2, y+windowHeight/2,500,500);
        //     }
frameRate(fr)

        // //for click
        for (let i = length; i > 0; i--) {
            a = cos(theta) * 2
            y = (random(200) * a) + (random(200) * a) 
            x = (random(200) * a) + (random(200) * a);
            stroke(225 - (255 / length * i), 60, 50,225)
            strokeWeight(10*i)
            fill(200,100, 0,60)
            ellipse((x) + centerX , centerY, sin(theta) * 500 *(i/4), (sin(theta)) * 500 *(i/4));

        }
        theta += 0.5;
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}
