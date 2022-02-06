//test file writing

let input;
let sendButt;
let arr = ['y', 'w','e','r'];
let inputStr;
let file;

function preload(){
  file = loadStrings('words.txt');
}

function setup(){
  createCanvas(500,500);
  background(100);
  input = createInput();
  input.position(100,100);

  sendButt = createButton(" BUTTON ");
  sendButt.position(50,100);

  sendButt.mousePressed(save1);

}

// function draw(){
//
// }

function save1(){
  inputStr = input.value().toLowerCase();

  file.write(arr);
}
