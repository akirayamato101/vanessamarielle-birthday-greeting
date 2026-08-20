// =========================================================
// PAGE NAVIGATION
// =========================================================
const pages = Array.from(document.querySelectorAll('.page'));
const dots  = Array.from(document.querySelectorAll('.dot'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let current = 0;

function goToPage(index){
  if (index < 0 || index >= pages.length || index === current) return;

  const goingForward = index > current;
  pages[current].classList.remove('active');
  pages[current].classList.add(goingForward ? 'exit-left' : '');
  pages[index].classList.remove('exit-left');
  pages[index].classList.add('active');

  dots[current].classList.remove('active');
  dots[index].classList.add('active');

  current = index;
  updateArrows();
}

function updateArrows(){
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === pages.length - 1;
}

dots.forEach(dot => {
  dot.addEventListener('click', () => goToPage(parseInt(dot.dataset.goto, 10)));
});

prevBtn.addEventListener('click', () => goToPage(current - 1));
nextBtn.addEventListener('click', () => goToPage(current + 1));

document.getElementById('enterBtn').addEventListener('click', () => {
  burstConfetti();
  setTimeout(() => goToPage(1), 350);
});

// allow left/right arrow keys to browse
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') goToPage(current + 1);
  if (e.key === 'ArrowLeft')  goToPage(current - 1);
});

updateArrows();

// =========================================================
// AMBIENT BACKGROUND — floating balloons + sparkles
// =========================================================
const ambient = document.getElementById('ambient');
const balloonEmojis = ['🎈', '🎈', '🎈', '🎀'];

function spawnBalloon(){
  const b = document.createElement('span');
  b.className = 'balloon';
  b.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
  b.style.left = Math.random() * 100 + 'vw';
  b.style.fontSize = (30 + Math.random() * 30) + 'px';
  const duration = 14 + Math.random() * 10;
  b.style.animationDuration = duration + 's';
  ambient.appendChild(b);
  setTimeout(() => b.remove(), duration * 1000);
}

function spawnSparkle(){
  const s = document.createElement('span');
  s.className = 'sparkle';
  s.textContent = '✦';
  s.style.left = Math.random() * 100 + 'vw';
  s.style.top = Math.random() * 100 + 'vh';
  s.style.animationDelay = (Math.random() * 2) + 's';
  ambient.appendChild(s);
  setTimeout(() => s.remove(), 4000);
}

setInterval(spawnBalloon, 2600);
setInterval(spawnSparkle, 500);
for (let i = 0; i < 4; i++) setTimeout(spawnBalloon, i * 700);

// =========================================================
// CONFETTI BURST (cover page button)
// =========================================================
const confettiLayer = document.getElementById('confetti');
const confettiColors = ['#ff8fab', '#ffd166', '#ff5d8f', '#ffffff', '#c9184a'];

function burstConfetti(){
  for (let i = 0; i < 60; i++){
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.width = (6 + Math.random() * 6) + 'px';
    piece.style.height = (10 + Math.random() * 8) + 'px';
    piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    piece.style.animationDelay = (Math.random() * 0.4) + 's';
    piece.style.animationDuration = (1.8 + Math.random() * 1.2) + 's';
    confettiLayer.appendChild(piece);
    setTimeout(() => piece.remove(), 3200);
  }
}

// =========================================================
// MUSIC PLAYER
// =========================================================
const musicBtn = document.getElementById('musicBtn');
const bgMusic  = document.getElementById('bgMusic');
let isPlaying  = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying){
    bgMusic.pause();
    musicBtn.classList.remove('playing');
  } else {
    bgMusic.play().catch(() => {
      // Autoplay/file may be missing until the user adds music/song.mp3
      console.warn('Add your song file at music/song.mp3 to enable playback.');
    });
    musicBtn.classList.add('playing');
  }
  isPlaying = !isPlaying;
});
