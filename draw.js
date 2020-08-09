var mouseIsDown=false;
var startX;
var startY;
let notes = [];

function setup(){
    createCanvas(1000,1000);
    background(0);
    notes = new NoteList();
}
function draw() {
 
}

function mousePressed(){
    mouseIsDown = true;
    startX  = mouseX;
    startY = mouseY;
    cursor('grab');
    notes.drag();

}
function mouseReleased(){
    mouseIsDown = false;
    notes.show();
    cursor('default');
}
class NoteList{
    constructor(ix,iy){
        this.ix = ix;
        this.iy = iy;
    }    
    //drag function
    drag(){
        this.ix = mouseX;
        this.iy = mouseY;
    }
    show(){
        stroke(255);
        strokeWeight(2);
        beginShape;
        rect(this.ix,this.iy,(mouseX-this.ix),(mouseY - this.iy));
        endShape;

    }
}
