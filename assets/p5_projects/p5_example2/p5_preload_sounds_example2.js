/*
 * @name Preload SoundFile
 * @arialabel On page load, a blue screen plays music. When the user clicks on it, the screen turns white and stops playing music 
 * @description Call loadSound() during preload() to ensure that the
 * sound is completely loaded before setup() is called. It's best to always
 * call loadSound() in preload(), otherwise sounds won't necessarily be loaded
 * by the time you want to play them in your sketch.
 *
 * <br><br><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * a sound file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em>
 */

let song;
var amp;

let canvas;
let bug1; // Declare objects
let bug2;
let bug3;
let bug4;
let bug5;

function preload() {
  song = loadSound('assets/Sat_Narayan.mp3');
}

function setup() {
  //canvas = createCanvas(displayWidth, displayHeight);
  canvas = createCanvas(400, 400);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  song.loop(); // song is ready to play during setup() because it was loaded during preload
  
  // Creating amplitude entry
  amp = new p5.Amplitude();
  
  // Create object
  bug1 = new Jitter();
  bug2 = new Jitter();
  bug3 = new Jitter();
  bug4 = new Jitter();
  bug5 = new Jitter();
}

function draw() {
  //background(50, 80, 100);
  noFill();
  strokeWeight(0.1);
  stroke(0, 50, 80);
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
  
   var level = amp.getLevel();
}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 100);
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

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    background(255);
    noLoop();
  } else {
    song.play();
    background(50, 80, 100);
    loop();
  }
}