class Ball
{
    constructor(x,y,width,height)
    {
      var options=
      {
          isStatic:false,
          restitution:1,
          friction:1.2,
          density:1.0
    
    
    }

      this.body=Bodies.rectangle(x,y,width,height,options);

      this.width=width;
      this.height=height;
    
      World.add(world,this.body);

    }
    display()
    {
      var pos=this.body.position
      push ();
      rectMode(CENTER);
        fill (109, 198, 71);
      rect(pos.x,pos.y,this.width,this.height);
      pop ();
    }
}