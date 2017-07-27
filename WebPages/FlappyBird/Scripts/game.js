var board;
var gameContext;
var b
window.onload = function(){
    
    board =  document.getElementById("game");  
    gameContext = board.getContext("2d");
    var b = new bird(board, gameContext);
    draw();
    setInterval(update, 1000/30);
}
function start(){

}
function draw(){
    gameContext.fillSytle = 'black';
    gameContext.fillRect(0,0,board.width, board.height);
    b.draw1();

}
function update(){

}
function bird(board, context){
    this.gameBoard = board;
    this.context = context;
    //location
    this.x = 100;
    this.y = 320;

    this.gravity = 5;
    this.draw1 = function(){
        this.context.fillSytle = 'white';
        this.context.fillRect(0, 0, 100, 100);
        console.log("Bird Draw")
    }   

    this.buttonPress = function(){

    }


}