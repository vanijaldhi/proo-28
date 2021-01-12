class Stone{
    constructor(x,y){
    var options={
      isStatic:true,
      restitution:0,
      friction:1,
      density:1.2
    }
    this.stone= Bodies.circle(x,y,40,options);
    this.stOne= loadImage("stone.png");
    World.add(world, this.stone);
   }
 
   display(){
    var pos =this.stone.position;
    
    push ();
    fill(40,50,255);
    imageMode(CENTER);
    image(this.stOne,pos.x,pos.y,50,50);
    pop ();
  }
}
