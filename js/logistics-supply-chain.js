document.addEventListener('DOMContentLoaded', function() {
    // Handle sidebar navigation
    const navItems = document.querySelectorAll('.transport-nav-item');
    const sections = document.querySelectorAll('.transport-service');
    const leftSidebar = document.querySelector('.transport-sidebar-left');
    const rightSidebar = document.querySelector('.transport-sidebar-right');
    const footer = document.querySelector('.main-footer');
    const leftSidebarTop = leftSidebar.offsetTop;
    const rightSidebarTop = rightSidebar.offsetTop;

    // Update active nav item based on scroll position
    function updateActiveNavItem() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight/3)) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === currentSection) {
                item.classList.add('active');
            }
        });
    }

    // Handle sidebar positions
    function updateSidebarPositions() {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Left Sidebar
        if (scrollY > leftSidebarTop) {
            leftSidebar.classList.add('sticky');
            
            // Check if footer is in view
            if (footerRect.top < windowHeight) {
                const difference = windowHeight - footerRect.top;
                leftSidebar.style.transform = `translateY(-${difference}px)`;
            } else {
                leftSidebar.style.transform = 'translateY(0)';
            }
        } else {
            leftSidebar.classList.remove('sticky');
            leftSidebar.style.transform = 'translateY(0)';
        }

        // Right Sidebar
        if (scrollY > rightSidebarTop) {
            rightSidebar.classList.add('sticky');
            
            // Check if footer is in view
            if (footerRect.top < windowHeight) {
                const difference = windowHeight - footerRect.top;
                rightSidebar.style.transform = `translateY(-${difference}px)`;
            } else {
                rightSidebar.style.transform = 'translateY(0)';
            }
        } else {
            rightSidebar.classList.remove('sticky');
            rightSidebar.style.transform = 'translateY(0)';
        }
    }

    // Smooth scroll to section when clicking nav items
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Find the previous divider if it exists
                const previousDivider = targetSection.previousElementSibling;
                const targetElement = previousDivider && previousDivider.classList.contains('service-divider') 
                    ? previousDivider 
                    : targetSection;

                // Get header height for offset
                const headerHeight = document.querySelector('header').offsetHeight;
                
                // Calculate scroll position with consideration for header and some padding
                const scrollPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });

                // Update active state
                navItems.forEach(navItem => navItem.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Listen for scroll events
    window.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
            updateActiveNavItem();
            updateSidebarPositions();
        });
    });
    
    // Listen for window resize
    window.addEventListener('resize', () => {
        requestAnimationFrame(updateSidebarPositions);
    });
    
    // Initial checks
    updateActiveNavItem();
    updateSidebarPositions();
});