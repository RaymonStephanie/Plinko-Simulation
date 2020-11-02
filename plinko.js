class Plinko {
    constructor(x,y,width,height) {
        var options = {
            'restitution': 0.8,
            'density': 0.3,
            'isStatic' : true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.circle(x,y,width/2,options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        fill(255);
        ellipse(pos.x, pos.y, this.width, this.height);
    }
}