class rope
{
    constructor(body1,body2,xOffset,yOffset)
    {
        this.xOffset = xOffset;
        this.yOffset = yOffset;

        var options =
        {
            bodyA : body1,
            bodyB : body2,
            pointB : {x:xOffset,y:yOffset},
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display()
    {
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+this.xOffset,this.rope.bodyB.position.y+this.yOffset);
    }
}
