class Bee{
     float xPos;
     float yPos;
     float ySpeed;
     
     Bee(){
             xPos = 150;
             yPos = 200;
      }
      void show(){
           stroke(255);
           noFill();
           strokeWeight(2);
           image(img.hornet,xPos,yPos,30,30);
      }
      void jump(){
           ySpeed=-9; 
      }
      void drag(){
           ySpeed+=(score>3000?0.375:0.3); 
      }
      void move(){
           yPos+=ySpeed; 
   }
}
