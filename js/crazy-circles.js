let x = 0;
let y = 0;
let theta = 0;
let inc = 0.01; // the amount to increment the offset
let offset = 0; // the amount offset from wave start
let amplitude;
let frequency;
let maxAngle;
let a = 0;
let clickX = 500 ;
let clickY = 500;


function setup() {
   
    amplitude = windowHeight *8 ;
    frequency = windowWidth *8 ;
    maxAngle = (0.05) * TAU;
    frameRate(50)
    createCanvas(windowWidth, windowHeight);

 window.addEventListener('mousedown',randomClick)
    function randomClick(){
        theta = 0
        x=0
        a= random(-1,1)
        console.log(a)
        clickX = mouseX
        clickY = mouseY
    }
}
function draw() {
    background(0);
    noStroke();
    let length = 5;

    while (theta < maxAngle + offset) {
            amplitude = sin(theta-offset)
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


        // //for click
        for (let i = length; i > 0; i--) {
            y = (random( 200)*a) + ( random(200)*a)
            x = (random( 200)*a) + ( random(200)*a);
            stroke(255 - (250 / length * i ), 60, 60)
            strokeWeight(10*i)
            noFill()
           ellipse(x + clickX, y + clickY, sin(theta)*400*i, sin(theta)*400*i);

        }

        theta += 0.5;
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}
