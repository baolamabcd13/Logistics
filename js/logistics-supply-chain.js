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

    // Thêm xử lý cho các link trong dropdown menu
    const dropdownLinks = document.querySelectorAll('.dropdown-content a[href*="#"]');
    
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Tách URL và hash
            const [baseUrl, hash] = href.split('#');
            const targetId = hash;
            
            // Kiểm tra xem link có dẫn đến trang khác không
            if (baseUrl && !window.location.pathname.includes(baseUrl)) {
                // Nếu link dẫn đến trang khác, chuyển hướng với hash
                window.location.href = href;
                return;
            }
            
            // Xử lý scroll trong cùng trang logistics-supply-chain.html
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Tìm divider trước section
                const previousDivider = targetSection.previousElementSibling;
                const targetElement = previousDivider && previousDivider.classList.contains('service-divider') 
                    ? previousDivider 
                    : targetSection;

                // Lấy chiều cao của header
                const headerHeight = document.querySelector('header').offsetHeight;
                
                // Tính toán vị trí scroll với offset
                const scrollPosition = targetElement.offsetTop - headerHeight - 20;

                // Scroll đến vị trí đã tính
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });

                // Cập nhật active state trong navigation
                navItems.forEach(navItem => navItem.classList.remove('active'));
                navItems.forEach(navItem => {
                    if (navItem.getAttribute('href') === `#${targetId}`) {
                        navItem.classList.add('active');
                    }
                });
            }
        });
    });

    // Xử lý hash trong URL khi trang load
    window.addEventListener('load', function() {
        if (window.location.hash) {
            const targetId = window.location.hash.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const previousDivider = targetSection.previousElementSibling;
                const targetElement = previousDivider && previousDivider.classList.contains('service-divider') 
                    ? previousDivider 
                    : targetSection;

                const headerHeight = document.querySelector('header').offsetHeight;
                const scrollPosition = targetElement.offsetTop - headerHeight - 20;

                // Đợi một chút để đảm bảo trang đã load hoàn toàn
                setTimeout(() => {
                    window.scrollTo({
                        top: scrollPosition,
                        behavior: 'smooth'
                    });
                    // Cập nhật active state
                    navItems.forEach(navItem => navItem.classList.remove('active'));
                    navItems.forEach(navItem => {
                        if (navItem.getAttribute('href') === `#${targetId}`) {
                            navItem.classList.add('active');
                        }
                    });
                }, 100);
            }
        }
    });
});