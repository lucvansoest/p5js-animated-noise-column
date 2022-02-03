let t = 0; // Time (passed frames actualy)
let speed = 0.03; // Bobbling speed coefficient
let bobbleRate = 5; // More rate -> mor sharp, Less rate - more bobble.

let color1;
let color2;

let numberOfCircles = 100;
let circleVariation = 50;
let maxSize;

function setup() {

  createCanvas(windowWidth, windowHeight);

  background(10);
  
  drawShape();
}

function draw() {
  drawShape();
}

function drawShape()
{
  background(10);

  if (width > height) 
  {
    maxSize = width;    
  }
  else
  {
    maxSize = height;
  }

  let startPoint = 100;
  let endPoint = startPoint + circleVariation;

  let circleDistance = height / numberOfCircles;
  let bottomMargin = endPoint / circleDistance; // draw some extra circles on te bottom

  translate(width / 2, 0);

  for (let circle = 0; circle < numberOfCircles + bottomMargin; circle++) {

    translate(0, circleDistance);

    let phase = t * speed;

    fill(0);
    stroke(255);
    strokeWeight(1);
    

    beginShape();

    for (let i = 0; i <= TWO_PI; i += PI/180) {

      // Playing with bobble rate
      let xoff = map(cos(i), -1, 1, 0, bobbleRate);
      let yoff = map(sin(i), -1, 1, 0, bobbleRate);
      let n = noise(xoff + phase, yoff + phase);

      let r = map(n, 0, 1, startPoint, endPoint);

      let x = r  * cos(i); 
      let y = r  * sin(i);
      
      vertex(x, y);
    }
    
    endShape();

    t++;

  }

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  drawShape();

}
