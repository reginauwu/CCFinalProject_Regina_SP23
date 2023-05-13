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

let mHbar = 1;
let scHbar = 1;
let soHbar = 1;

let myFont;
let isScene1a = false;
let isScene1b = false;

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
  socialHealth = 70;
}

function draw() {
  // if (isScene2a) {
  //   scene2a();
  // }
  // if (isScene2b) {
  //   scene2b();
  // }
}

function startScene() {
  fill(255);
  textAlign(CENTER);
  textSize(200);
  textFont(myFont);
  text("The NYU life", width/2, height/2);
  noStroke();
  startButton = createButton("Start");
  startButton.style('color', color(255));
  startButton.style('font-size','25px');
  startButton.style('background-color', color(50));
  startButton.position(width/2 - startButton.width/2, height/2 + 100);
  startButton.mousePressed(scene1);

}

function scene1() {
  isScene1 = true;
  background(0);
  startButton.remove();

  textSize(80);

  fill(255);
  textAlign(LEFT);
  dialogue[0] = "*didididi...didididi...*";
  dialogue[1] = "*Yawns*";
  dialogue[2] = "'Man.. I can't believe it's Monday again'";
  dialogue[3] = "'It's 8 right now and my class starts at 10...Should I continue sleeping?'";

  nextButton = createButton(">");
  nextButton.style('color', color(255));
  nextButton.style('font-size','50px');
  nextButton.style('background-color', color(50));
  nextButton.position(width - 100, height - 100);
  nextButton.mousePressed(nextLine);

  line = 0;
  text(dialogue[line], 20, height - 200, width - 20, height);

  healthSetup();
}

function scene1a() {
  isScene1 = false;
  choice1.hide();
  choice2.hide();
  schoolHealth -= 10;
  mentalHealth += 20;
  socialHealth += 5;

  background(0);
  dialogue.length = 0;

  textSize(80);

  fill(255);
  textAlign(LEFT);
  dialogue[0] = " '...!?!!' ";
  dialogue[1] = "'Oh shoot- I it's 1 PM right now!'";
  dialogue[2] = "'Bruh I just missed not one but TWO classes'";
  dialogue[3] = "You end up being too lazy to attend those classes for the rest of the semester and decided to skip them.";

  nextButton = createButton(">");
  nextButton.style('color', color(255));
  nextButton.style('font-size','50px');
  nextButton.style('background-color', color(50));
  nextButton.position(width - 100, height - 100);
  nextButton.mousePressed(nextLine);

  line = 0;
  text(dialogue[line], 20, height - 200, width - 20, height);

  healthSetup();
}

function scene1b() {
  isScene1 = false;
  choice1.hide();
  choice2.hide();
  schoolHealth += 10;

  background(0);
}

function nextLine() {
  background(0);
  line++;
  textSize(80);
  text(dialogue[line], 20, height - 200, width - 20, height);

  // textSize(14);
  // text("Mental Health: " + mentalHealth, 20, 20);
  // text("School Health: " + schoolHealth, 20, 35);
  // text("Social Health: " + socialHealth, 20, 50);

  healthSetup();

  if (isScene1) {
    if (line == 3) {
      nextButton.hide();
      choice1 = createButton("Sleep more");
      choice1.style('color', color(255));
      choice1.style('font-size','50px');
      choice1.style('background-color', color(50));
      choice1.position(width/2, height/2 - 50);
      choice1.mousePressed(scene1a);
      
      choice2 = createButton("Get up now");
      choice2.style('color', color(255));
      choice2.style('font-size','50px');
      choice2.style('background-color', color(50));
      choice2.position(width/2, height/2 + 50);
      choice2.mousePressed(scene1b);
    }
    // if (line > 3) {
    //   choice1.hide();
    //   choice2.hide();
    //   if (isScene2a) {
    //     scene2a();
    //   }
    //   if (isScene2b) {
    //     scene2b();
    //   }
    // }
  }


}


// function chose1() {
//   //fill("#D1FFBD"); green
//   schoolHealth -= 10;
//   //fill("#FAA0A0"); red
//   mentalHealth += 20;
//   socialHealth += 5;
//   nextLine();

//   isScene2a = true;
// }

// function chose2() {
//   schoolHealth += 10;
//   nextLine();

//   isScene2b = true;
// }

function healthSetup() {
  fill(100);
  rect(280, 20, 100, 20); // 100% bar
  rect(280, 50, 100, 20); // 100% bar
  rect(280, 80, 100, 20); // 100% bar


  fill(200);
  rect(280, 20, mHbar * mentalHealth, 20); // the bar that decreases/increases
  rect(280, 50, scHbar * schoolHealth, 20); 
  rect(280, 80, soHbar * socialHealth, 20); 


  fill(255);
  textSize(20);
  text(mentalHealth, 320, 35);
  text(schoolHealth, 320, 65);
  text(socialHealth, 320, 95);

  textSize(40);
  fill(255);
  text("Mental Health: ", 20, 40);
  text("School Health: ", 20, 70);
  text("Social Health: ", 20, 100);
}



