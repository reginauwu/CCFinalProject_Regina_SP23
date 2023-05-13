// Regina Wu
// Final Project CC Spring 23
// gaegu font https://fonts.google.com/specimen/Gaegu?query=gaegu 

let startButton;
let nextButton;
let choice1;
let choice2;

let choice2a;
let choice2b;

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
let isScene2 = false;
let sceneButton; // button
let isScene2a = false;
let isScene2b = false;

function preload() {
  myFont = loadFont('Gaegu-Regular.ttf');
}

function setup() {
  textFont(myFont);
  createCanvas(windowWidth, windowHeight);
  background(0);
  startScene();
  isStartScene = true;

  mentalHealth = 60;
  schoolHealth = 70;
  socialHealth = 80;
}

function draw() {
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

  fill(100, 50);
  rect(0, height/2 + 100, width, height/2); // dialogue box

  textSize(80);

  fill(255);
  textAlign(LEFT);
  dialogue[0] = "*didididi...didididi...*";
  dialogue[1] = "*Yawns*";
  dialogue[2] = "'Man.. I can't believe it's Monday again.'";
  dialogue[3] = "'It's 8 right now and my class starts at 10...Should I continue sleeping?'";

  nextButton = createButton(">");
  nextButton.style('color', color(255));
  nextButton.style('font-size','50px');
  nextButton.style('background-color', color(50));
  nextButton.position(width - 100, height - 100);
  nextButton.mousePressed(nextLine);

  line = 0;
  text(dialogue[line], 20, height - 250, width - 20, height);

  healthSetup();
}

function scene1a() {
  isScene1 = false;
  isScene1a = true;
  choice1.hide();
  choice2.hide();

  background(0);
  dialogue.length = 0;

  fill(100, 50);
  rect(0, height/2 + 100, width, height/2); // dialogue box

  textSize(80);

  fill(255);
  textAlign(LEFT);
  dialogue[0] = " '...!?!!' ";
  dialogue[1] = "'Oh shoot- I it's 1 PM right now!'";
  dialogue[2] = "'Bruh it's gg.'";
  dialogue[3] = "You end up being too lazy to attend those classes for the rest of the semester and skipped them.";

  nextButton = createButton(">");
  nextButton.style('color', color(255));
  nextButton.style('font-size','50px');
  nextButton.style('background-color', color(50));
  nextButton.position(width - 100, height - 100);
  nextButton.mousePressed(nextLine);

  line = 0;
  text(dialogue[line], 20, height - 250, width - 20, height);

  healthSetup();
}

function scene1b() {
  isScene1 = false;
  isScene1b = true;
  choice1.hide();
  choice2.hide();

  background(0);
  dialogue.length = 0;

  fill(100, 50);
  rect(0, height/2 + 100, width, height/2); // dialogue box

  textSize(80);

  fill(255);
  textAlign(LEFT);
  dialogue[0] = "You quickly got up, finished your breakfast, and left.";
  dialogue[1] = "By the time you arrived, you were 15 minutes early.";
  dialogue[2] = "Seats besides you quickly fill up as the lecture begins.";
  dialogue[3] = "You end up learning a lot from the lecture and found it super enjoyable.";
  dialogue[4] = "However, you end up feeling tired the rest of the day.";
  dialogue[5] = "Since you really enjoyed the class, you decided to wake up early for the rest of the semester to learn more!";

  nextButton = createButton(">");
  nextButton.style('color', color(255));
  nextButton.style('font-size','50px');
  nextButton.style('background-color', color(50));
  nextButton.position(width - 100, height - 100);
  nextButton.mousePressed(nextLine);

  line = 0;
  text(dialogue[line], 20, height - 250, width - 20, height);

  healthSetup();
}

function scene2() {
  isScene1a = false;
  isScene1b = false;
  isScene2 = true;
  sceneButton.hide();
  background(0);

  dialogue.length = 0;

  fill(100, 50);
  rect(0, height/2 + 100, width, height/2); // dialogue box

  textSize(80);

  fill(255);
  textAlign(LEFT);
  dialogue[0] = "Friend: 'Hey you're coming to the party tonight right?'";
  dialogue[1] = "'Of course I am!'";
  dialogue[2] = "Friend:'You better not be dipping again using some homework excuse'";
  dialogue[3] = "The call ends and you think to yourself,";
  dialogue[4] = "'What homework excuse? I got nothing due!";
  dialogue[5] = "You get a email notification and you check it:";
  dialogue[6] = "'REMINDER: Assignment 5 due tonight at 11:59 PM'";
  dialogue[7] = "'...'";
  dialogue[8] = "You already promsied your friend you would be at the party but you find out your assignment is due tonight. What do you do?";

  nextButton = createButton(">");
  nextButton.style('color', color(255));
  nextButton.style('font-size','50px');
  nextButton.style('background-color', color(50));
  nextButton.position(width - 100, height - 100);
  nextButton.mousePressed(nextLine);

  line = 0;
  text(dialogue[line], 20, height - 250, width - 20, height);

  healthSetup();
}

function scene2a() {
  isScene2 = false;
  isScene2a = true;
  choice2a.hide();
  choice2b.hide();

  background(0);
  dialogue.length = 0;

  fill(100, 50);
  rect(0, height/2 + 100, width, height/2); // dialogue box

  textSize(80);

  fill(255);
  textAlign(LEFT);
  dialogue[0] = " 'Screw the assignment. Let's go party!' ";
  dialogue[1] = "You end up having a great time with your friends and at a lot of good food.";
  dialogue[2] = "The homework was lingering in the back of your mind but you paid no mind since you believe it won't affect your grade that much anyways";
  dialogue[3] = "Little did you know that assignment ended up being worth 20% of your grade."

  nextButton = createButton(">");
  nextButton.style('color', color(255));
  nextButton.style('font-size','50px');
  nextButton.style('background-color', color(50));
  nextButton.position(width - 100, height - 100);
  nextButton.mousePressed(nextLine);

  line = 0;
  text(dialogue[line], 20, height - 250, width - 20, height);

  healthSetup();
}

function scene2b() {
  isScene2 = false;
  isScene2b = true;
  choice2a.hide();
  choice2b.hide();

  background(0);
  dialogue.length = 0;

  fill(100, 50);
  rect(0, height/2 + 100, width, height/2); // dialogue box

  textSize(80);

  fill(255);
  textAlign(LEFT);
  dialogue[0] = "The assignemnt comes first. Party can always come later.";
  dialogue[1] = "You quickly screenshot an image of the email and sent it to your friend hoping they would understand.";
  dialogue[2] = "'Sigh...welp let's try to get this done quickly. Maybe I'll be able to make it on time'";
  dialogue[3] = "Luckily, the assignment was actually super easy and you were able to finish it before the party started.";
  dialogue[4] = "You dialed your friend:";
  dialogue[5] = "Friend: 'You suck-'";
  dialogue[6] = "'YOOO IT'S CRAZY I FINISHED MY ASSIGNEMNT BE THERE IN 30 MINS!!' ";
  dialogue[7] = "Friend: '???? OKA WASSGUD HURRY AND COME THE PARTY JUST STARTED' ";
  dialogue[8] = "You were able to finish your assignment and have a great time with your friends at the party!";


  nextButton = createButton(">");
  nextButton.style('color', color(255));
  nextButton.style('font-size','50px');
  nextButton.style('background-color', color(50));
  nextButton.position(width - 100, height - 100);
  nextButton.mousePressed(nextLine);

  line = 0;
  text(dialogue[line], 20, height - 250, width - 20, height);

  healthSetup();
}

function scene3() {
  sceneButton.hide();
  background(0);

  textSize(200);
  fill(255);
  textAlign(CENTER);

  text("GRADUATION", width/2, height/2 - 300);

  textSize(100);
  textAlign(CENTER);
  text("Mental Health: " + mentalHealth,  width/2, height/2 - 100);
  text("School Health: " + schoolHealth,  width/2, height/2);
  text("Social Health: " + socialHealth,  width/2, height/2 + 100);

  textSize(130);
  text("TY FOR THE GREAT SEMESTER!", width/2, height/2 + 300);

  textSize(50);
  text("ps: not based on a true story", width/2, height/2 + 400);
}

function nextLine() {
  background(0);

  fill(100, 50);
  rect(0, height/2 + 100, width, height/2); // dialogue box

  fill(255);
  line++;
  textSize(80);
  text(dialogue[line], 20, height - 250, width - 20, height);

  healthSetup();

  if (isScene1) {
    if (line == 3) {
      nextButton.hide();
      choice1 = createButton("Sleep more");
      choice1.style('color', color(255));
      choice1.style('font-size','50px');
      choice1.style('background-color', color(50));
      choice1.position(width/2 - 150, height/2 - 100);
      choice1.mousePressed(scene1a);
      
      choice2 = createButton("Get up now");
      choice2.style('color', color(255));
      choice2.style('font-size','50px');
      choice2.style('background-color', color(50));
      choice2.position(width/2 - 150, height/2);
      choice2.mousePressed(scene1b);
    }
  }

  if (isScene1a) {
    if (line == 2) {
      schoolHealth -= 10;
      mentalHealth += 20;
    }
    if (line == 3) {
      nextButton.hide();
      sceneButton = createButton("Few weeks later");
      sceneButton.style('color', color(255));
      sceneButton.style('font-size','50px');
      sceneButton.style('background-color', color(50));
      sceneButton.position(width/2 - 200, height/2 - 100);
      sceneButton.mousePressed(scene2);

    }
  }

  if (isScene1b) {
    if (line == 4) {
      mentalHealth -= 10;
      schoolHealth += 20;
      socialHealth += 5;
    }
    if (line == 5) {
      nextButton.hide();
      sceneButton = createButton("Few weeks later");
      sceneButton.style('color', color(255));
      sceneButton.style('font-size','50px');
      sceneButton.style('background-color', color(50));
      sceneButton.position(width/2 - 200, height/2 - 100);
      sceneButton.mousePressed(scene2);
    }
  }

  if (isScene2) {
    if (line == 8) {
      nextButton.hide();
      choice2a = createButton("Go party");
      choice2a.style('color', color(255));
      choice2a.style('font-size','50px');
      choice2a.style('background-color', color(50));
      choice2a.position(width/2 - 150, height/2 - 100);
      choice2a.mousePressed(scene2a);
      
      choice2b = createButton("Do assginment");
      choice2b.style('color', color(255));
      choice2b.style('font-size','50px');
      choice2b.style('background-color', color(50));
      choice2b.position(width/2 - 150, height/2);
      choice2b.mousePressed(scene2b);
    }
  }

  if (isScene2a) {
    if (line == 2) {
      socialHealth += 20;
      mentalHealth += 5;
      schoolHealth -= 40;
    }
    if (line == 3) {
      nextButton.hide();
      sceneButton = createButton("Graduation");
      sceneButton.style('color', color(255));
      sceneButton.style('font-size','50px');
      sceneButton.style('background-color', color(50));
      sceneButton.position(width/2 - 200, height/2 - 100);
      sceneButton.mousePressed(scene3);
    }
  }

  if (isScene2b) {
    if (line == 7) {
      socialHealth += 20;
      mentalHealth += 10;
      schoolHealth += 20;
    }
    if (line == 8) {
      nextButton.hide();
      sceneButton = createButton("Graduation");
      sceneButton.style('color', color(255));
      sceneButton.style('font-size','50px');
      sceneButton.style('background-color', color(50));
      sceneButton.position(width/2 - 200, height/2 - 100);
      sceneButton.mousePressed(scene3);
    } 
  }
}


function healthSetup() {
  fill(100);
  rect(280, 20, 100, 20); // 100% bar
  rect(280, 50, 100, 20); // 100% bar
  rect(280, 80, 100, 20); // 100% bar


  // for coloring bar
  if (mentalHealth > 90) { // dark green
    fill("#20695d");
  } else if (mentalHealth > 80) { // green
    fill("#80b214");
  } else if (mentalHealth > 70) { // orange
    fill("#ffcc2a");
  } else if (mentalHealth > 60) { // yellow
    fill("#f58633");
  } else { // red
    fill("#ff3a2f");
  }
  rect(280, 20, mHbar * mentalHealth, 20); // the bar that decreases/increases

  if (schoolHealth > 90) {
    fill("#20695d");
  } else if (schoolHealth > 80) {
    fill("#80b214");
  } else if (schoolHealth > 70) {
    fill("#ffcc2a");
  } else if (schoolHealth > 60) {
    fill("#f58633");
  } else {
    fill("#ff3a2f");
  }

  rect(280, 50, scHbar * schoolHealth, 20); 

  if (socialHealth > 90) {
    fill("#20695d");
  } else if (socialHealth > 80) {
    fill("#80b214");
  } else if (socialHealth > 70) {
    fill("#ffcc2a");
  } else if (socialHealth > 60) {
    fill("#f58633");
  } else {
    fill("#ff3a2f");
  }

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




