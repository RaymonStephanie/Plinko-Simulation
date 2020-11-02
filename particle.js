class Particle {
    constructor(x,y,width,height) {
        var options = {
            'restitution': 1,
            'density': 0.3,
            airFriction : 15
        }
        this.width = width;
        this.height = height;
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.body = Bodies.circle(x,y,width/2,options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}