function Pipe(){
    this.w = 30
    this.y = random(height/2);
    this.x = width;
    this.speed = 3;
    //Random amount that is greater than the size of the bird but not too large
    this.emptySpace = random(100) + 50;
    this.highlight = false;
    this.show = function(){
        fill(255);
        if(this.highlight == true){
            fill("red");
        }
        rect(this.x, 0, this.w, this.y)
        rect(this.x, this.y + this.emptySpace ,this.w, height)
    }
    
    this.update = function(){
        this.x -= this.speed;
    }
    this.touches = function(bird){
        if(bird.y < this.y || bird.y > height - (this.y+this.emptySpace)){
            if(bird.x > this.x && bird.x < this.x + this.w)
                this.highlight = true;
                return true;
            
        }
        else
            this.highlight = false;
            return false;
    }
}