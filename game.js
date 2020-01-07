// Creates canvas
const cvs = document.getElementById("Buca");
const ctx = cvs.getContext("2d");

// Adds border to canvas
cvs.style.border = "1px solid #0ff";
ctx.lineWidth = 3;

// GAME VARIABLES AND CONSTANTS
const BALL_RADIUS = 25;
let LIFE = 3; // PLAYER HAS 3 LIVES
let LEVEL = 1; // PLAYER STARTS
const MAX_LEVEL = 6;
let GAME_OVER = false;
let shots = 1;

// Create end hole
var l1Hole = new Hole(120,180,70,30);
var startingY = 300;
var ball = new Puck(144, 323);
var mouse = new Mouse(ball);
var dragging = false;
var dragStart;
var start = {x:ball.x, y:ball.y, width:ball.width, height:ball.height};

let lWall = level1LeftWalls();
let rWall = level1RightWalls();
let tWall = level1TopWalls();
let bWall = level1BotWalls();
let xWall = [];
let yWall = [];
let redWall = [];

// show game stats
function showGameStats(text, textX, textY, img, imgX, imgY){
    // draw text
    ctx.fillStyle = "#000";
    ctx.font = "25px Germania One";
    ctx.fillText(text, textX, textY);
    ctx.drawImage(img, imgX, imgY, width = 25, height = 25);
}

function gameOver(){
    if(LIFE <= 0){
        LEVEL=1;
        l1Hole = new Hole(120,180,70,30);
        lWall = level1LeftWalls();
        rWall = level1RightWalls();
        tWall = level1TopWalls();
        bWall = level1BotWalls();
        xWall = [];
        yWall = [];
        redWall = [];
        start.x = 144;
        start.y = 323;
        ball.resetPuck();
        LIFE =3;
    }
}

function levelUp(){
    if(LEVEL == 2){
        start.x = 80;
        start.y = 323;
        l1Hole = new Hole(183,301,75,50);
    }//183,301,75,50
    if(LEVEL == 3){
        start.x = 144;
        start.y = 323;
        l1Hole = new Hole(120,180,70,30);
    }
    if(LEVEL == 4){
        l1Hole = new Hole(185,185,70,30);
        start.x = 230;
        start.y = 303;
    }
    if(LEVEL == 5){
        l1Hole = new Hole(120,150,70,30);
        start.x = 144;
        start.y = 323;
    }
    if(LEVEL >= MAX_LEVEL){
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0,0,cvs.width,cvs.height);
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        cvs.font = "30px Verdana";
        ctx.fillText("Well Played!", cvs.width/2 -60, cvs.height/2); 
        GAME_OVER = true;
        return;
    }
    ball.resetPuck();
    LIFE=3;
    LEVEL++;
}

function draw(event){
    //l1Hole.drawHole();
    ball.drawPuck();/*
    drawWalls(tWall);
    drawWalls(bWall);
    drawWalls(lWall);
    drawWalls(rWall);
    drawWalls(xWall);
    drawWalls(yWall);
    drawWalls(redWall);*/
    // SHOW LIVES
    showGameStats(LIFE, 25, cvs.height-25, LIFE_IMG, 45, cvs.height-45); 
}

function update(){
    //l1Hole.drawHole();
    ball.movePuck();
    l1Hole.puckHoleCollision();
    ballTopCollision(tWall);
    ballBotCollision(bWall);
    leftWallCollision(lWall);
    rightWallCollision(rWall);
    xWallCollision(xWall);
    yWallCollision(yWall);
    redWallCollision(redWall)
    ball.updatePuck();
    
    gameOver();
    
    /*if(ball.x < 0 || ball.x > cvs.width || ball.y < 0 || ball.y > cvs.height)
        ball.resetPuck();*/
    
    ball.dx *= 0.98;
    ball.dy *= 0.98;
    
    if(ball.dx < 0.01 && ball.dx > -0.01 && ball.dy > -0.01 && ball.dy < 0.01 && shots == 0){
        ball.resetPuck();
    }
}

function loop(){
    // clears canvas
    if(LEVEL==1 && dragging==false){
        ctx.drawImage(BG_IMG_LEVEL1, 0, 0,315,510);
        lWall = level1LeftWalls();
        rWall = level1RightWalls();
        tWall = level1TopWalls();
        bWall = level1BotWalls();
        
    }else if(LEVEL==2 && dragging==false){
        ctx.drawImage(BG_IMG_LEVEL2, 0, 0,315,510);
        xWall = level2NormWalls(); 
        
    }else if(LEVEL==3 && dragging==false){
        ctx.drawImage(BG_IMG_LEVEL3, 0, 0,315,510); 
        xWall = []; 
        yWall = level3NormWalls();
        
    }else if(LEVEL==4 && dragging==false){
        ctx.drawImage(BG_IMG_LEVEL4, 0, 0,315,510); 
        yWall = [];
        redWall = level4RedWalls();
    }else if(LEVEL==5 && dragging==false){
        ctx.drawImage(BG_IMG_LEVEL5, 0, 0,315,510); 
        redWall = [];
        xWall = level5NormWalls();
    }else if(LEVEL==6 && dragging==false){
        ctx.drawImage(BG_IMG_LEVEL6, 0, 0,315,510); 
        lWall = level6LeftWalls();
        rWall = level6RightWalls()
        tWall = level6TopWalls();
        xWall = level6NormWalls();
    }
    draw();
    update();
    if(! GAME_OVER){
        requestAnimationFrame(loop);
    }
}
loop();
