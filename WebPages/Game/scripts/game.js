var b;
var p = [];
function setup(){
    createCanvas(400,600);
    b = new Bird();
    p.push( new Pipe());

}
function draw(){
    background(0);
    b.show();
    b.update();

    for (var i = p.length-1; i >=0; --i){
        p[i].show();
        p[i].update();
        if(p[i].touches(b)){
            console.log("HIT");  
                  
        }
        if(p[i].x+p[i].w < 0){
            p.splice(i,1);
        }
    }
    if (frameCount % 60 == 0 ){
        p.push(new Pipe());
    }
}
function keyPressed(){
    if(key == ' ' && b.y > 0){
        b.fly();
    }
}