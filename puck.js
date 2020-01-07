//class Hole{
function Puck(x,y){
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 24;
    this.dx = 0;
    this.dy = 0;
    var startingY = 300;
    
    this.drawPuck = function(){
        ctx.drawImage(PUCK, this.x, this.y, this.width, this.height);
    }
    
    this.updatePuck = function(){
        if(this.y <= startingY - 10){
            this.width -= .5
            this.height -= .5;
            startingY = this.y;
        }
        
        if(this.y >= startingY + 10){
            this.width += .5;
            this.height += .5;
            startingY = this.y ;
        }
    }
    
    this.movePuck = function(){
        this.x += this.dx;
        this.y += this.dy;
    }
    
    // Reset ball if life is lost or goes out of bounds
    this.resetPuck = function(){
        this.x = start.x;
        this.y = start.y;
        this.width = start.width;
        this.height = start.height;
        this.dx = 0;
        this.dy = 0;
        LIFE--;
        shots=1;
    }
}
