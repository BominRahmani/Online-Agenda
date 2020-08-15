class stickynote{

    constructor(){
        this.xpos = 0;
        this.ypos = 0;
        this.w = 0;
        this.h = 0;
        this.xOff = 0;
        this.yOff = 0;
        this.drag = false; 
        this.hover = false;
    }

    show(){
        stroke(1);
        strokeWeight(3);
        if (this.drag) {
            fill(50);
          } else if (this.hover) {
            fill(100);
          } else {
            fill(175, 200);
          }
        rect(this.xpos,this.ypos,this.w,this.h);
        
    }
    hovering(){
        if (mouseX > this.xpos && mouseX < this.xpos + this.w && mouseY > this.ypos && mouseY < this.ypos + this.h) {
            this.hover = true;
          }
          else {
              this.hover = false;
          }
    }

    clicked(){
        if (mouseX > this.xpos && mouseX < this.xpos + this.w && mouseY > this.ypos && mouseY < this.ypos + this.h) {
      this.drag = true;
      this.xOff = this.xpos - mouseX;
      this.yOff = this.ypos - mouseY;
      console.log("clicked");
      return true;
    }
    return false;
}
    clickMoved(){
        if(this.drag == true){
            this.xpos = this.xOff + mouseX;
            this.ypos = this.yOff + mouseY;
        }
    }

    clickStopped(){
        this.drag = false;
    }

    
}
