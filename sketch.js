var canvas;
var music;
var surface1,surface2,surface3,surface4,box1

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
   
    //create 4 different surfaces
    surface1=createSprite(100,580,180,20)
    surface1.shapeColor = "lime"
    surface2=createSprite(295,580,180,20)
    surface2.shapeColor = "blue"
    surface3=createSprite(490,580,180,20)
    surface3.shapeColor = "yellow"
    surface4=createSprite(690,580,180,20)
    surface4.shapeColor = "orange"
    //create box sprite and give velocity
    box1=createSprite(random(20,750),300,30,30)
    box1.shapeColor = "indigo"
    box1.velocityX=-5
    box1.velocityX=5
    box1.velocityY=-5
    box1.velocityY=5   
}

function draw() {
    background("cyan");
    //create edgeSprite
    edges=createEdgeSprites()
    box1.bounceOff(edges)

    surface1.display()
    surface2.display()
    surface3.display()
    surface4.display()
    box1.display()
    music.play()
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box1)&&box1.bounceOff(surface1)){
       //change color here
       box1.shapeColor = "lime"
       
    }

    if(surface2.isTouching(box1)&&box1.bounceOff(surface2)){
        //change color here
        box1.shapeColor = "blue"
    }

    if(surface3.isTouching(box1)&&box1.bounceOff(surface3)){
        //change color here
        box1.shapeColor = "yellow"
    }

    if(surface4.isTouching(box1)&&box1.bounceOff(surface4)){
        //change color here
        box1.shapeColor = "orange"
        box1.velocityX=0
        box1.velocityY=0
    }
}
