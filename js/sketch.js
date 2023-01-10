let x = 0;
let y = 0;
let theta = 0;
let inc = 0.1; // the amount to increment the offset
let offset = 0; // the amount offset from wave start
let amplitude;
let frequency;
let maxAngle;

function setup() {
    amplitude = windowHeight / 8;
    frequency = windowWidth / 8;
    maxAngle = (windowWidth / frequency) * TAU;
    createCanvas(windowWidth, windowHeight);
    
}

function draw() {
    background(0);
    strokeWeight(5);
    fill(255,0,0);

    while (theta < maxAngle + offset) {
        //sin wave
        y = sin(theta-0.4) * amplitude;
        fill(255,0,50)
        ellipse(x + frequency/2, y + height/0.5, 20,50);
        x = ((theta-offset) / maxAngle) * windowWidth;
        

        y = cos(theta) * amplitude;
        fill(255,0,0)
        ellipse(x + frequency / 2, y + height * 0.5, 20,50);
        theta += 0.1;
        x = ((theta-offset) / maxAngle) * windowWidth;

    }
    offset += inc;
    theta = offset;
}
