var eyeWidth = 50;
var eyeHeight = 40;
var pupilWidth = 22;
var pupilHeight = 25;
var toggle = false;
var audio;

function preload() {
  //singing audio
  audio = loadSound("audio/homeward_bound_solo.mp3");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke('black');
  background('pink');
  angleMode(DEGREES);
  fill("black");
  arc(200, 100, 200, 75, 180, 0);
  rectMode(CORNERS);
  rect(100, 100, 300, 340);
  rectMode(CENTER);
  triangle(100, 100, 30, 340, 100, 340);
  triangle(300, 100, 300, 340, 370, 340);
  //Face
  fill('#8D5524');
  ellipse(width/2, height/2, 175, 200);
  //Nose
  ellipse(width/2, height/2 + 10, 10, 10);
  if (toggle) {
      if (!audio.isPlaying()) {
        audio.play();  //sing
      }
      //Eyes closed
      fill("black");
      ellipse(170, 170, eyeWidth, eyeHeight/8);
      ellipse(230, 170, eyeWidth, eyeHeight/8);
      fill("pink");
      arc(200, 230, 50, 50, 0, 180);
  }
  else {
    audio.stop();  //stop singing
    //Eyes
    fill("white");
    ellipse(170, 170, eyeWidth, eyeHeight);
    ellipse(230, 170, eyeWidth, eyeHeight);
    
    //Pupils
    fill('black');
    ellipse(170, 170, pupilWidth, pupilHeight);
    ellipse(230, 170, pupilWidth, pupilHeight);
  }
  
  //Mouth
  stroke('black');
  noFill();
  arc(200, 230, 50, 50, 0, 180);
  
  //Text
  noStroke();
  fill('#3EB489');
  textSize(12);
  textFont('Lobster');
  text('🎵In the quiet misty morning when the moon has gone to bed,\n when the sparrows stop their singing and the sky is clear and red🎵', 20, 20);  //Directions for mouse press
  text("Click to see me close\n my eyes and sing.\n Click again to see me\n open them and stop singing.", 265, 350);
}

function mousePressed() {
  toggle = !toggle;
}