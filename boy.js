class Boy{
    constructor(x,y) {
      var options={
       isStatic:true
      }
        this.boy = Bodies.rectangle(x,y,60,70,options);
        World.add(world, this.boy);
        this.b= loadImage("boy.png");
      }
      display(){
        var pos =this.boy.position;
        imageMode(CENTER);
        image(this.b,pos.x, pos.y,250,350);
      }
}