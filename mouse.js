//class Hole{
function Mouse(){
    this.xPressed = 0;
    this.yPressed = 0;
    this.xReleased = 0;
    this.yReleased = 0;
    
    function drawAimer(position){
        var powerx = (dragStart.x - position.x)/5;
        var powery = (dragStart.y - position.y)/5;
        
        ctx.beginPath();
        ctx.moveTo(ball.x +16,ball.y+ 2);
        ctx.lineTo(ball.x +16,ball.y+ 22);
        ctx.lineTo(ball.x +16 + powerx, ball.y+ 2 + powery);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(ball.x+6, ball.y+11);
        ctx.lineTo(ball.x+26, ball.y+11);
        ctx.lineTo(ball.x +16+ powerx, ball.y+2 + powery);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fill();
    }

    function getCanvasCoordinates(event){
        var x = event.clientX - cvs.getBoundingClientRect().left;
        var y = event.clientY - cvs.getBoundingClientRect().top;

        return {x: x, y: y};
    }

    function takeSnapshot() {
        snapshot = ctx.getImageData(0, 0, cvs.width, cvs.height);
    }

    function restoreSnapshot() {
        ctx.putImageData(snapshot, 0, 0);
    }


    // When mouse 1 is clicked
    document.addEventListener("mousedown", function(event){
        mouse.xPressed = event.clientX;
        mouse.yPressed = event.clientY;
        if(shots == 1){
            dragging=true;
            dragStart = getCanvasCoordinates(event);
            takeSnapshot();
        }
    });
    
    document.addEventListener("mousemove",function(event){ 
        var position;
        if(shots == 1){
            if(dragging == true){
                restoreSnapshot();
                position = getCanvasCoordinates(event);
                drawAimer(position);
            }  
        }
    });

    // When mouse 1 is released
    document.addEventListener("mouseup", function(event){
        mouse.xReleased = event.clientX;
        mouse.yReleased = event.clientY;
        dragging = false;
        if(shots == 1){
            restoreSnapshot();
            var position = getCanvasCoordinates(event);        
            mouseDistance();
        }
    });

    // Get distance of drag and change to speed of ball
    function mouseDistance(){
        let a = (mouse.xPressed - mouse.xReleased)/30;
        let b = (mouse.yPressed - mouse.yReleased)/30;
        let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
        
        // IF TRUE REDUCE SIZE
        while((!(a > 0) && a < -20 ||( !(b > 0) && b < -20) ) ||  
              (!(a < 0) && a > 20 ||( !(b > 0) && b < -20) ) ||
              (!(a > 0) && a < -20 ||( !(b < 0) && b > 20) ) ||
              (!(a < 0) && a > 20 ||( !(b > 0) && b > 20 ) ) ){      
            b=b/1.1;
            a=a/1.1;
        }

        if(shots ==1){
            ball.dx = a;
            ball.dy = b;
            shots--;
        }
    }
}
