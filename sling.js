class Sling{
 constructor(bodyA,pointB){
     var option={
         bodyA:bodyA,
         pointB:pointB,length:10,stiffness:0.4
     }
     this.chain=Matter.Constraint.create(option)
     this.pointB=pointB
     this.sling1=loadImage("sprites/sling1.png");
     this.sling2=loadImage("sprites/sling2.png");
     this.sling3=loadImage("sprites/sling3.png");
     World.add(world,this.chain)
 }
 fly(){
     this.chain.bodyA=null;
 }
 attach(body){
     this.chain.bodyA=body

 }
 display(){
    image(this.sling1,200,30);
    image(this.sling2,170,30);
     if(this.chain.bodyA)
     {
     var ta=this.chain.bodyA.position
     var tb=this.pointB
     push()
     if(ta.x<220){
     strokeWeight(7)
     stroke(49,22,8)
     line(ta.x-20,ta.y,tb.x-10,tb.y);
     line(ta.x-20,ta.y,tb.x+30,tb.y);
     image(this.sling3,ta.x-30,ta.y-10,15,30);
     }
     else {
        strokeWeight(4)
        stroke(49,22,8)
        line(ta.x+25,ta.y,tb.x-10,tb.y);
        line(ta.x+25,ta.y,tb.x+30,tb.y);
        image(this.sling3,ta.x+25,ta.y-10,15,30);
     }
     pop()
     }
 }

}
