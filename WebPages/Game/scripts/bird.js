function Bird(){
    this.y = height/2;
    this.x = 100;

    this.gravity = .2;
    this.velocity = 0;
    this.flightVelocity = 5

    this.show = function(){
        
        fill(255);
        ellipse(this.x, this.y, 24, 24);
    }
    this.update = function(){
        this.velocity += this.gravity;
        this.y += this.velocity

        if(this.y > height-12){
            this.y = height-12;
            this.velocity = 0;
        }
        if(this.y < 12){
            this.y = 12;
            this.velocity = 0;
        }
    }
    this.fly = function(){
        this.velocity -= this.flightVelocity;

    }

}