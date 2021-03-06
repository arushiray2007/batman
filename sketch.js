const World=Matter.World;
const Body=Matter.Bodies;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var thunder,thunder1,thunder2,thunder3,thunder4;
var engine,world;
var drops=[];
var rand;
var maxDrop=100;
var thunderFrame=0;
var umbrella;
function preload(){
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png");

}

function setup(){
   createCanvas(400,700);
    engine=Engine.create();
    world=engine.world;
    umbrella=new Umbrella(200,500);
    
    if(frameCount%150===0){
       for(var i=0;i<maxDrop;i++){
          drops.push(new CreateDrops(random(0,400),random(0,400)));

       }
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    rand=Math.round(random(1,4));
    if(frameCount%80===0){
       thunderFrame=frameCount;
       thunder=createSprite(random(10,370),random(10,30),10,10);
       switch(rand){
          case 1: thunder.addImage(thunder1);
          break;
          case 2: thunder.addImage(thunder2);
          break;
          case 3: thunder.addImage(thunder3);
          break;
          case 4: thunder.addImage(thunder4);
          break;
          default:break;
         

       }
       thunder.scale=random(0.3,0.6);
    }
    if(thunderFrame+10===frameCount && thunder){
       thunder.destroy();
     
    }
    umbrella.display();
    for(var i=0;i<maxDrop;i++){
       drops[i].display();
       drops[i].updateY();
       

    }
    drawSprites();
}   

