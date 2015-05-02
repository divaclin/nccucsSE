Img img;
Bee bee;
pillar[] building=new pillar[3];
boolean end=false;
boolean intro=true;
int score=0;

final int GAME_START = 1;
final int GAME_RUN   = 2;
final int GAME_LOSE  = 3;
int gameStat=0;

void setup(){
     size(640,480);
     img =new Img();
     reset();
     
}

void draw(){
     switch(gameStat){
      case GAME_START:
         background(0);
         fill(255,191,0);
         textSize(30);
         textAlign(LEFT);         
         text("Flappy Bee",240,180);
         text("Press any button to Play",150,280);
         break;
      case GAME_RUN:
         background(93,148,251);
         checkDie();
   
         bee.move();
         bee.show();
         bee.drag();
         
         for(int i=0;i<building.length;i++){
           building[i].move();
           building[i].show();
         }
         fill(255);
         textSize(16);
         textAlign(CENTER);         
         text("score",280,30);
         text(score,340,30);
         score+=3;
         break;
      case GAME_LOSE:
          background(0);
          fill(255,191,0);
          textSize(30);
          textAlign(CENTER);         
          text("GAME OVER",320,180);
          text("score",250,280);
          text(score,420,280);
         break;
      default:
         break;
     }
}

void checkDie(){
     if(bee.yPos-30>=480 || bee.yPos+30<=0){
       gameStat=GAME_LOSE;
     }
     for(int i=0;i<3;i++){
        if((bee.xPos-building[i].xPos<60 && bee.xPos-building[i].xPos>0)
        && !(bee.yPos>(building[i].opening)*30 && bee.yPos<(building[i].opening+6)*30)){
          gameStat=GAME_LOSE;
        }
     }
}
void reset(){
    gameStat=GAME_START;
    score=0;
    bee=new Bee();
    for(int i = 0;i<3;i++){
         building[i]=new pillar(i);
     }
}
void mousePressed(){
    switch(gameStat){
      case GAME_START:
        reset();
        gameStat=GAME_RUN;
        break;
      case GAME_RUN:
        bee.jump();
        break;
      case GAME_LOSE:
        gameStat=GAME_START;
        break;
      default:
        break;
    } 
}
void keyPressed(){
    switch(gameStat){
      case GAME_START:
        reset();
        gameStat=GAME_RUN;
        break;
      case GAME_RUN:
        bee.jump();
        break;
      case GAME_LOSE:
        gameStat=GAME_START;
        break;
      default:
        break;
    } 
}

