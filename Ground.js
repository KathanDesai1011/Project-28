class Ground{

    constructor(x,y,width,height){

        var options = {
            isStatic: true,
            restitution: 0,
            friction: 0,
            density: 1.2
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height
        this.width = width
        World.add(world, this.body);

    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

}