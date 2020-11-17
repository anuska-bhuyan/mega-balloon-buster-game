  var b1;
    var b1image
    var red, redimage
    var blue,blueimage
    var green,pinkimage
    var bow,bowimage
    var arrow,arrowimage
    var score=0;
  var redg,blueg,pinkg,arrowg


    function preload(){
     //load your images here 
     b1image=loadImage("background0.png");
      redimage=loadImage("red_balloon0.png")
      blueimage=loadImage("blue_balloon0.png");
      pinkimage=loadImage("pink_balloon0.png");
      bowimage=loadImage("bow0.png")
      arrowimage=loadImage("arrow0.png")
    }

    function setup() {
      createCanvas(600, 600);
        b1 = createSprite(0,0,600,600);
      b1.addImage("b1",b1image);
      b1.scale = 2.5

      redg= new Group();
      blueg=new Group();
      pinkg= new Group();
      arrowg=new Group();






      bow=createSprite(550,300);
      bow.addImage("bow",bowimage)



      //add code here

    }



    function draw() {
      background(180);

    b1.velocityX= -3;

      if (b1.x < 0){
          b1.x = b1.width/2;
        b1.scale=3;
      }



      if(keyDown("space")){
        var temp_arrow=arrowqq();
        temp_arrow.addImage(arrowimage);
        temp_arrow.y=bow.y;
      }


      bow.y=World.mouseY


  var rand=Math.round(random(1,3));


      if(frameCount%80===0){


      switch(rand){


  case 1:   redballoon();
        break;
        case 2:   greenballoon();
        break;
        case 3:   blueballoon();
        break;
        default:break;

      } 
        if(arrowg.isTouching(pinkg)){
  pinkg.destroyEach();
  arrowg.destroyEach();
  score=score+1;
}
if(arrowg.isTouching(blueg)){
  blueg.destroyEach();
  arrowg.destroyEach();
  score=score+3;
}
if(arrowg.isTouching(redg)){
  redg.destroyEach();
  arrowg.destroyEach();
  score=score+4;
}






      }


      drawSprites();
      //add code here

      text("score:"+score,550,50);
    }

      function blueballoon(){

        blue=createSprite(400,200);
        blue.velocityX=3;
        blue.velocityY=0;
        blue.addImage(blueimage);
        blue.x=Math.round(random(20,370));
        blue.scale=0.1;
        blue.lifetime=100;
        blueg.add(blue);
      }

         function greenballoon(){

        green=createSprite(400,300);
        green.velocityX=2;
        green.velocityY=-1;
        green.addImage(pinkimage);
        green.x=Math.round(random(1,400));
        green.scale=2;
        green.lifetime=100;
        pinkg.add(green);
         }

         function redballoon(){

        red=createSprite(100,100);
        red.velocityX=5;
        red.velocityY=4;
        red.addImage(redimage);
        red.y=Math.round(random(5,100));
        red.scale=0.1;
        red.lifetime=100;
        redg.add(red);
  }

  function arrowqq(){
    arrow=createSprite(540,300);
    arrow.y=bow.y;
    arrow.scale=0.3;
    arrow.velocityX=-5;
    arrow.lifetime=50;
    arrowg.add(arrow);
    return arrow;
    
}





