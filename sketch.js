var box
function setup() 
{
  createCanvas(400, 400);
  box = new Box(20,26,50,38,1,4);
}

function draw() 
{
  background(220);
box.show();
box.move();
}

