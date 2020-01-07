function Hole(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    
    this.drawHole = function(){
        ctx.fillStyle = "#d14141"; ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.strokeStyle = "#f25757";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
    
    this.puckHoleCollision = function(){
        if(ball.x > this.x && 
           ball.y > this.y &&
           ball.x + ball.width < this.x + this.width &&
           ball.y + ball.height < this.y + this.height){
            console.log("LEVELUP")
            levelUp();
        }
    }
}