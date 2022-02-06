let data;
let input;
let butt;
let inputStr;


function preload(){
  data = loadStrings('dataFile.txt');

}

function setup(){
  createCanvas(500,500);
  input = createInput()
  input.position(100,100);
  butt = createButton('button');
  butt.position(100,200);
  butt.mousePressed(chitchat);
}

function draw(){
  background(200);

}

function chitchat(){
  inputStr = input.value().toLowerCase();
  print(inputStr)
  data.push(inputStr);
  saveStrings(data, 'dataFile.txt')

}
