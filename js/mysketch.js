let x = 0;
let y = 0;
let theta = 0;
let inc = 0.01; // the amount to increment the offset
let offset = 0; // the amount offset from wave start
let amplitude;
let frequency;
let maxAngle;

function setup() {
    amplitude = windowHeight / 8;
    frequency = windowWidth / 8;
    maxAngle = (0.005) * TAU;
    frameRate(10)
    createCanvas(windowWidth, windowHeight);
    
}

function draw() {
    background(0);
    noStroke();
    let length = 20;

    while (theta < maxAngle + offset) {
        amplitude = sin(theta-offset)*(windowHeight/5)
        // amplitude = ((theta-offset)/maxAngle)* (windowHeight/2)
        
        //for sine
        for (i= length; i>0; i--){
        y = sin(theta)*(random(mouseY-(windowHeight/2)))+(random(mouseY-(windowHeight/2)))
       x = sin(theta) * (random(mouseX-(windowWidth/2)))+(random(mouseX-(windowWidth/2)));
        stroke(250-(250/length * i),60,60)
        strokeWeight(10)
        noFill()
        ellipse(x+windowWidth/2, y+windowHeight/2,500,500);
    
        }


       theta += 0.5;
       x=((theta - offset)/maxAngle)* windowWidth;
    }
    offset += inc;
    theta = offset;
}
