function level6LeftWalls(){ 
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
    const lwall5 = {
        x : 50,
        y : 120,
        width : 10,
        height : 50,
    }
    
    return [lwall1,lwall2,lwall3,lwall4,lwall5];
}

function level6RightWalls(){
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
    const rwall5 = {
        x : cvs.width - 60,
        y : 120,
        width : 10,
        height : 50,
    }
    return [rwall1,rwall2,rwall3,rwall4,rwall5];
}

function level6TopWalls(){
    const tWall1 = {
        x : 5,
        y : 120,
        width : cvs.width-20,
        height : 10,
    }
    return [tWall1];
}

function level6NormWalls(){
    const nWall1 = {
        x : 125,
        y : 185,
        width : 63,
        height : 3,
    }
    return [nWall1];
}
