document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.transport-nav-item');
    const sections = document.querySelectorAll('.transport-service');
    
    // Hàm để thêm active state
    function setActiveNav(currentId) {
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentId}`) {
                item.classList.add('active');
            }
        });
    }

    // Scroll spy với Intersection Observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '-20% 0px -60% 0px', // Kích hoạt khi section hiển thị 20% từ trên xuống
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveNav(entry.target.id);
            }
        });
    }, observerOptions);

    // Theo dõi tất cả các sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Click handler cho navigation với xử lý divider
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
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

                // Cập nhật active state
                setActiveNav(targetId);
            }
        });
    });

    // Thêm xử lý sticky sidebars
    const leftSidebar = document.querySelector('.transport-sidebar-left');
    const rightSidebar = document.querySelector('.transport-sidebar-right');
    const footer = document.querySelector('.main-footer');
    
    function updateSidebarPosition() {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Khoảng cách từ bottom của viewport đến top của footer
        const distanceToFooter = footerRect.top - viewportHeight;
        
        if (distanceToFooter <= 0) {
            // Khi footer xuất hiện trong viewport
            const translateY = Math.abs(distanceToFooter);
            leftSidebar.style.transform = `translateY(-${translateY}px)`;
            rightSidebar.style.transform = `translateY(-${translateY}px)`;
        } else {
            // Reset position khi footer không trong viewport
            leftSidebar.style.transform = 'translateY(0)';
            rightSidebar.style.transform = 'translateY(0)';
        }
    }

    // Thêm event listener cho scroll
    window.addEventListener('scroll', updateSidebarPosition);
    window.addEventListener('resize', updateSidebarPosition);
});