class Tree{
   constructor(){
       var options = {
           isStatic : true,
           restitution: 0
       }
    this.body = Bodies.rectangle(1200,350,50,20,options)
    World.add(world, this.body);
    this.tree = loadImage("tree.png");
   }

   display(){
    var pos =this.body.position;
    push ();
    fill(40,50,255);
    imageMode(CENTER);
    image(this.tree,pos.x,pos.y,600,650);
    pop ();
  }
}