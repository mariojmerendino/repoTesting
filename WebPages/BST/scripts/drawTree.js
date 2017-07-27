var t;
var canvas;
function setup(){
    t = new Tree();
    canvas = createCanvas(600, 600);
    //background("black")
}
function drawAdd(){
    var num = parseInt(document.getElementById("textBox").value);
    if(Number.isInteger(num)){
        t.addNode(num);
        drawCircle(num);
    }
    
}
function draw(){
    //background(0);
}
function drawCircle(num){
    var maxNodes = Math.pow(2,t.depth) - 1;
    var circleDimension = 40;
    if(t.depth == 1){
        ellipse(circleDimension, height/2, circleDimension, circleDimension);
        text(num, circleDimension-3, height/2 +3);
        fill(255);
    }
    else{
        var path = t.getPath(num);
        var divide = 2;
        var currentDepth = 1;
        var numLeafNodes = (maxNodes + 1)/2;
        path = path.split(" ");
        for(var i = 1; i < path.length; i++){
            //set divide....
            if(path[i] == 'L'){
                currentDepth++;
            }
            else if(path[i] == 'R'){
                currentDepth++;
            }
            else if(path[i]== 'C'){
                //ignore spaces and C. 
            }
            
        }
        ellipse((1+t.depth)*circleDimension, (divide*height/(numLeafNodes+1)), circleDimension, circleDimension);
        text(num, ((1+t.depth) * circleDimension), (divide*height/(numLeafNodes+1)));
        fill(255);

    }


}
