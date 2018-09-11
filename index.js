var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var boy = new Image();
var bg = new Image();
var girl = new Image();
var father = new Image();
var mother = new Image();
var stoneimg = new Image();

boy.src = "images/boy.jpg";
mother.src = "images/mother.png";
girl.src = "images/girl.png";
father.src = "images/father1.png";
stoneimg.src = "images/stone1.jpg";


var gap = 85;
var constant;
var bX = 10;
var bY = cvs.height-200;
var gX=cvs.width-100;
var gY=cvs.height-200;

var gravity = 2.4;

var score = 0;


document.addEventListener("keydown",moveUp);

function moveUp(){
	if(bY>=20){
    bY -= 25;
    }
}


var stone = [];

stone[0] = {
    x : cvs.width,
    y : cvs.height-200,
};


function draw(){
    
   
     ctx.fillStyle = "pink";
     ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for(var i = 0; i < stone.length; i++){
    
    	bX=bX+Math.random();
    	bX=bX-(Math.random()*0.8);
        
        if(i%3==0){
        	ctx.drawImage(father,stone[i].x,stone[i].y-38);
        }
        else if (i%2==0){
        	ctx.drawImage(mother,stone[i].x,stone[i].y-44);
        }
        else{
        	ctx.drawImage(stoneimg,stone[i].x,stone[i].y+40);
        }
             
        stone[i].x--;
        
        if( stone[i].x ==600 ){
            stone.push({
                x : cvs.width,
                y : cvs.height-200
            }); 
        }


 ctx.drawImage(girl,bX,bY+10);
 ctx.drawImage(boy,gX,gY+50);
    if (bY<cvs.height-200) {
    	bY=bY+gravity;	
    } 
        
        if( bX + girl.width >= stone[i].x && bX <= stone[i].x + stoneimg.width && (bY+girl.height >= stone[i].y)){
            
            document.getElementById('gamecontent').innerHTML="You messed it up one of your parents might have caught you!Though the life will keep moving you should Retry do it again I will not consider it.";
            
        }

        if(bX>=gX && bY+girl.height >= gY){
        	
            document.getElementById('gamecontent').innerHTML="Congratulations you caught your boyfriend!Let your parents move they are not able to caught u now.";

        }
       
        
        
    }    
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-20);
    ctx.fillStyle="#efefef";
    ctx.fillRect(0,471, canvas.width, 200);
    
    requestAnimationFrame(draw);
    
}

draw();
function restart(){
	location.reload();
}

function lost(){

}