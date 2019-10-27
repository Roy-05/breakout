var canvas = document.getElementById("game-canvas"),
    ctx = canvas.getContext("2d"),
    ballRadius = 10,
    x = canvas.width/2,
    y = canvas.height-30,
    dx = 2,
    dy = -2,
    paddleHeight = 10,
    paddleWidth = 75,
    paddleX = (canvas.width-paddleWidth)/2,
    rightPressed = false,
    leftPressed = false;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "rgba(0,0,0,0.9)";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function keydownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.keyCode == "39"){
        rightPressed = true;
    }
    if (e.key == "Left" || e.key == "ArrowLeft" || e.keyCode == "37"){
        leftPressed = true;
    }
}

function keyupHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.keyCode == "39"){
        rightPressed = false;
    }
    if (e.key == "Left" || e.key == "ArrowLeft" || e.keyCode == "37"){
        leftPressed = false;
    }
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    if(rightPressed){
        paddleX +=5;
        if(paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth
        }

    }
    else if(leftPressed){
        paddleX -=5;
        if(paddleX < 0){
            paddleX = 0;
        }
    }
    
    x += dx;
    y += dy;
}

document.addEventListener("keydown", keydownHandler, false);
document.addEventListener("keyup", keyupHandler, false);
setInterval(draw, 10);
