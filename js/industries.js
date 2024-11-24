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

    // Smooth scrolling for navigation items with offset
    const navItems = document.querySelectorAll('.transport-nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Find the previous divider if it exists
                const previousDivider = targetSection.previousElementSibling;
                const targetElement = previousDivider && previousDivider.classList.contains('service-divider') 
                    ? previousDivider 
                    : targetSection;

                // Get header height for offset
                const headerHeight = document.querySelector('header').offsetHeight;
                
                // Calculate the target position with offset
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20; // 20px extra padding

                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state
                navItems.forEach(navItem => navItem.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Scroll spy functionality with divider consideration
    const sections = document.querySelectorAll('.transport-service');
    window.addEventListener('scroll', function() {
        let current = '';
        const headerHeight = document.querySelector('header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < headerHeight + 100) { // 100px threshold
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Handle sidebar positioning on scroll
    const leftSidebar = document.querySelector('.transport-sidebar-left');
    const rightSidebar = document.querySelector('.transport-sidebar-right');
    const footer = document.querySelector('.main-footer');
    const mainContent = document.querySelector('.transport-main');

    function updateSidebars() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const footerTop = footer.getBoundingClientRect().top + scrollTop;
        const windowHeight = window.innerHeight;
        
        // Left sidebar
        if (leftSidebar) {
            const sidebarHeight = leftSidebar.offsetHeight;
            if (scrollTop + windowHeight > footerTop) {
                // Stop at footer
                const bottomOffset = scrollTop + windowHeight - footerTop;
                leftSidebar.style.position = 'absolute';
                leftSidebar.style.top = `${footerTop - sidebarHeight - bottomOffset}px`;
            } else {
                // Follow scroll
                leftSidebar.style.position = 'fixed';
                leftSidebar.style.top = '80px';
            }
        }

        // Right sidebar
        if (rightSidebar) {
            const sidebarHeight = rightSidebar.offsetHeight;
            if (scrollTop + windowHeight > footerTop) {
                // Stop at footer
                const bottomOffset = scrollTop + windowHeight - footerTop;
                rightSidebar.style.position = 'absolute';
                rightSidebar.style.top = `${footerTop - sidebarHeight - bottomOffset}px`;
            } else {
                // Follow scroll
                rightSidebar.style.position = 'fixed';
                rightSidebar.style.top = '80px';
            }
        }

        lastScrollTop = scrollTop;
        ticking = false;
    }

    // Throttle scroll event
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateSidebars();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Update on window resize
    window.addEventListener('resize', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateSidebars();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial position update
    updateSidebars();
});