class slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.slingshot = Const.create(options);
        World.add(world,this.slingshot)
    }
    fly(){
        this.slingshot.bodyA=null;
    }
    display(){
        if (this.slingshot.bodyA){
        strokeWeight(4);
        line(this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,
            this.slingshot.pointB.x,this.slingshot.pointB.y);
        }
    }
}