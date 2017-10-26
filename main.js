var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var mouseX = 0;
var mouseY = 0;
//var radius = 100;
var mouseC = false;

//if mousedown
//mouseC = true
//draw when the mouseC is ture
function mDOWN(){
	mouseC = true;
}

function mUP(){
	mouseC = false;
}

window.addEventListener('mousedown',mDOWN);
window.addEventListener('mouseup',mUP);


function resizeCanvas(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

function updateMouseXY(e){

  mouseX = e.x;
  mouseY = e.y;
}
function ranColor(){
  var r = Math.floor(Math.random()*255);
  var g = Math.floor(Math.random()*150);
  var b = Math.floor(Math.random()*100);
return `rgb(${r},${g},${b})`;
}


window.addEventListener('resize', resizeCanvas);
window.addEventListener('mousemove', updateMouseXY);
resizeCanvas();

function draw(){


  if( mouseC == true ){
    ctx.beginPath();
    ctx.moveTo(mouseX+10,mouseY);

    ctx.lineTo(mouseX++,mouseY);
    ctx.lineTo(mouseX,mouseY);
    ctx.lineTo(mouseX,mouseY);
    ctx.closePath();
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.strokeStyle = ranColor();
    ctx.stroke();
    ctx.lineWidth = 2;

  } else {
    //ctx.fillStyle = 'white';
    //ctx.fillRect(0,0,canvas.width,canvas.height);
    //ctx.font = 'bold 20px Futura';
    //ctx.fillStyle = '#f88366';
    //ctx.lineWidth = 2;
    ctx.fillText('ʅ(‾◡◝)', mouseX, mouseY);

}


  // ctx.beginPath();
  // ctx.fillStyle = 'white';
  // ctx.fillRect(0,0,canvas.width,canvas.height);
  // radius--;
  // if (radius <= 0 ) {
  //  console.log(radius++);
  //
  // }
  // ctx.moveTo(mouseX+10,mouseY-5);
  //
  // ctx.lineTo(mouseX++,mouseY--);
  // //
  // ctx.lineTo(mouseX,mouseY);
  // ctx.lineTo(mouseX,mouseY);

  //ctx.arc(mouseX,mouseY,radius,0,Math.PI*2);
  //这个同理可以替换成图片 吧

  // ctx.closePath();
  // ctx.fillStyle = 'blue';
  // ctx.fill();
  // ctx.strokeStyle = ranColor();
  // ctx.stroke();
  // ctx.lineWidth = 2;

  //setTimeout(draw,1000/5);
  requestAnimationFrame(draw);
}
draw();
