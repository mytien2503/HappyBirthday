/* ============================================
   BIRTHDAY WEBSITE - JAVASCRIPT
   ============================================ */

// ============================
// CONFIGURATION - Chỉnh sửa ở đây!
// ============================
const CONFIG = {
  // Tên người nhận lời chúc
  name: "Như Ý",

  // Lời chúc mừng sinh nhật
  wish: `Chúc mừng sinh nhật thật đặc biệt! 🎂✨
Ngày hôm nay, vũ trụ xin gửi đến bé những điều tuyệt vời nhất — sức khỏe dồi dào, niềm vui trọn vẹn và tình yêu thương ngập tràn. 💖
Như quả cà chua đỏ tươi mỗi ngày, mong bé luôn tràn đầy năng lượng và rạng rỡ sắc màu! 🍅
Một tuổi mới, một trang mới — chúc bé viết nên những câu chuyện thật đẹp và ý nghĩa. 🌸`,

  // =============================================
  // DANH SÁCH ẢNH - Thêm tên file ảnh vào đây!
  // =============================================
  // Đặt ảnh vào thư mục "images/" và thêm tên file vào mảng dưới đây.
  // Ví dụ: ["anh1.jpg", "anh2.png", "anh3.jpeg"]
  images: [
    "photo1.jpeg",
    "photo2.jpeg",
    "photo3.jpeg",
    "photo4.jpeg",
    "photo5.jpeg",
  ],

  // Tự động chuyển slide (milliseconds)
  autoSlideInterval: 3500,

  // Nhạc nền (đặt file nhạc vào thư mục "music/")
  musicFile: "music/birthday.mp3",
};

// ============================
// WISH TEXT TYPEWRITER
// ============================
function typewriterEffect(element, text, speed = 30) {
  let i = 0;
  element.textContent = '';
  const lines = text.trim().split('\n');
  let lineIndex = 0;
  let charIndex = 0;

  function type() {
    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex];
      if (charIndex < currentLine.length) {
        element.textContent += currentLine[charIndex];
        charIndex++;
        setTimeout(type, speed);
      } else {
        element.textContent += '\n';
        lineIndex++;
        charIndex = 0;
        setTimeout(type, speed * 5);
      }
    }
  }
  type();
}

// ============================
// FALLING PETALS
// ============================
function createPetals() {
  const container = document.getElementById('petals-container');
  const items = ['🌸', '🌺', '💕', '🍅', '✨', '💖', '🌷', '⭐', '🎀'];
  const count = 25;

  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = items[Math.floor(Math.random() * items.length)];
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = (0.8 + Math.random() * 1.5) + 'rem';
    petal.style.animationDuration = (5 + Math.random() * 10) + 's';
    petal.style.animationDelay = (Math.random() * 10) + 's';
    petal.style.opacity = 0.5 + Math.random() * 0.5;
    container.appendChild(petal);
  }
}

// ============================
// BUBBLES
// ============================
function createBubbles() {
  const container = document.getElementById('bubbles-container');
  const count = 15;

  for (let i = 0; i < count; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = 20 + Math.random() * 60;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = (8 + Math.random() * 15) + 's';
    bubble.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(bubble);
  }
}

// ============================
// FLOATING HEARTS (bottom section)
// ============================
function createFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  const hearts = ['💖', '💕', '💗', '💓', '❤️', '🍅'];

  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'float-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
    heart.style.animationDuration = (3 + Math.random() * 4) + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }, 600);
}

// ============================
// BLOW CANDLES
// ============================
function blowCandles() {
  const flames = document.querySelectorAll('.flame');
  flames.forEach(f => {
    f.style.opacity = '0';
    f.style.transition = 'opacity 0.5s';
  });

  // Confetti burst
  createConfetti();

  // Sparkles on cake
  const sparklesDiv = document.getElementById('sparkles');
  const icons = ['✨', '⭐', '🌟', '💥', '🎉'];
  for (let i = 0; i < 12; i++) {
    const s = document.createElement('span');
    s.className = 'sparkle';
    s.textContent = icons[Math.floor(Math.random() * icons.length)];
    const tx = (Math.random() - 0.5) * 200 + 'px';
    const ty = -(50 + Math.random() * 100) + 'px';
    s.style.setProperty('--tx', tx);
    s.style.setProperty('--ty', ty);
    s.style.left = (30 + Math.random() * 40) + '%';
    s.style.top = (10 + Math.random() * 30) + '%';
    s.style.animationDelay = (Math.random() * 0.5) + 's';
    sparklesDiv.appendChild(s);
    setTimeout(() => s.remove(), 1500);
  }

  // Relight after 3 seconds
  setTimeout(() => {
    flames.forEach(f => {
      f.style.opacity = '0.9';
    });
  }, 3000);
}

function createConfetti() {
  const colors = ['#E63946', '#FF4D6D', '#FFD700', '#FF85A1', '#9B59B6', '#FFCCD5', '#C1121F'];
  const shapes = ['■', '●', '▲', '★', '♦'];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.fontSize = (0.5 + Math.random() * 0.8) + 'rem';

    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 300;
    const cx = Math.cos(angle) * distance + 'px';
    const cy = (Math.sin(angle) * distance - 100 - Math.random() * 200) + 'px';
    piece.style.setProperty('--cx', cx);
    piece.style.setProperty('--cy', cy);
    piece.style.animationDelay = (Math.random() * 0.3) + 's';
    piece.style.animationDuration = (1 + Math.random() * 1) + 's';

    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 2500);
  }
}

// ============================
// MUSIC PLAYER
// ============================
let isMuted = false;
let isPlaying = false;
const audio = document.getElementById('bgMusic');

function toggleMusic() {
  const btn = document.getElementById('playBtn');
  if (isPlaying) {
    audio.pause();
    btn.textContent = '▶';
    isPlaying = false;
    document.getElementById('musicIcon').style.animationPlayState = 'paused';
  } else {
    audio.play().catch(() => {
      // Autoplay blocked - user must click
    });
    btn.textContent = '⏸';
    isPlaying = true;
    document.getElementById('musicIcon').style.animationPlayState = 'running';
  }
}

function toggleMute() {
  const btn = document.getElementById('muteBtn');
  isMuted = !isMuted;
  audio.muted = isMuted;
  btn.textContent = isMuted ? '🔇' : '🔊';
}

// Update progress bar
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const pct = (audio.currentTime / audio.duration) * 100;
    document.getElementById('progressFill').style.width = pct + '%';
  }
});

// Auto play on first user interaction
document.addEventListener('click', function startAudio() {
  if (!isPlaying && audio.src) {
    audio.play().then(() => {
      isPlaying = true;
      document.getElementById('playBtn').textContent = '⏸';
    }).catch(() => {});
  }
  document.removeEventListener('click', startAudio);
}, { once: true });

// ============================
// HEART SLIDER
// ============================
let currentSlideIndex = 0;
let slideTimer = null;
let slides = [];

function buildSlider() {
  const heartSlider = document.getElementById('heartSlider');
  const dotsContainer = document.getElementById('sliderDots');
  const totalEl = document.getElementById('totalSlides');

  heartSlider.innerHTML = '';
  dotsContainer.innerHTML = '';

  // Build slides from CONFIG.images
  const imageList = CONFIG.images.filter(f => f.trim() !== '');

  if (imageList.length === 0) {
    // Demo placeholders
    slides = createPlaceholderSlides();
  } else {
    slides = imageList.map((filename, i) => {
      const slide = document.createElement('div');
      slide.className = 'slide' + (i === 0 ? ' active' : '');
      const img = document.createElement('img');
      img.src = 'images/' + filename;
      img.alt = 'Ảnh ' + (i + 1);
      img.loading = 'lazy';
      img.onerror = () => {
        // Replace broken image with placeholder
        slide.innerHTML = '';
        const ph = document.createElement('div');
        ph.className = 'slide-placeholder';
        ph.innerHTML = `<div class="placeholder-icon">🍅</div><p>Ảnh ${i + 1}<br><small>${filename}</small></p>`;
        slide.appendChild(ph);
      };
      slide.appendChild(img);
      return slide;
    });
  }

  slides.forEach((slide, i) => {
    heartSlider.appendChild(slide);

    // Create dot
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  });

  totalEl.textContent = slides.length;
  updateSlideCounter();
  startAutoSlide();
}

function createPlaceholderSlides() {
  const data = [
    { icon: '📷', text: 'Ảnh 1\nĐặt file vào thư mục images/' },
    { icon: '🍅', text: 'Ảnh 2\nThêm tên file vào script.js' },
    { icon: '💖', text: 'Ảnh 3\nTrong mảng CONFIG.images' },
    { icon: '🎂', text: 'Ảnh 4\nVí dụ: "photo1.jpg"' },
    { icon: '🌸', text: 'Ảnh 5\nChúc mừng sinh nhật!' },
  ];

  return data.map((d, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' active' : '');
    const ph = document.createElement('div');
    ph.className = 'slide-placeholder';
    ph.innerHTML = `<div class="placeholder-icon">${d.icon}</div><p>${d.text.replace('\n', '<br>')}</p>`;
    slide.appendChild(ph);
    return slide;
  });
}

function goToSlide(index) {
  const dots = document.querySelectorAll('.dot');

  slides[currentSlideIndex].classList.remove('active');
  dots[currentSlideIndex]?.classList.remove('active');

  currentSlideIndex = (index + slides.length) % slides.length;

  slides[currentSlideIndex].classList.add('active');
  dots[currentSlideIndex]?.classList.add('active');
  updateSlideCounter();
}

function nextSlide() {
  goToSlide(currentSlideIndex + 1);
  resetAutoSlide();
}

function prevSlide() {
  goToSlide(currentSlideIndex - 1);
  resetAutoSlide();
}

function updateSlideCounter() {
  document.getElementById('currentSlide').textContent = currentSlideIndex + 1;
}

function startAutoSlide() {
  slideTimer = setInterval(() => {
    goToSlide(currentSlideIndex + 1);
  }, CONFIG.autoSlideInterval);
}

function resetAutoSlide() {
  clearInterval(slideTimer);
  startAutoSlide();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft')  prevSlide();
});

// Touch / swipe support for slider
let touchStartX = 0;
document.getElementById('heartSlider')?.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.getElementById('heartSlider')?.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(dx) > 40) {
    if (dx < 0) nextSlide(); else prevSlide();
  }
}, { passive: true });

// ============================
// TYPEWRITER WISH
// ============================
function initWish() {
  const wishEl = document.getElementById('wishText');
  const fullWish = CONFIG.wish;

  // Intersection observer to trigger typewriter when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typewriterEffect(wishEl, fullWish, 25);
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(wishEl);
}

// ============================
// INIT ALL
// ============================
document.addEventListener('DOMContentLoaded', () => {
  createPetals();
  createBubbles();
  createFloatingHearts();
  buildSlider();
  initWish();

  // Set music source
  if (CONFIG.musicFile) {
    audio.src = CONFIG.musicFile;
    document.getElementById('musicTitle').textContent = '🎵 Nhạc sinh nhật';
  }

  // Welcome sparkle on load
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      setTimeout(createConfetti, i * 800);
    }
  }, 500);

  console.log('%c🎂 Happy Birthday! 🎂', 'color: #E63946; font-size: 24px; font-weight: bold;');
  console.log('%c🍅 Chúc mừng sinh nhật! Trang web được tạo với ❤️', 'color: #FF4D6D; font-size: 14px;');
});
