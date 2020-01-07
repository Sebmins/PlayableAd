function level1LeftWalls(){    
    const lwall1 = {
        x : 40,
        y : 170,
        width : 10,
        height : 50,
    }
    const lwall2 = {
        x : 30,
        y : 220,
        width : 10,
        height : 50,
    }
    const lwall3 = {
        x : 20,
        y : 270,
        width : 10,
        height : 50,
    }
    const lwall4 = {
        x : 10,
        y : 320,
        width : 10,
        height : 50,
    }
    
    return [lwall1,lwall2,lwall3,lwall4];
}

function level1RightWalls(){
    const rwall1 = {
        x : cvs.width - 50,
        y : 170,
        width : 10,
        height : 50,
    }
    const rwall2 = {
        x : cvs.width - 40,
        y : 220,
        width : 10,
        height : 50,
    }
    const rwall3 = {
        x : cvs.width - 32,
        y : 270,
        width : 10,
        height : 50,
    }
    const rwall4 = {
        x : cvs.width - 25,
        y : 320,
        width : 10,
        height : 50,
    }

    return [rwall1,rwall2,rwall3,rwall4];
}

function level1TopWalls(){
    const tWall1 = {
        x : 5,
        y : 160,
        width : cvs.width-20,
        height : 10,
    }
    return [tWall1];
}

function level1BotWalls(){
    const bWall1 = {
        x : 5,
        y : 360,
        width : cvs.width-15,
        height : 10,
    }

    return [bWall1];
}