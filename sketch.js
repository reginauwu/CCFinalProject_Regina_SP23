// Regina Wu
// Final Project CC Spring 23
// gaegu font https://fonts.google.com/specimen/Gaegu?query=gaegu 

let startButton;
let nextButton;
let choice1;
let choice2;

let isStartScene;
let isScene1;
let dialogue = [];
let line;

let first;
let second;

let mentalHealth;
let schoolHealth;
let socialHealth;

let myFont;

function preload() {
  myFont = loadFont('Gaegu-Regular.ttf');
}

function setup() {
  textFont(myFont);
  createCanvas(windowWidth, windowHeight);
  background(0);
  startScene();
  isStartScene = true;

  mentalHealth = 80;
  schoolHealth = 90;
  happinessMeter = 70;
}

function draw() {
}

function startScene() {
  fill(255);
  textAlign(CENTER);
  textSize(150);
  textFont(myFont);
  text("The NYU life", width/2, height/4);
  noStroke();
  startButton = createButton("Start");
  startButton.style('font-size','50px');
  startButton.position(width/2 - startButton.width/2, height/2);
  startButton.mousePressed(scene1);

}

function scene1() {
  isScene1 = true;
  background(0);
  startButton.remove();

  textSize(20);

  fill(255);
  textAlign(LEFT);
  dialogue[0] = "*didididi...didididi...*";
  dialogue[1] = "*Yawns*";
  dialogue[2] = "Man.. I can't believe it's Monday again";
  dialogue[3] = "It's 8 right now and my class starts at 10...Should I continue sleeping?";

  nextButton = createButton(">");
  nextButton.position(width - 50, height - 50);
  nextButton.mousePressed(nextLine);

  line = 0;
  text(dialogue[line], 20, height - 100, width - 20, height);

  textSize(14);
  text("Mental Health: " + mentalHealth, 20, 20);
  text("School Health: " + schoolHealth, 20, 35);
  text("Happiness Meter: " + happinessMeter, 20, 50);
}

function nextLine() {
  background(0);
  line++;
  textSize(20);
  text(dialogue[line], 20, height - 100, width - 20, height);

  textSize(14);
  text("Mental Health: " + mentalHealth, 20, 20);
  text("School Health: " + schoolHealth, 20, 35);
  text("Happiness Meter: " + happinessMeter, 20, 50);

  if (isScene1) {
    if (line == 3) {
      nextButton.hide();
      choice1 = createButton("Sleep more");
      choice1.position(width/2 - choice1.width/2, height/2 - 20);
      choice1.mousePressed(chose1);
      
      choice2 = createButton("Get up now");
      choice2.position(width/2 - choice1.width/2, height/2 + 20);
      choice2.mousePressed(chose2);
    }
    if (line > 3) {
      choice1.hide();
      choice2.hide();
    }
  }

}


function chose1() {
  //fill("#D1FFBD"); green
  schoolHealth -= 10;
  //fill("#FAA0A0"); red
  mentalHealth += 20;
  happinessMeter += 5;
  nextLine();
}

function chose2() {
  schoolHealth += 10;
  nextLine();
}



