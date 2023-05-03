// Regina Wu
// Final Project CC Spring 23

let startButton;
let nextButton;
let isStartScene;
let isScene1;
let dialogue = [];
let line;

let first;
let second;

let mentalHealth;
let schoolHealth;
let happinessMeter;

function setup() {
  createCanvas(400, 400);
  background(200);
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
  text("The NYU life", width/2, height/4);
  noStroke();
  startButton = createButton("Start");
  startButton.position(width/2 - startButton.width/2, height/2);
  startButton.mousePressed(scene1);
}

function scene1() {
  isScene1 = true;
  background(200);
  startButton.remove();

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

  text("Mental Health: " + mentalHealth, 20, 20);
  text("School Health: " + schoolHealth, 20, 30);
  text("Happiness Meter: " + happinessMeter, 20, 40);
}

function nextLine() {
  background(200);
  line++;
  text(dialogue[line], 20, height - 100, width - 20, height);

  if (isScene1) {
    if (line == 3) {
      nextButton.remove();
      let choice1 = createButton("Sleep more");
      choice1.position(width/2 - choice1.width/2, height/2 - 20);
      choice1.mousePressed(chose1);
      
      let choice2 = createButton("Get up now");
      choice2.position(width/2 - choice1.width/2, height/2 + 20);
      choice2.mousePressed(chose2);
    }
  }

  text("Mental Health: " + mentalHealth, 20, 20);
  text("School Health: " + schoolHealth, 20, 30);
  text("Happiness Meter: " + happinessMeter, 20, 40);
}

function chose1() {
  schoolHealth -= 10;
  mentalHealth += 20;
  happinessMeter += 5;
  nextLine();
}

function chose2() {
  schoolHealth += 10;
  nextLine();
}


