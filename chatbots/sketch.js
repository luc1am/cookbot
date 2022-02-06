//chatbots for arts sake
// ideas: make a weird looking person witha chef hat

let data;
let input, sendButt;
let answer;
let capture;

//load json file into sketches

function preload(){
  data = loadJSON("data.json");
}

function setup() {
  createCanvas(500,500);
  //console.log(data);
  let title = createP("cookbot");
  title.style('font-size', '20px');
  title.position(15,0);

  input  = createInput();
  input.position(50,50);
  input.size(300,50);
  sendButt = createButton("send");
  sendButt.position(370,85);
  sendButt.style('background-color', color(51, 22, 117,100))

  sendButt.mousePressed(chitchat);

  capture = createCapture(VIDEO);
  capture.hide();

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

function draw() {
  let width = 100;

  background(200,180,190);

  text(answer, 100,150, 100);
  image(capture, 370,5,width, width*capture.height/capture.width);
}
