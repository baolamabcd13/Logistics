// Placeholder for interactive features
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Tracking system will be implemented soon!");
  });

  // Live Chat Toggle
const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');

chatToggle.addEventListener('click', () => {
  chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
});

// Live Chat Message Send
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

document.getElementById('chat-send').addEventListener('click', () => {
  const message = chatInput.value;
  if (message.trim()) {
    const msg = document.createElement('p');
    msg.textContent = `You: ${message}`;
    chatMessages.appendChild(msg);
    chatInput.value = '';
  }
});

// Tracking System Placeholder
document.getElementById('track-btn').addEventListener('click', async (e) => {
  e.preventDefault();
  const trackingNumber = document.getElementById('tracking-input').value;
  const result = document.getElementById('tracking-result');
  
  if (trackingNumber.trim()) {
    result.innerHTML = `
      <div class="tracking-status">
        <div class="status-item active">
          <span class="status-icon">📦</span>
          <p>Đã nhận hàng</p>
          <small>Hà Nội, 10:00 AM</small>
        </div>
        <div class="status-item">
          <span class="status-icon">🚚</span>
          <p>Đang vận chuyển</p>
          <small>Dự kiến: 2-3 ngày</small>
        </div>
      </div>
    `;
  }
});

let slideIndex = 0;
const carouselInner = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
const itemCount = items.length;
const visibleItems = 3; // Số ảnh hiển thị cùng lúc

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = 0; // Không lùi quá đầu
  } else if (slideIndex > itemCount - visibleItems) {
    slideIndex = itemCount - visibleItems; // Không tiến quá cuối
  }
  updateCarousel();
}

function updateCarousel() {
  const translateX = -(slideIndex * (100 / visibleItems));
  carouselInner.style.transform = `translateX(${translateX}%)`;
}

// Thêm animation khi scroll
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('card-visible');
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => observer.observe(card));

// Animation cho statistics
function animateNumbers() {
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16);
    let current = 0;

    const updateNumber = () => {
      if (current < target) {
        current += increment;
        stat.textContent = Math.round(current).toLocaleString();
        requestAnimationFrame(updateNumber);
      } else {
        stat.textContent = target.toLocaleString();
      }
    };

    updateNumber();
  });
}

// Trigger animation khi scroll đến phần statistics
const statsSection = document.querySelector('.statistics');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateNumbers();
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

if (statsSection) {
  statsObserver.observe(statsSection);
}

// Hero Slider
class HeroSlider {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.currentSlide = 0;
    this.slideInterval = null;
    
    // Kiểm tra slides tồn tại
    if (this.slides.length === 0) {
      console.error('No slides found');
      return;
    }
    
    // Bắt đầu auto slide
    this.startSlideShow();
    
    // Pause khi hover
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.addEventListener('mouseenter', () => this.pauseSlideShow());
      hero.addEventListener('mouseleave', () => this.startSlideShow());
    }
  }
  
  goToSlide(index) {
    // Remove active class from current slide
    this.slides[this.currentSlide].classList.remove('active');
    // Add active class to new slide
    this.currentSlide = index;
    this.slides[this.currentSlide].classList.add('active');
  }
  
  nextSlide() {
    const next = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(next);
  }
  
  startSlideShow() {
    // Clear existing interval if any
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    // Start new interval with 1.5s
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 1500); // Changed to 1500ms (1.5s)
  }
  
  pauseSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }
}

// Khởi tạo slider
document.addEventListener('DOMContentLoaded', () => {
  const slider = new HeroSlider();
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.add('active');
    } else {
      document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.remove('active');
    }
  });
});

// Testimonials Slider
class TestimonialsSlider {
  constructor() {
    this.slider = document.querySelector('.testimonials-slider');
    this.cards = document.querySelectorAll('.testimonial-card');
    this.prevBtn = document.querySelector('.prev-btn');
    this.nextBtn = document.querySelector('.next-btn');
    this.currentIndex = 0;
    
    this.init();
  }

  init() {
    this.prevBtn.addEventListener('click', () => this.slide('prev'));
    this.nextBtn.addEventListener('click', () => this.slide('next'));
    
    // Auto slide
    setInterval(() => this.slide('next'), 5000);
  }

  slide(direction) {
    const cardWidth = this.cards[0].offsetWidth + 30; // width + gap
    
    if (direction === 'next') {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    } else {
      this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    }
    
    this.slider.style.transform = `translateX(-${cardWidth * this.currentIndex}px)`;
  }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new TestimonialsSlider();
});

