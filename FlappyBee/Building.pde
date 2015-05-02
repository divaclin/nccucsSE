class pillar{
     float xPos;
     float opening;
     pillar(int i){
       xPos = 300+(i*240);
       opening = int(random(1,10));
       
     }
     void show(){
       for(int i=0;i<opening;i++){
         image(img.obstacle,xPos,i*30,30,30);
         image(img.obstacle,xPos+30,i*30,30,30);
       }
       for(int i=0;i<16-opening;i++){
          image(img.obstacle,xPos,(opening+i+6)*30,30,30);
          image(img.obstacle,xPos+30,(opening+i+6)*30,30,30);
       }
     }
     void move(){
       xPos-=(score>3000?6:3);
       if(xPos+60<=0){
          xPos=642;
          opening = int(random(10));
       }

     }
}
