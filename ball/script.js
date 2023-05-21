const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 20,
  dx: 2,
  dy: 2,
};

function drawBall() {
  const gradient = ctx.createRadialGradient(ball.x, ball.y, 0, ball.x, ball.y, ball.radius);
  gradient.addColorStop(0, 'rgba(255, 0, 0, 1)');
  gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.closePath();
}

function updateBallPosition() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx;
  }

  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy = -ball.dy;
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  updateBallPosition();
  requestAnimationFrame(animate);
}

animate();
