const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const triangle = [
  { x: 100, y: 300 },
  { x: 300, y: 100 },
  { x: 500, y: 300 },
];

let ball = {
  x: triangle[0].x,
  y: triangle[0].y,
  radius: 10,
};

let currentPoint = 0;
let t = 0;

function drawTriangle() {
  ctx.beginPath();
  ctx.moveTo(triangle[0].x, triangle[0].y);
  ctx.lineTo(triangle[1].x, triangle[1].y);
  ctx.lineTo(triangle[2].x, triangle[2].y);
  // ctx.closePath();
  ctx.lineCap = 'round';
  ctx.lineWidth = 4;
  ctx.stroke();
}

function drawBall() {
  ctx.beginPath();
  ctx.ellipse(ball.x, ball.y, ball.radius, ball.radius * 0.8, 0, 0, 2 * Math.PI);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.stroke();
}

function updateBallPosition() {
  t += 0.01;
  if (t >= 1) {
    t = 0;
    currentPoint++;
    if (currentPoint >= triangle.length - 1) {
      currentPoint = 0;
    }
  }

  ball.x = triangle[currentPoint].x * (1 - t) + triangle[currentPoint + 1].x * t;
  ball.y = triangle[currentPoint].y * (1 - t) + triangle[currentPoint + 1].y * t;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTriangle();
  updateBallPosition();
  drawBall();
  requestAnimationFrame(animate);
}

animate();
