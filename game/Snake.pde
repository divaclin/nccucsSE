class Snake{
      int x;
      int y;
      Snake prev;
      Snake next;
      
      Snake(int posX, int posY){
        this.x=posX;
        this.y=posY;
        this.prev=null;
        this.next=null;
      }
      Snake getSnakeTail(){
            Snake tmp;
            for(tmp = this;tmp.next!= null;tmp = tmp.next){
            }
            return tmp;
      }
      void initSnake(){
        Snake tmp = this;
        for(int i=1;i<bodyLength;i++){ 
          tmp.next = new Snake(this.x-i*snakeSize,this.y);
          tmp.next.prev=tmp;
          tmp = tmp.next;
        }
      }
      void snakeShow(int headDir,Img img){
           for(Snake tmp = this;tmp!=null;tmp=tmp.next){
              if(tmp==this){
                   image(img.head[headDir-1],tmp.x,tmp.y,snakeSize,snakeSize);
              }
              else if(tmp.next!=null){
                   float x1=tmp.prev.x;
                   float x2=tmp.x;
                   float y1=tmp.prev.y;
                   float y2=tmp.y;
                   int bodyDir=0;
                   if(x1==x2){
                     bodyDir=(y2-y1>0?0:1);
                   }
                   if(y1==y2){
                     bodyDir=(x2-x1>0?2:3);
                   }
                   image(img.body[bodyDir],tmp.x,tmp.y,snakeSize,snakeSize);
              }
              else{
                   image(img.tail,tmp.x,tmp.y,snakeSize,snakeSize);
              }
           }
      }
      void snakeMove(int dir,int frame){
        if(currentFrame >= frame){
          for(Snake tmp = this.getSnakeTail(); tmp.prev != null;tmp = tmp.prev){
              tmp.x=tmp.prev.x;
              tmp.y=tmp.prev.y;         
          }
          switch(dir){
             case DIR_UP:
                    this.y-=snakeSize;
                    break;
             case DIR_DOWN:
                    this.y+=snakeSize;
                    break;
             case DIR_LEFT:
                    this.x-=snakeSize;
                    break;
             case DIR_RIGHT:
                    this.x+=snakeSize;
                    break;
             default:
                    break;
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
          currentFrame=0;
        }
      }
    void appendBody(){
         Snake tmp =this.getSnakeTail();
         float x1=tmp.prev.x;
         float x2=tmp.x;
         float y1=tmp.prev.y;
         float y2=tmp.y;
         if(x1==x2){
            Snake body=new Snake(tmp.x,(y2-y1>0?tmp.y+snakeSize:tmp.y-snakeSize));
            body.prev=tmp;
            tmp.next=body;
         }
         if(y1==y2){
            Snake body=new Snake((x2-x1>0?tmp.x+snakeSize:tmp.x-snakeSize),tmp.y);
            body.prev=tmp;
            tmp.next=body;
         }

    }  
    int eatSelf(){
       for(Snake tmp = this.next;tmp!=null;tmp=tmp.next){
          if(this.x==tmp.x&&this.y==tmp.y){
            return GAME_LOSE;
          }
       }
       return GAME_RUN;
    }
};

