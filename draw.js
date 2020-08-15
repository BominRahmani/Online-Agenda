let noteList = [];
let note;

function setup(){
    createCanvas(500,500);
    //note = new stickynote(100,100,50,50);
    note = new stickynote();
    background(0);
}

function draw(){
    //background(0);
    note.show();
}

function mousePressed(){
    //check if sticky note has been selected
    note = new stickynote();
    for(let i = 0; i < noteList.length; ++i){
        noteList[i].clicked();
    }
    note.xpos = mouseX;
    note.ypos = mouseY;
    //note.clicked();
    noteList.push(note);
}

function mouseReleased(){
    note.w = mouseX - note.xpos;
    note.h = mouseY - note.ypos;
    //note.show();
}


