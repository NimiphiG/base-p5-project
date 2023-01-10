function setup() {
    createCanvas(windowWidth, windowHeight);
    
    let x = 0;
    let y = 0;
    let theta = 0;
    let amplitude = windowHeight/8;
    let frequency = windowWidth/8;
    let maxAngle = (windowWidth/frequency) * TAU
    while (theta < maxAngle) {
        y = sin(theta) * amplitude;
        ellipse(x, y + height*0.5,16);
        ellipse(x + frequency/2, y + 50 + height*0.5,20);
        theta += 0.1;
        x = (theta / maxAngle)*windowWidth;

    }
}
function draw() {
}
