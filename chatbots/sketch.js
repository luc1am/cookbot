//chatbots for arts sake
// ideas: make a weird looking person witha chef hat

let data;
let input, sendButt;
let answer;
let capture;
let loopNum = 0;

let palette = {
  green: '#27320b',
  brown: '#9d4006',
  white: '#fefae0',
  yellow: '#f5d400'
}


class Chef {
  constructor(x,y,sizex,sizey, emotion, filename){
    this.x = x;
    this.y = y;
    this.sizex = sizex;
    this.sizey = sizey;
    this.emotion = emotion; //string?
    this.filename = filename;
    this.img = loadImage(filename);
  }
  // pre(){    img = loadImage(this.filename);  }
  display(){
    image(this.img, this.x, this.y)
  }
}

//press enter or press button

let pics = [
  "media/cookbotBase1.png",
  "media/cookbotInfo1.png",
"media/cookbotBaking1.png",
"media/cookbotAdvice1.png",
"media/cookbotInsult1.png",
"media/cookbotGreeting1.png",
"media/cookbotFood1.png",
"media/cookbotCatchall1.png"
];
let mood = [
  'base',
  'info',
  'bake',
  'advice',
    'insult',
  'greeting',
  'food',
  'catchall']
 let chefs = [];

function preload(){
  data = loadJSON("data.json");
  for (let i = 0; i<pics.length; i++){
    chefs.push(new Chef(0,100,100,100,
      mood[i],pics[i]));
  }
  // for(let i = 0; i<chefs.length; i++){
  //   chefs[i].pre();
  // }

}

function setup() {
  createCanvas(500,380);
  //console.log(data);


  let title = createP("cookbot");
  title.style('font-size', '20px')
  title.style('color', color(palette.green));
  title.position(8,-18);

  input  = createInput();
  input.position(50,50);
  input.size(300,50);
  input.style('background-color', color(palette.yellow))
  sendButt = createButton("send");
  sendButt.position(370,85);
  sendButt.style('background-color', color(palette.green))
  sendButt.style('color', color(palette.white))

  sendButt.mousePressed(chitchat);

  // capture = createCapture(VIDEO);
  // capture.hide();

}

function keyTyped(){
  if (keyCode == ENTER){
    chitchat();
  }
}


function chitchat(){
  let inputStr = input.value().toLowerCase();
  console.log(inputStr);
  //why did she do loop1: for...?
  loop1: for(let i = 0; i < data.brain.length; i++ ){
    loop2: for (let j = 0; j < data.brain[i].triggers.length; j++){
      if(inputStr.indexOf(data.brain[i].triggers[j])!== -1){
        //we have a match!
        // print("OK");
        loopNum = i+1;
        answer = random(data.brain[i].responses);
        //print(answer);
        break loop1;
      }else  {
        answer = random(data.catchall);
      }
    }
  }

  //nested forloop
}

//brown as background
// white border
//green and yellow are highlights
function draw() {
  background(palette.white);
  fill(palette.brown);
  rect(25,25,450,330);
  noStroke();
  fill(palette.white);
  rect(250,150,200,150,10);
  triangle(250,200,250,220,240,210);
  chefs[loopNum].display();
  fill(palette.green);
  text(answer, 260,160, 150);

  //image(capture, 370,5,width, width*capture.height/capture.width);
}
