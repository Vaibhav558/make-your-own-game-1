var hero
var wall1 
var wall2
var wall3
var wall4
var wall5
var wall6
var wall7
var wall7
var wall9
var wall10
var wall11
var wall12
var wall13
var wall14
var wall15
var wall16
var wall17
var wall18
var wall19
var wall20
var wall21
var wall22
var wall23
var wall24

function setup() {
  createCanvas(400,400);
  wall1=createSprite(4,50,100,10);
  wall2=createSprite(4,50,100,10);
  wall3 = createSprite(102,10,10,100);
  wall4 = createSprite(85,98,100,10);
  wall5 = createSprite(301,197,30,10);
  wall6 = createSprite(177,81,10,100);
  wall7 = createSprite(145,166,100,10);
  wall8 = createSprite(84,269,10,100);
  wall9 =createSprite(38,161,10,70);
  wall10 = createSprite(14,168,39,10);
  wall11 = createSprite(9,365,10,100);
  wall12 = createSprite(94,382,100,10);
  wall13 = createSprite(184,360,10,100);
  wall14= createSprite(184,309,100,10);
  wall15= createSprite(230,309,10,100);
  wall16= createSprite(378,260,200,10);
  wall17= createSprite(398,305,230,10);
  wall18= createSprite(282,304,10,50);
  wall19= createSprite(260,394,100,10);
  wall20= createSprite(338,372,10,50);
  wall21= createSprite(236,160,10,100);
  wall22= createSprite(246,64,70,10);
  wall23=createSprite(341,89,10,150);
  hero = createSprite(10,20,10,10);

}

function draw() {
  background(0); 
  if(keyDown(UP_ARROW))
  {hero.y=hero.y-2}; 
 
  if(keyDown(DOWN_ARROW))
  {hero.y=hero.y+2};
 
  if(keyDown(RIGHT_ARROW))
  {hero.x=hero.x+2};

  if(keyDown(LEFT_ARROW))
  {hero.x=hero.x-2};

  if(hero.isTouching(wall1)){
    hero.x=10;
    hero.y=10;
   }

   if(hero.isTouching(wall2)){
    hero.x=10;
    hero.y=10;
   }

   if(hero.isTouching(wall3)){
    hero.x=10;
    hero.y=10;
   }

   if(hero.isTouching(wall4)){
    hero.x=10;
    hero.y=10;
   }

   if(hero.isTouching(wall5)){
    hero.x=10;
    hero.y=10;
   }

   if(hero.isTouching(wall6)){
    hero.x=10;
    hero.y=10;
   }

   if(hero.isTouching(wall7)){
    hero.x=10;
    hero.y=10;
   }

   if(hero.isTouching(wall8)){
    hero.x=10;
    hero.y=10;
   }

   if(hero.isTouching(wall9)){
    hero.x=10;
    hero.y=10;
   }

   if(hero.isTouching(wall10)){
    hero.x=10;
    hero.y=10;
   }

   if(hero.isTouching(wall11)){
    hero.x=10;
    hero.y=10;
   }

   if(hero.isTouching(wall12)){
    hero.x=10;
    hero.y=10;
   }

   if(hero.isTouching(wall13)){
    hero.x=10;
    hero.y=10;
   }
   
   if(hero.isTouching(wall14)){
    hero.x=10;
    hero.y=10;
   }
   if(hero.isTouching(wall15)){
    hero.x=10;
    hero.y=10;
   }
   if(hero.isTouching(wall16)){
    hero.x=10;
    hero.y=10;
   }
   if(hero.isTouching(wall17)){
    hero.x=10;
    hero.y=10;
   }
   if(hero.isTouching(wall18)){
    hero.x=10;
    hero.y=10;
   }
   if(hero.isTouching(wall19)){
    hero.x=10;
    hero.y=10;
   }
   if(hero.isTouching(wall20)){
    hero.x=10;
    hero.y=10;
   }
   if(hero.isTouching(wall21)){
    hero.x=10;
    hero.y=10;
   }
   if(hero.isTouching(wall22)){
    hero.x=10;
    hero.y=10;
   }
   if(hero.isTouching(wall23)){
    hero.x=10;
    hero.y=10;
   }
   if(hero.isTouching(wall24)){
    hero.x=10;
    hero.y=10;
   }
  

  drawSprites();
}
    