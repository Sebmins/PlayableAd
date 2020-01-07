function ballBotCollision(array){
    for(let i = 0; i < array.length; i++){
        let w = array[i];
        
       if(ball.y + ball.height > w.y && ball.dy > 0){
            ball.dy = - ball.dy;
       }
    }
}

function ballTopCollision(array){
    for(let i = 0; i < array.length; i++){
        let w = array[i];
        
       if(ball.y < w.y + w.height && ball.dy < 0){
            ball.dy = - ball.dy;
       }
    }
}

function rightWallCollision(array){
    for(let i = 0; i < array.length; i++){
        let w = array[i];
        //ball.x + ball.width >
       if(ball.x + ball.width > w.x && ball.y +height > w.y && ball.y < w.y + w.height && ball.dx > 0){
            ball.dx = -ball.dx;
        }
    }
}

function leftWallCollision(array){
    for(let i = 0; i < array.length; i++){
        let w = array[i];
        
        if(ball.x < w.x + w.width && ball.y +height > w.y && ball.y < w.y + w.height && ball.dx < 0){
            ball.dx = -ball.dx;
        }
    }
}

function xWallCollision(array){
    for(let i = 0; i < array.length; i++){
        let w = array[i];
        
        // left side detection
        if( ball.x + ball.width > w.x && ball.x < w.x && ( // if right side of puck intersects left side of wall
            (ball.y < w.y && ball.y + ball.height > w.y) || // if puck intersects x of wall
            ( ball.y  < w.y + w.height && ball.y + ball.height > w.y + w.height) ) // OR if puck intersects x + y.height of wall
            && ball.dx > 0){ // If puck is moving in a rightwards direction
            ball.dx = - ball.dx;
        } 
        // right side detection
        else if( ball.x < w.x + w.width && ball.x + ball.width > w.x + w.width && ( // if left side of puck intersects right side of wall
            (ball.y < w.y && ball.y + ball.height > w.y) || // if puck intersects y of wall
            ( ball.y  < w.y + w.height && ball.y + ball.height > w.y + w.height) ) // OR if puck intersects y + y.height of wall
            && ball.dx < 0){ // If puck is moving in a rightwards direction
            ball.dx = - ball.dx;
        } 
        // bot side detection
        else if(ball.y < w.y + w.height && ball.y + ball.height > w.y + w.height && ball.x + ball.width > w.x && ball.x < w.x + w.width
          && ball.dy < 0){
            ball.dy = -ball.dy;
        }
        // top side detection
        else if(ball.y + ball.height > w.y + w.height && ball.y < w.y + w.height && ball.x + ball.width > w.x && ball.x < w.x + w.width
          && ball.dy > 0){
            ball.dy = -ball.dy;
        }
    }
}

function yWallCollision(array){
    for(let i = 0; i < array.length; i++){
        let w = array[i];
        
        
        // top side detection
        if( ball.y + ball.height > w.y && ball.y < w.y && ( // if right side of puck intersects left side of wall
            (ball.x < w.x && ball.x + ball.width > w.x) || // if puck intersects x of wall
            ( ball.x  < w.x + w.width && ball.x + ball.width > w.x + w.width) ) // OR if puck intersects x + y.height of wall
            && ball.dx > 0){ // If puck is moving in a rightwards direction
            console.log("Triggered");
            ball.dy = - ball.dy;
        }
        // bot side detection
        else if( ball.y < w.y + w.height && ball.y + ball.height > w.y + w.height && ( // if right side of puck intersects left side of wall
            (ball.x < w.x && ball.x + ball.width > w.x) || // if puck intersects x of wall
            ( ball.x  < w.x + w.width && ball.x + ball.width > w.x + w.width) ) // OR if puck intersects x + y.height of wall
            && ball.dx > 0){ // If puck is moving in a rightwards direction
            console.log("Triggered");
            ball.dy = - ball.dy;
        } 
        // left side detection
        else if( ball.x + ball.width > w.x && ball.x < w.x && ( // if right side of puck intersects left side of wall
            (ball.y < w.y + w.height ) && // if puck intersects y of wall
            (ball.y + ball.height > w.y) ) // OR if puck intersects y + y.height of wall
            && ball.dx > 0){ // If puck is moving in a rightwards direction
            ball.dx = - ball.dx;
        } 
        // right side detection
        else if( ball.x < w.x + w.width && ball.x + ball.width > w.x + w.width && ( // if left side of puck intersects right side of wall
            (ball.y < w.y + w.height ) && // if puck intersects y of wall
            (ball.y + ball.height > w.y) ) // OR if puck intersects y + y.height of wall
            && ball.dx < 0){ // If puck is moving in a rightwards direction
            ball.dx = - ball.dx;
        } 
    }
}

function redWallCollision(array){
    for(let i = 0; i < array.length; i++){
        let w = array[i];
        
       if(ball.x < w.x + w.width &&
          ball.x + ball.width > w.x &&
          ball.y < w.y + w.height &&
          ball.y + ball.height > w.y){
            ball.resetPuck();
        }
    }
}