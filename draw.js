let noteList = [];
let note;

function setup(){
    createCanvas(500,500);
    //note = new stickynote(100,100,50,50);
    note = new stickynote();
    //background(0);
}

function draw(){
    background(0);
    note.clickMoved();
    note.show();
}

function mousePressed(){
    //check if sticky note has been selected
    for(let i = 0; i < noteList.length; ++i){
        if(noteList[i].clicked()){
            return;
        }
    }
    note = new stickynote();
    note.xpos = mouseX;
    note.ypos = mouseY;
    //note.clicked();
    noteList.push(note);
}

function mouseReleased(){
    if(note.drag == true){
        note.drag = false;
        return;
    }
    note.w = mouseX - note.xpos;
    note.h = mouseY - note.ypos;
    
    
}


