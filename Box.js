class Block{
  constructor(x, y, width, height){

    var options = {
      'restitution':0.3,
      'friction':1.0,
      'density':0.7,
  }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibility = 255;

    World.add(world, this.body);
  }

  
  score(){
    if(this.visibility < 0 && this.visibility > -105){
      score++;
    }
  }

  display(){
    //console.log(this.body.speed); 
  
    var pos = this.body.position; 
    
    if(this.body.speed < 8){ 
      push(); 
      translate(pos.x, pos.y); 
   
      rectMode(CENTER); 
      rect(0,0,this.width, this.height); 
      pop(); 
    } else{ 
      World.remove(world, this.body); 
      push(); 
      this.visibility = this.visibility - 1; 
      tint(255,this.visibility); 
      pop(); 
    }

  }

};


