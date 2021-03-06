/*
 * @name Load and Play Sound
 * @arialabel Red screen turns green when the user clicks on it and plays music
 * @description Load sound during preload(). Play a sound when canvas is clicked.
 * <br><br><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * a sound file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em>
 */
var song;

let canvas;
let bug1; // Declare objects
let bug2;
let bug3;
let bug4;
let bug5;

function preload() {
  song = loadSound("assets/Electric_Ten_Broke_in_Summer.mp3");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  //canvas = createCanvas(400, 400);

  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  // Create object
  bug1 = new Jitter();
  bug2 = new Jitter();
  bug3 = new Jitter();
  bug4 = new Jitter();
  bug5 = new Jitter();
}

function draw() {
  background(50, 80, 100);
  // noFill();

  strokeWeight(5);
  stroke(0,50,80);
  noFill();
  bug1.move();
  bug1.display();
  bug2.move();
  bug2.display();
  bug3.move();
  bug3.display();
  bug4.move();
  bug4.display();
  bug5.move();
  bug5.display();
}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
    noLoop()
  } else {
    song.play();
    loop();
  }
}

function touchStarted() {
    getAudioContext().resume();
  }