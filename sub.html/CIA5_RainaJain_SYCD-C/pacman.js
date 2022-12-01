var radius = 40;
var x = 110;
var speed = 7;
var direction = 1;
let slider;
let radio;
//main//

function setup() {
createCanvas(540, 120);
  colorMode()
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
   ellipseMode(RADIUS);
   frameRate(50);//thirty frames 2 secs//
  
  //radio//
  radio = createRadio();
  radio.style('width', '30px');
  radio.selected('2');
  textAlign(CENTER);
  fill(255,0,0);
}
function draw() {
  let val = slider.value();
  background(val);
  fill(254 ,200,225)

  
  
  x += speed * direction;
  if ((x > width-radius) || (x < radius)) {
    direction = -direction; // Flip direction
}
  if (direction == 1) {
    arc(x, 60, radius, radius, 0.52,5.76); // Face right
}
  else {
    arc(x, 60, radius, radius, 3.67, 8.9); // Face left
  }
   
   for(let i=0;i<9;i++){
     arc(x,60,radius,radius,x,9.0);  
}
}