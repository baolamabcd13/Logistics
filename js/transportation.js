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
            
            // Xử lý scroll trong cùng trang transportation.html
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
                setActiveNav(targetId);
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
                    setActiveNav(targetId);
                }, 100);
            }
        }
    });
});