let speaker;

function setup() {
  createCanvas(800, 800);

  speaker = new p5.Speech();
  speaker.speak("hello world");
}

function draw() {

}

function mousePressed() {
  speaker.speak("Lorem ipsum");
}
