document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // Global variables for scroll handling
    let lastScrollTop = 0;
    let ticking = false;

    // Fix navigation links
    const navItems = document.querySelectorAll('.transport-nav-item');
    const sections = document.querySelectorAll('.transport-service');

    // Scroll handling for navigation items
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section id from href
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Get header height for offset
                const headerHeight = document.querySelector('header').offsetHeight;
                
                // Calculate scroll position
                const scrollPosition = targetSection.offsetTop - headerHeight - 20;

                // Smooth scroll to target
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });

                // Update active state
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Scroll spy functionality
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Update navigation active state
                const currentId = entry.target.id;
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${currentId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Handle sticky sidebars
    const leftSidebar = document.querySelector('.transport-sidebar-left');
    const rightSidebar = document.querySelector('.transport-sidebar-right');
    const footer = document.querySelector('.main-footer');

    function updateSidebarPositions() {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const distanceToFooter = footerRect.top - viewportHeight;

        if (distanceToFooter <= 0) {
            const translateY = Math.abs(distanceToFooter);
            leftSidebar.style.transform = `translateY(-${translateY}px)`;
            rightSidebar.style.transform = `translateY(-${translateY}px)`;
        } else {
            leftSidebar.style.transform = 'translateY(0)';
            rightSidebar.style.transform = 'translateY(0)';
        }
    }

    // Add scroll and resize event listeners
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateSidebarPositions();
                ticking = false;
            });
            ticking = true;
        }
    });

    window.addEventListener('resize', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateSidebarPositions();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial sidebar position update
    updateSidebarPositions();

    // Dropdown menu handling
    const dropdownToggles = document.querySelectorAll('.service-dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const serviceCard = this.closest('.service-card');
            const dropdownContent = serviceCard.querySelector('.service-dropdown-content');
            
            this.classList.toggle('active');
            
            if (dropdownContent.style.maxHeight) {
                dropdownContent.style.maxHeight = null;
                dropdownContent.style.opacity = '0';
            } else {
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
                dropdownContent.style.opacity = '1';
            }
            
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    otherToggle.classList.remove('active');
                    const otherContent = otherToggle.closest('.service-card')
                        .querySelector('.service-dropdown-content');
                    otherContent.style.maxHeight = null;
                    otherContent.style.opacity = '0';
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.service-card')) {
            dropdownToggles.forEach(toggle => {
                toggle.classList.remove('active');
                const dropdownContent = toggle.closest('.service-card')
                    .querySelector('.service-dropdown-content');
                dropdownContent.style.maxHeight = null;
                dropdownContent.style.opacity = '0';
            });
        }
    });
});