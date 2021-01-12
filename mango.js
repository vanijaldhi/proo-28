class Mango{
    constructor(x,y){
    var options={
      isStatic:true,
      restitution:0,
      friction:1,
      density:1
    }
    this.mango= Bodies.rectangle(x,y,20,30,options)
    World.add(world, this.mango);
    
    this.m= loadImage("mango.png");
   }

   display(){
    var pos =this.mango.position;
    push ();
   // fill(40,50,255);
    imageMode(CENTER);
    image(this.m,pos.x,pos.y,70,70);
    pop ();
  }
}
