class Ground {
    constructor (){
        var ground_options = {
            isSatic: true
        }

        this.ground = Boies.rectangle(450,390,900,20,ground_options)
        World.add(world,this.ground);

    }

    display(){
        noStroke();
        fill(187,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20)
    }

}