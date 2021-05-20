class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bird.body,
            bodyB:log6.body,
            stiffness:0.9,length:10
        
        
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
display(){
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
}

}