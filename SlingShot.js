class SlingShot {
    constructor(BodyA, BodyB){
        var options = {
            BodyA: bodyA,
            BodyB: BodyB,
            stiffness: 0.04,
            length: 1
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){

            var pointA = this.sling.BodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }

    }

}