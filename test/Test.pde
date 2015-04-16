final int GAME_START = 1;
final int GAME_RUN   = 2;
final int GAME_PAUSE = 3;
final int GAME_LOSE  = 4;

final int DIR_UP    = 1;
final int DIR_DOWN  = 2;
final int DIR_LEFT  = 3;
final int DIR_RIGHT = 4;

Img img;
Snake snake;
Bait bait;
boolean ai=false;
int currentFrame = 0;
int currentTime  = 0;
int snakeSize = 20;
int speedLevel = 20;
int bodyLength = 5;
int gameState = 0;
int snakeDir = 0; 

void setup(){
  img = new Img();
  size(640,480);
  gameState = GAME_START;
}

void draw(){

     switch (gameState){
       case GAME_START:                       
                       background(0);
                       textSize(30);
                       fill(255);
                       text("click to start",width/3,height/2);
                       break;
       case GAME_RUN:  
                       background(0);
                       currentFrame++;
                       gameState=snake.eatSelf();
                       speedUp();
                       snake.snakeMove(snakeDir,speedLevel);                       
                       snake.snakeShow(snakeDir,img);
                       bait.baitAI(ai);
                       bait.baitMove(snake);
                       bait.baitShow(img);
                       eatBait();
                       break;       
       case GAME_PAUSE:
                       textSize(30);
                       fill(255);
                       text("PAUSE", width*2/5, 240);
                       break;       
       case GAME_LOSE:
                       background(0);
                       textSize(30);
                       fill(255);
                       text("You Lose",width*2/5,height/2);
                       break;       
     }
}

void mousePressed(){
  if(gameState==GAME_START || gameState==GAME_LOSE){
     snakeDir = DIR_RIGHT;
     speedLevel=20;
     bodyLength=5;
     snake = new Snake(300,20);
     snake.initSnake();
     bait  = new Bait();
     bait.setBait(snake);
     gameState=GAME_RUN;
     currentTime=millis();
  }
}
void keyPressed(){
    if (key == CODED && gameState == GAME_RUN) {
       switch(keyCode){
        case UP:
          snakeDir = DIR_UP;
          break;
        case DOWN:
          snakeDir = DIR_DOWN;
          break;
        case LEFT:
          snakeDir = DIR_LEFT;
          break;
        case RIGHT:
          snakeDir = DIR_RIGHT;
          break;  
      }
    }
    if(key == ENTER){
      switch(gameState){
        case GAME_RUN:
             gameState=GAME_PAUSE;           
             break;
        case GAME_PAUSE:
             gameState=GAME_RUN;
             break;
        default:
             break;
      }
    }
    cheatKeys();
}

void cheatKeys(){
     switch(key){
       case 'q':
       case 'Q':
            speedLevel=(speedLevel>0?speedLevel-=3:speedLevel);
            currentFrame=0;
            println(speedLevel);
            break;
       case 'w':
       case 'W':
            speedLevel=(speedLevel<=20?speedLevel+=3:speedLevel);
            currentFrame=0;
            println(speedLevel);            
            break;
       case 'e':
       case 'E':
            snake.appendBody(); 
            println("body appended");    
            break;
       case 'r':
       case 'R':
            ai=!ai;
            println("AI state: "+ai);
            break;      
     }
}
void speedUp(){
     if(millis()-currentTime>=5000 && speedLevel>5){
       speedLevel-=5;
       currentTime=millis();
     }
}
void eatBait(){
    if(abs(snake.x-bait.x)<(.8*snakeSize)
     &&abs(snake.y-bait.y)<(.8*snakeSize)){
       snake.appendBody();
       bait= new Bait();
       bait.setBait(snake);
    } 
}

