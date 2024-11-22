import { LanguageSwitcher } from './translations.js';

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
    // Start new interval
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // 3 seconds
  }
  
  pauseSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }
}

// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    // Global settings
    duration: 800, // Animation duration
    easing: 'ease-out-cubic', // Animation easing
    once: true, // Set to false to make animations repeat
    offset: 120, // Offset (in px) from the original trigger point
    delay: 0, // Default delay
    mirror: true, // Whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
  });

  const slider = new HeroSlider();
  const langSwitcher = new LanguageSwitcher();
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');

if (sections.length > 0) {
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`nav ul li a[href*=${sectionId}]`);
      
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });
}

// Slider Navigation
document.addEventListener('DOMContentLoaded', () => {
  const sliderContainers = document.querySelectorAll('.slider-container');
  
  sliderContainers.forEach(container => {
    const sliderWrapper = container.querySelector('.services-wrapper');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    if (sliderWrapper && prevBtn && nextBtn) {
      let currentIndex = 0;
      let isAnimating = false;
      const cards = sliderWrapper.querySelectorAll('.service-card');
      const totalCards = cards.length;
      
      // Clone cards for infinite scroll
      cards.forEach(card => {
        const clone = card.cloneNode(true);
        sliderWrapper.appendChild(clone);
      });
      
      // Clone cards at the beginning for smooth prev scroll
      [...cards].reverse().forEach(card => {
        const clone = card.cloneNode(true);
        sliderWrapper.insertBefore(clone, sliderWrapper.firstChild);
      });
      
      // Calculate slide width
      const card = cards[0];
      const slideWidth = card.offsetWidth + 20; // card width + gap
      
      // Initialize scroll position
      sliderWrapper.scrollLeft = totalCards * slideWidth;
      
      const scrollToIndex = (index, smooth = true) => {
        if (isAnimating) return;
        isAnimating = true;
        
        sliderWrapper.style.scrollBehavior = smooth ? 'smooth' : 'auto';
        sliderWrapper.scrollLeft = slideWidth * (index + totalCards);
        
        // Reset position after animation
        setTimeout(() => {
          if (index >= totalCards) {
            sliderWrapper.style.scrollBehavior = 'auto';
            currentIndex = 0;
            sliderWrapper.scrollLeft = totalCards * slideWidth;
          } else if (index < 0) {
            sliderWrapper.style.scrollBehavior = 'auto';
            currentIndex = totalCards - 1;
            sliderWrapper.scrollLeft = (totalCards * 2 - 1) * slideWidth;
          }
          sliderWrapper.style.scrollBehavior = 'smooth';
          isAnimating = false;
        }, 500);
      };
      
      prevBtn.addEventListener('click', () => {
        if (!isAnimating) {
          currentIndex--;
          scrollToIndex(currentIndex);
        }
      });
      
      nextBtn.addEventListener('click', () => {
        if (!isAnimating) {
          currentIndex++;
          scrollToIndex(currentIndex);
        }
      });

      // Update on scroll
      sliderWrapper.addEventListener('scroll', () => {
        if (!isAnimating) {
          const scrollPosition = sliderWrapper.scrollLeft;
          currentIndex = Math.round(scrollPosition / slideWidth) - totalCards;
        }
      });

      // Update on window resize
      window.addEventListener('resize', () => {
        const newSlideWidth = card.offsetWidth + 20;
        sliderWrapper.style.scrollBehavior = 'auto';
        sliderWrapper.scrollLeft = (currentIndex + totalCards) * newSlideWidth;
        sliderWrapper.style.scrollBehavior = 'smooth';
      });
    }
  });
});

// Thêm vào cuối file script.js
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('serviceModal');
  // Kiểm tra xem modal có tồn tại không
  if (modal) {
    const modalImage = modal.querySelector('.modal-image img');
    const modalTitle = modal.querySelector('.modal-text h2');
    const modalDescription = modal.querySelector('.modal-description');
    
    // Service details data
    const serviceDetails = {
      "Air Freight": {
        description: `
          <p>Our comprehensive air freight services provide fast and reliable global shipping solutions:</p>
          <ul>
            <li>Express air freight solutions</li>
            <li>Door-to-door delivery services</li>
            <li>Temperature-controlled cargo handling</li>
            <li>Dangerous goods handling capabilities</li>
            <li>Real-time shipment tracking</li>
            <li>24/7 customer support</li>
            <li>Customs clearance assistance</li>
            <li>Cargo insurance options</li>
            <li>Charter services for urgent shipments</li>
            <li>Consolidation services</li>
          </ul>
          <p>Our partnerships with major airlines ensure reliable and efficient air transportation worldwide.</p>
        `
      },
      "Sea Freight": {
        description: `
          <p>Our sea freight services offer cost-effective solutions for international shipping:</p>
          <ul>
            <li>FCL (Full Container Load) services</li>
            <li>LCL (Less than Container Load) consolidation</li>
            <li>Break bulk cargo handling</li>
            <li>Port-to-port and door-to-door delivery</li>
            <li>Refrigerated container solutions</li>
            <li>Dangerous goods handling</li>
            <li>Real-time container tracking</li>
            <li>Port operations management</li>
            <li>Custom clearance services</li>
            <li>Marine cargo insurance</li>
          </ul>
          <p>We work with leading shipping lines to provide reliable ocean freight solutions globally.</p>
        `
      },
      "Land Transport": {
        description: `
          <p>Our comprehensive land transport services include:</p>
          <ul>
            <li>Domestic trucking services</li>
            <li>Cross-border transportation</li>
            <li>Intermodal solutions</li>
            <li>Temperature-controlled transport</li>
            <li>GPS tracking systems</li>
            <li>Express delivery options</li>
            <li>Heavy haul and oversized cargo</li>
            <li>Last-mile delivery services</li>
            <li>Multi-drop distribution</li>
            <li>Warehousing and distribution</li>
          </ul>
          <p>Our extensive network ensures reliable ground transportation across the region.</p>
        `
      },
      "Warehousing": {
        description: `
          <p>Our modern warehousing solutions provide:</p>
          <ul>
            <li>Temperature-controlled storage</li>
            <li>Inventory management systems</li>
            <li>Order fulfillment services</li>
            <li>Cross-docking facilities</li>
            <li>Pick and pack services</li>
            <li>Quality control inspections</li>
            <li>Value-added services</li>
            <li>24/7 security monitoring</li>
            <li>Barcode scanning systems</li>
            <li>Real-time inventory tracking</li>
          </ul>
          <p>State-of-the-art facilities ensuring secure and efficient storage solutions.</p>
        `
      },
      "Supply Chain": {
        description: `
          <p>Our end-to-end supply chain solutions include:</p>
          <ul>
            <li>Supply chain consulting</li>
            <li>Network optimization</li>
            <li>Inventory management</li>
            <li>Demand planning</li>
            <li>Order management</li>
            <li>Returns management</li>
            <li>Supply chain visibility</li>
            <li>Risk management</li>
            <li>Performance analytics</li>
            <li>Sustainable solutions</li>
          </ul>
          <p>Optimizing your supply chain for maximum efficiency and reliability.</p>
        `
      },
      "Custom Clearance": {
        description: `
          <p>Our customs clearance services provide:</p>
          <ul>
            <li>Import/Export documentation</li>
            <li>Customs compliance consulting</li>
            <li>Tariff classification</li>
            <li>Duty and tax calculation</li>
            <li>License and permit management</li>
            <li>Free Trade Agreement consulting</li>
            <li>Customs bond services</li>
            <li>Remote filing services</li>
            <li>24/7 customs support</li>
            <li>Post-entry services</li>
          </ul>
          <p>Expert customs solutions ensuring smooth international trade operations.</p>
        `
      }
    };

    // Hàm lấy width của scrollbar
    const getScrollbarWidth = () => {
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.overflow = 'scroll';
      document.body.appendChild(outer);
      
      const inner = document.createElement('div');
      outer.appendChild(inner);
      
      const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
      outer.parentNode.removeChild(outer);
      
      return scrollbarWidth;
    };

    // Open modal with animation
    document.querySelectorAll('.learn-more').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const card = button.closest('.service-card');
        const title = card.querySelector('h3').textContent;
        const iconClass = card.querySelector('.service-icon i').className;
        
        modalTitle.textContent = title;
        // Cập nhật icon
        const modalIcon = modal.querySelector('.modal-icon i');
        modalIcon.className = iconClass;
        
        modalDescription.innerHTML = serviceDetails[title]?.description || 
          'Detailed information about this service will be available soon.';
        
        // Show modal with animation
        modal.style.display = 'flex';
        document.body.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);
        document.body.classList.add('modal-open');
        
        requestAnimationFrame(() => {
          modal.classList.add('active');
        });
      });
    });

    // Close modal with animation
    const closeModal = () => {
      modal.classList.add('closing');
      modal.classList.remove('active');
      
      // Wait for animation to complete before hiding
      setTimeout(() => {
        modal.classList.remove('closing');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }, 300);
    };

    // Close button click handler
    const closeButton = modal.querySelector('.close-modal');
    if (closeButton) {
      closeButton.addEventListener('click', closeModal);
    }
    
    // Click outside modal to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }
});

