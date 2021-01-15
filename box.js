class Box{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height);
        World.add(world,this.body);
    }
    
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}

