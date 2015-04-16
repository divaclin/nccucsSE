class Bait{
      int x;
      int y;
      boolean ai;
      
      Bait(){
         this.ai=false;    
      }
      void baitAI(boolean ai){
        this.ai=ai;
      }
      void setBait(Snake snake){
           boolean check=false;       
           do{
              int x=int(random(615));
              int y=int(random(455));
              Snake tmp;
              for(tmp=snake;tmp!=null;tmp=tmp.next){
                  if((tmp.x<=x && x<tmp.x+snakeSize && tmp.y<=y && y<tmp.y+snakeSize)
                     ||(x%snakeSize!=0 || y%snakeSize!=0)){
                    break;
                  }
              }
              if(tmp==null){
                 check=true;
                 this.x=x;
                 this.y=y;
              }
           }while(!check);
      }
      void baitShow(Img img){
           fill(random(256), random(256), random(256));
           rect(this.x, this.y, snakeSize, snakeSize);
      }
      void baitMove(Snake snake){
         if(this.ai && random(1)>.99){
            this.x-=int(floor(random(-3,3)))*snakeSize;
            this.y-=int(floor(random(-3,3)))*snakeSize;
            for(Snake tmp=snake.next;tmp!=null;tmp=tmp.next){
                if(this.x==tmp.x&&this.y==tmp.y){
                   this.setBait(snake);
                   break;
                }
            }
         }
         if(this.x<0){
            this.x=640-snakeSize;
         }
         if(this.x>=640){
            this.x=0;
         }
         if(this.y<0){
            this.y=480-snakeSize;
         } 
         if(this.y>=480){
            this.y=0;
          } 
      }
}
