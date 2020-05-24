var bg,button,pl,nt;

var road;

var boy,note;

var player;

var gameState=0;


function preload(){
  bg=loadImage('images/sp.jpg')
  pl=loadImage('images/welcome.png')
  nt=loadImage('images/image.jpg')
  road=loadImage('images/daytime.png')



}

function setup() {
  
  createCanvas(displayWidth,displayHeight);

  
  button=createButton("tap to continue")
  button.position(600,500);
   button.mousePressed(()=>{
    gameState=1;
    button.hide();
   })
  
  
   


}

function draw() {
  background(bg);
  
 if(gameState===1){
  background("white")
   boy=createSprite(100,400,10,10);
   boy.addImage(pl);
   note =createSprite(800,400,10,10);
   note.addImage(nt);
  note.scale=1.5;
  
if(keyCode === 32){
 gameState=2;

}
  // background("white")
  //   txt=createElement("h1");
  //   txt.position(750,250);
  //   txt.html("Beware");

  //   txtt=createElement("h4.5");
  //   txtt.position(640,300);
  //   txtt.html("Your goal is to go to the store and buy groceries for your");

  //   txxt=createElement("h4.5");
  //   txxt.position(620,325);
  //   txxt.html("grandparents.On your way, you will be attacked by corona monsters.");

  //   ttxt=createElement("h4.5");
  //   ttxt.position(620,350);
  //   ttxt.html("Your goal is to defend yourselve from the virus and get the groceries.");

  //   ttxt=createElement("h4.5");
  //   ttxt.position(620,375);
  //   ttxt.html("Remember to collect bullets,sanitizers and masks on your way.Press ");

  //   txxxt=createElement("h4.5");
  //   txxxt.position(620,400);
  //   txxxt.html("space key to shoot.Control the player with the help of arrow keys. ");
  
  //   txtxxt=createElement("h4.5");
  //   txtxxt.position(620,420);
  //   txtxxt.html("Press space to continue to the game.");

  //   txxxxt=createElement("h1");
  //   txxxxt.position(750,425);
  //   txxxxt.html("Good luck!! ");


  //   boy=createSprite(100,400,10,10);
  //   boy.addImage(pl);
  //   note =createSprite(800,400,10,10);
  //   note.addImage(nt);
  //   note.scale=1.5;

  // if(keyCode === 32){
  //  gameState=2;

  // }

   }
 
    if(gameState === 2){
      boy.x=3000;
      boy.y=3000;
      note.x=3000;
      note.y=3000;
      background(road);
      
       //player=createSprite(500,600,100,100);
       
       
    }

  drawSprites();
  
  if(gameState===1){
    
    text("Beware",750,250);
  
     
  
      
  
     }
  
}