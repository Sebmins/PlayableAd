
function drawWalls(array){
    for(i=0;i<array.length;i++){
        let w = array[i];
        ctx.fillStyle = "#f7f7f7";
        ctx.fillRect(w.x,w.y,w.width,w.height);
        ctx.strokeStyle = "#FFF";
        ctx.strokeRect(w.x, w.y, w.width, w.height);
    }
}