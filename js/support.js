document.addEventListener('DOMContentLoaded', () => {
    // Support search functionality
    const searchInput = document.querySelector('.sp-search-container input');
    const searchButton = document.querySelector('.sp-search-btn');
    const guidesGrid = document.querySelector('.sp-guides-grid');
    const categoriesGrid = document.querySelector('.sp-categories-grid');

    // Hàm tìm kiếm
    function performSearch(searchTerm) {
        searchTerm = searchTerm.toLowerCase().trim();
        
        // Nếu không có từ khóa tìm kiếm, hiển thị lại tất cả
        if (!searchTerm) {
            showAllContent();
            return;
        }

        // Tìm trong guides
        const guideCards = document.querySelectorAll('.sp-guide-card');
        guideCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.sp-steps').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Tìm trong categories
        const categoryCards = document.querySelectorAll('.sp-category-card');
        categoryCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Hiển thị thông báo nếu không tìm thấy kết quả
        const visibleGuides = [...guideCards].filter(card => card.style.display !== 'none');
        const visibleCategories = [...categoryCards].filter(card => card.style.display !== 'none');

        if (visibleGuides.length === 0 && visibleCategories.length === 0) {
            showNoResults();
        } else {
            hideNoResults();
        }
    }

    // Hiển thị lại tất cả content
    function showAllContent() {
        const allCards = document.querySelectorAll('.sp-guide-card, .sp-category-card');
        allCards.forEach(card => card.style.display = 'block');
        hideNoResults();
    }

    // Hiển th thông báo không tìm thấy kết quả
    function showNoResults() {
        let noResults = document.querySelector('.sp-no-results');
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.className = 'sp-no-results';
            noResults.innerHTML = `
                <div class="sp-no-results-content">
                    <i class="fas fa-search"></i>
                    <h3>Không tìm thấy kết quả</h3>
                    <p>Vui lòng thử lại với từ khóa khác</p>
                </div>
            `;
            guidesGrid.parentNode.insertBefore(noResults, guidesGrid);
        }
        noResults.style.display = 'block';
    }

    // Ẩn thông báo không tìm thấy kết quả
    function hideNoResults() {
        const noResults = document.querySelector('.sp-no-results');
        if (noResults) {
            noResults.style.display = 'none';
        }
    }

    // Category content for modals
    const categoryContent = {
        shipping: {
            title: "Shipping & Tracking Support",   
            overview: `
                <div class="sp-overview-section">
                    <h2>Shipping Services & Information</h2>
                    <p>Fast and reliable shipping solutions for your needs</p>

                    <div class="sp-delivery-options">
                        <h3>
                            <i class="fas fa-truck"></i>
                            Delivery Options
                        </h3>
                        <ul>
                            <li><i class="fas fa-clock"></i>Express Delivery (1-3 days)</li>
                            <li><i class="fas fa-calendar"></i>Standard Shipping (3-7 days)</li>
                            <li><i class="fas fa-globe"></i>International Shipping</li>
                            <li><i class="fas fa-home"></i>Door-to-Door Service</li>
                        </ul>
                    </div>

                    <div class="sp-tracking-services">
                        <h3>
                            <i class="fas fa-map-marker-alt"></i>
                            Tracking Services
                        </h3>
                        <ul>
                            <li><i class="fas fa-satellite"></i>Real-time Tracking</li>
                            <li><i class="fas fa-sms"></i>SMS Notifications</li>
                            <li><i class="fas fa-envelope"></i>Email Updates</li>
                            <li><i class="fas fa-check-circle"></i>Delivery Confirmation</li>
                        </ul>
                    </div>
                </div>
            `,
            guide: `
                <div class="sp-guide-section">
                    <h3>How to Track Your Shipment</h3>
                    <ul class="sp-guide-steps">
                        <li>
                            <h4>Enter Tracking Number</h4>
                            <p>Find your tracking number in your shipping confirmation email or receipt</p>
                        </li>
                        <li>
                            <h4>Choose Tracking Method</h4>
                            <p>Use our website, mobile app, or SMS service to track your package</p>
                        </li>
                        <li>
                            <h4>View Status Updates</h4>
                            <p>Get real-time updates on your shipment's location and estimated delivery time</p>
                        </li>
                        <li>
                            <h4>Receive Notifications</h4>
                            <p>Set up email or SMS alerts for important status changes</p>
                        </li>
                    </ul>

                    <div class="sp-guide-tips">
                        <h4><i class="fas fa-lightbulb"></i>Pro Tips</h4>
                        <ul>
                            <li>Save your tracking number for quick access</li>
                            <li>Enable push notifications in our mobile app</li>
                            <li>Check delivery instructions before shipping</li>
                            <li>Contact support if tracking is not updating</li>
                        </ul>
                    </div>
                </div>
            `
        },
        billing: {
            title: "Billing & Payment Solutions",
            overview: `
                <div class="sp-overview-section">
                    <div class="sp-overview-header">
                        <h2>Payment Methods & Billing Information</h2>
                        <p class="sp-lead-text">Simple and secure payment options for your shipping needs</p>
                    </div>

                    <div class="sp-features-grid">
                        <div class="sp-feature-card">
                            <i class="fas fa-credit-card"></i>
                            <h4>Payment Options</h4>
                            <ul class="sp-feature-list">
                                <li>Credit/Debit Cards</li>
                                <li>Bank Transfer</li>
                                <li>Digital Wallets</li>
                                <li>Cash on Delivery</li>
                            </ul>
                        </div>

                        <div class="sp-feature-card">
                            <i class="fas fa-file-invoice-dollar"></i>
                            <h4>Billing Documents</h4>
                            <ul class="sp-feature-list">
                                <li>Digital Invoices</li>
                                <li>Payment Receipts</li>
                                <li>Monthly Statements</li>
                                <li>Tax Documents</li>
                            </ul>
                        </div>

                        <div class="sp-feature-card">
                            <i class="fas fa-shield-alt"></i>
                            <h4>Secure Transactions</h4>
                            <ul class="sp-feature-list">
                                <li>Encrypted Payments</li>
                                <li>Secure Processing</li>
                                <li>Fraud Protection</li>
                                <li>24/7 Monitoring</li>
                            </ul>
                        </div>
                    </div>

                    <div class="sp-contact-info">
                        <h4>Need Help?</h4>
                        <div class="sp-contact-options">
                            <div class="sp-contact-option">
                                <i class="fas fa-phone"></i>
                                <p>Call us: +84 899-498-589</p>
                            </div>
                            <div class="sp-contact-option">
                                <i class="fas fa-envelope"></i>
                                <p>Email: billing@logitrack.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            guide: `
                <div class="sp-guide-section">
                    <div class="sp-guide-header">
                        <h3>Payment Guide</h3>
                        <p class="sp-guide-intro">Simple steps to manage your payments</p>
                    </div>

                    <div class="sp-step-guide">
                        <div class="sp-step">
                            <div class="sp-step-header">
                                <div class="sp-step-number">1</div>
                                <h4>Choose Payment Method</h4>
                            </div>
                            <div class="sp-step-content">
                                <ul class="sp-step-list">
                                    <li>Select your preferred payment option</li>
                                    <li>Ensure your payment details are correct</li>
                                    <li>Verify the shipping cost</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sp-step">
                            <div class="sp-step-header">
                                <div class="sp-step-number">2</div>
                                <h4>Complete Payment</h4>
                            </div>
                            <div class="sp-step-content">
                                <ul class="sp-step-list">
                                    <li>Review your order details</li>
                                    <li>Confirm payment amount</li>
                                    <li>Process secure payment</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sp-step">
                            <div class="sp-step-header">
                                <div class="sp-step-number">3</div>
                                <h4>Get Receipt</h4>
                            </div>
                            <div class="sp-step-content">
                                <ul class="sp-step-list">
                                    <li>Receive payment confirmation</li>
                                    <li>Download digital receipt</li>
                                    <li>Keep for your records</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="sp-guide-tips">
                        <h4><i class="fas fa-lightbulb"></i>Payment Tips</h4>
                        <ul>
                            <li>Save preferred payment methods for faster checkout</li>
                            <li>Enable email notifications for payment confirmations</li>
                            <li>Keep your billing information updated</li>
                            <li>Contact support for any payment issues</li>
                        </ul>
                    </div>
                </div>
            `
        },
        claims: {
            title: "Claims & Returns Support",
            overview: `
                <div class="sp-overview-section">
                    <div class="sp-overview-header">
                        <h2>Claims & Returns Process</h2>
                        <p class="sp-lead-text">Easy and efficient handling of claims and returns</p>
                    </div>

                    <div class="sp-features-grid">
                        <div class="sp-feature-card">
                            <i class="fas fa-box-open"></i>
                            <h4>Types of Claims</h4>
                            <ul class="sp-feature-list">
                                <li>Damaged Packages</li>
                                <li>Lost Shipments</li>
                                <li>Delayed Delivery</li>
                                <li>Wrong Delivery</li>
                            </ul>
                        </div>

                        <div class="sp-feature-card">
                            <i class="fas fa-undo-alt"></i>
                            <h4>Return Options</h4>
                            <ul class="sp-feature-list">
                                <li>Drop-off Points</li>
                                <li>Pickup Service</li>
                                <li>Return Labels</li>
                                <li>International Returns</li>
                            </ul>
                        </div>

                        <div class="sp-feature-card">
                            <i class="fas fa-clipboard-check"></i>
                            <h4>Claim Process</h4>
                            <ul class="sp-feature-list">
                                <li>Online Filing</li>
                                <li>Document Upload</li>
                                <li>Status Tracking</li>
                                <li>Resolution Updates</li>
                            </ul>
                        </div>
                    </div>

                    <div class="sp-important-info">
                        <h4><i class="fas fa-exclamation-circle"></i> Important Information</h4>
                        <ul class="sp-info-list">
                            <li>File claims within 7 days of delivery</li>
                            <li>Keep original packaging for damage claims</li>
                            <li>Photos required for damage evidence</li>
                            <li>Track claim status online</li>
                        </ul>
                    </div>
                </div>
            `,
            guide: `
                <div class="sp-guide-section">
                    <h3>How to File a Claim</h3>
                    <div class="sp-step-guide">
                        <div class="sp-step">
                            <div class="sp-step-header">
                                <div class="sp-step-number">1</div>
                                <h4>Gather Information</h4>
                            </div>
                            <div class="sp-step-content">
                                <ul class="sp-step-list">
                                    <li>Tracking number</li>
                                    <li>Shipping date</li>
                                    <li>Damage/loss details</li>
                                    <li>Photos of damage (if applicable)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sp-step">
                            <div class="sp-step-header">
                                <div class="sp-step-number">2</div>
                                <h4>Submit Claim</h4>
                            </div>
                            <div class="sp-step-content">
                                <ul class="sp-step-list">
                                    <li>Fill out claim form</li>
                                    <li>Upload documentation</li>
                                    <li>Provide contact details</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sp-step">
                            <div class="sp-step-header">
                                <div class="sp-step-number">3</div>
                                <h4>Track Progress</h4>
                            </div>
                            <div class="sp-step-content">
                                <ul class="sp-step-list">
                                    <li>Check claim status online</li>
                                    <li>Respond to inquiries promptly</li>
                                    <li>Await resolution</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="sp-guide-tips">
                        <h4><i class="fas fa-lightbulb"></i>Claim Handling Tips</h4>
                        <ul>
                            <li>Take photos of items immediately upon receipt if damage is suspected</li>
                            <li>Keep all receipts and related documents</li>
                            <li>Provide detailed and accurate information in your claim</li>
                            <li>Regularly monitor your claim status</li>
                        </ul>
                    </div>
                </div>
            `
        },
        technical: {
            title: "Technical Support",
            overview: `
                <div class="sp-overview-section">
                    <div class="sp-overview-header">
                        <h2>Technical Support & Solutions</h2>
                        <p class="sp-lead-text">Expert technical assistance for all your shipping needs</p>
                    </div>

                    <div class="sp-system-requirements">
                        <h3><i class="fas fa-laptop-code"></i> System Requirements</h3>
                        <div class="sp-requirements-grid">
                            <div class="sp-req-item">
                                <i class="fas fa-desktop"></i>
                                <h5>Desktop App</h5>
                                <ul>
                                    <li>Windows 10/11</li>
                                    <li>macOS 10.15+</li>
                                    <li>4GB RAM</li>
                                    <li>500MB Space</li>
                                </ul>
                            </div>

                            <div class="sp-req-item">
                                <i class="fas fa-mobile-alt"></i>
                                <h5>Mobile App</h5>
                                <ul>
                                    <li>iOS 13.0+</li>
                                    <li>Android 8.0+</li>
                                    <li>100MB Space</li>
                                </ul>
                            </div>

                            <div class="sp-req-item">
                                <i class="fas fa-globe"></i>
                                <h5>Web Platform</h5>
                                <ul>
                                    <li>Chrome 90+</li>
                                    <li>Firefox 88+</li>
                                    <li>Safari 14+</li>
                                    <li>Edge 90+</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="sp-tech-support-options">
                        <h3><i class="fas fa-headset"></i> Support Options</h3>
                        <div class="sp-features-grid">
                            <div class="sp-feature-card">
                                <i class="fas fa-tools"></i>
                                <h4>Technical Issues</h4>
                                <ul class="sp-feature-list">
                                    <li>App Troubleshooting</li>
                                    <li>Login Problems</li>
                                    <li>Integration Support</li>
                                    <li>API Assistance</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-book"></i>
                                <h4>Resources</h4>
                                <ul class="sp-feature-list">
                                    <li>User Guides</li>
                                    <li>API Documentation</li>
                                    <li>Video Tutorials</li>
                                    <li>FAQs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            guide: `
                <div class="sp-guide-section">
                    <h3>Technical Troubleshooting Guide</h3>
                    <div class="sp-step-guide">
                        <div class="sp-step">
                            <div class="sp-step-header">
                                <div class="sp-step-number">1</div>
                                <h4>Basic Troubleshooting</h4>
                            </div>
                            <div class="sp-step-content">
                                <ul class="sp-step-list">
                                    <li>Clear browser cache</li>
                                    <li>Update app to latest version</li>
                                    <li>Check internet connection</li>
                                    <li>Verify system requirements</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sp-step">
                            <div class="sp-step-header">
                                <div class="sp-step-number">2</div>
                                <h4>Advanced Solutions</h4>
                            </div>
                            <div class="sp-step-content">
                                <ul class="sp-step-list">
                                    <li>Check error logs</li>
                                    <li>Test on different devices</li>
                                    <li>Verify API credentials</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="sp-tech-note">
                        <i class="fas fa-info-circle"></i>
                        <p>For developer support and API integration, please refer to our Developer Portal</p>
                    </div>
                </div>
            `
        }
    };

    // Modal handling
    const modal = document.getElementById('sp-categoryModal');
    const learnMoreButtons = document.querySelectorAll('.sp-learn-more-btn');
    
    // Debug log
    console.log('Found learn more buttons:', learnMoreButtons.length);

    learnMoreButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryCard = btn.closest('.sp-category-card');
            if (categoryCard) {
                const category = categoryCard.dataset.category;
                console.log('Opening modal for category:', category);
                openModal(category);
            } else {
                console.error('No parent category card found');
            }
        });
    });

    function openModal(category) {
        if (!modal) {
            console.error('Modal element not found');
            return;
        }

        // Lấy ngôn ngữ hiện tại
        const currentLang = document.querySelector('.lang-selector .active').textContent.toLowerCase() === 'vie' ? 'vi' : 'en';
        
        // Lấy nội dung theo ngôn ngữ
        const content = currentLang === 'vi' ? 
            categoryTranslations[category]?.vi : 
            categoryTranslations[category]?.en;

        if (!content) {
            console.error('No content found for category:', category);
            return;
        }

        // Cập nhật nội dung modal
        const modalTitle = modal.querySelector('.sp-modal-title');
        const overviewSection = document.getElementById('sp-overview');
        const guideSection = document.getElementById('sp-guide');

        if (modalTitle) modalTitle.textContent = content.title;
        if (overviewSection) overviewSection.innerHTML = content.overview;
        if (guideSection) guideSection.innerHTML = content.guide;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close modal functionality
    const closeButton = modal?.querySelector('.sp-close-modal');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            closeModal();
        });
    }

    // Close on outside click
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal?.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });

    // Tab handling
    const tabButtons = document.querySelectorAll('.sp-tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            switchTab(tab);
        });
    });

    function switchTab(tabId) {
        // Update active states
        document.querySelector('.sp-tab-btn.active').classList.remove('active');
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
        
        document.querySelector('.sp-tab-pane.active').classList.remove('active');
        document.getElementById(tabId).classList.add('active');
    }

    // Guide card flip functionality
    document.querySelectorAll('.sp-flip-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.sp-guide-card');
            card.classList.toggle('flipped');
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.sp-faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.sp-faq-question');
        
        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.sp-faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            item.classList.toggle('active');
        });
    });

    // Live Chat Button
    const chatButton = document.querySelector('.sp-chat-button');
    if (chatButton) {
        chatButton.addEventListener('click', () => {
            // Add your chat functionality here
            alert('Chat feature coming soon!');
        });
    }

    // Initialize AOS
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // Flip card functionality
    const viewGuideButtons = document.querySelectorAll('.sp-view-guide');
    const flipBackButtons = document.querySelectorAll('.sp-flip-back');

    viewGuideButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.sp-guide-card');
            card.classList.add('flipped');
        });
    });

    flipBackButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.sp-guide-card');
            card.classList.remove('flipped');
        });
    });

    // Thêm vào đầu file hoặc nơi phù hợp
    const categoryTranslations = {
        shipping: {
            vi: {
                title: "Hỗ Trợ Vận Chuyển & Theo Dõi",
                overview: `
                    <div class="sp-overview-section">
                        <div class="sp-overview-header">
                            <h2>Dịch Vụ & Thông Tin Vận Chuyển</h2>
                            <p class="sp-lead-text">Giải pháp vận chuyển nhanh chóng và đáng tin cậy</p>
                        </div>

                        <div class="sp-features-grid">
                            <div class="sp-feature-card">
                                <i class="fas fa-truck"></i>
                                <h4>Tùy Chọn Giao Hàng</h4>
                                <ul class="sp-feature-list">
                                    <li><i class="fas fa-clock"></i>Giao Hàng Nhanh (1-3 ngày)</li>
                                    <li><i class="fas fa-calendar"></i>Giao Hàng Tiêu Chuẩn (3-7 ngày)</li>
                                    <li><i class="fas fa-globe"></i>Vận Chuyển Quốc Tế</li>
                                    <li><i class="fas fa-home"></i>Dịch Vụ Giao Tận Nơi</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-map-marker-alt"></i>
                                <h4>Dịch Vụ Theo Dõi</h4>
                                <ul class="sp-feature-list">
                                    <li><i class="fas fa-satellite"></i>Theo Dõi Thời Gian Thực</li>
                                    <li><i class="fas fa-sms"></i>Thông Báo SMS</li>
                                    <li><i class="fas fa-envelope"></i>Cập Nhật Email</li>
                                    <li><i class="fas fa-check-circle"></i>Xác Nhận Giao Hàng</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-shield-alt"></i>
                                <h4>Bảo Mật & An Toàn</h4>
                                <ul class="sp-feature-list">
                                    <li><i class="fas fa-lock"></i>Bảo Mật Thông Tin</li>
                                    <li><i class="fas fa-insurance"></i>Bảo Hiểm Hàng Hóa</li>
                                    <li><i class="fas fa-user-shield"></i>Xác Thực Người Nhận</li>
                                    <li><i class="fas fa-history"></i>Lịch Sử Vận Chuyển</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sp-contact-info">
                            <h4>Cần Hỗ Trợ?</h4>
                            <div class="sp-contact-options">
                                <div class="sp-contact-option">
                                    <i class="fas fa-phone"></i>
                                    <p>Gọi cho chúng tôi: +84 899-498-589</p>
                                </div>
                                <div class="sp-contact-option">
                                    <i class="fas fa-envelope"></i>
                                    <p>Email: shipping@logitrack.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                guide: `
                    <div class="sp-guide-section">
                        <div class="sp-guide-header">
                            <h3>Cách Theo Dõi Đơn Hàng</h3>
                            <p class="sp-guide-intro">Theo dõi đơn hàng của bạn một cách dễ dàng</p>
                        </div>

                        <div class="sp-step-guide">
                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">1</div>
                                    <h4>Nhập Mã Vận Đơn</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Tìm mã vận đơn trong email xác nhận</li>
                                        <li>Kiểm tra biên nhận vận chuyển</li>
                                        <li>Đảm bảo nhập đúng số</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">2</div>
                                    <h4>Chọn Phương Thức Theo Dõi</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Sử dụng website của chúng tôi</li>
                                        <li>Theo dõi qua ứng dụng di động</li>
                                        <li>Nhận thông báo qua SMS</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">3</div>
                                    <h4>Xem Cập Nhật Trạng Thái</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Theo dõi vị trí hiện tại</li>
                                        <li>Xem thời gian giao hàng dự kiến</li>
                                        <li>Kiểm tra lịch sử vận chuyển</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="sp-guide-tips">
                            <h4><i class="fas fa-lightbulb"></i>Mẹo Hữu Ích</h4>
                            <ul>
                                <li>Lưu mã vận đơn để truy cập nhanh</li>
                                <li>Bật thông báo đẩy trong ứng dụng</li>
                                <li>Kiểm tra hướng dẫn giao hàng trước khi vận chuyển</li>
                                <li>Liên hệ hỗ trợ nếu theo dõi không cập nhật</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            en: {
                title: "Shipping & Tracking Support",
                overview: `
                    <div class="sp-overview-section">
                        <div class="sp-overview-header">
                            <h2>Shipping Services & Information</h2>
                            <p class="sp-lead-text">Fast and reliable shipping solutions for your needs</p>
                        </div>

                        <div class="sp-features-grid">
                            <div class="sp-feature-card">
                                <i class="fas fa-truck"></i>
                                <h4>Delivery Options</h4>
                                <ul class="sp-feature-list">
                                    <li><i class="fas fa-clock"></i>Express Delivery (1-3 days)</li>
                                    <li><i class="fas fa-calendar"></i>Standard Shipping (3-7 days)</li>
                                    <li><i class="fas fa-globe"></i>International Shipping</li>
                                    <li><i class="fas fa-home"></i>Door-to-Door Service</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-map-marker-alt"></i>
                                <h4>Tracking Services</h4>
                                <ul class="sp-feature-list">
                                    <li><i class="fas fa-satellite"></i>Real-time Tracking</li>
                                    <li><i class="fas fa-sms"></i>SMS Notifications</li>
                                    <li><i class="fas fa-envelope"></i>Email Updates</li>
                                    <li><i class="fas fa-check-circle"></i>Delivery Confirmation</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-shield-alt"></i>
                                <h4>Security & Safety</h4>
                                <ul class="sp-feature-list">
                                    <li><i class="fas fa-lock"></i>Information Security</li>
                                    <li><i class="fas fa-insurance"></i>Cargo Insurance</li>
                                    <li><i class="fas fa-user-shield"></i>Recipient Verification</li>
                                    <li><i class="fas fa-history"></i>Shipping History</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sp-contact-info">
                            <h4>Need Help?</h4>
                            <div class="sp-contact-options">
                                <div class="sp-contact-option">
                                    <i class="fas fa-phone"></i>
                                    <p>Call us: +84 899-498-589</p>
                                </div>
                                <div class="sp-contact-option">
                                    <i class="fas fa-envelope"></i>
                                    <p>Email: shipping@logitrack.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                guide: `
                    <div class="sp-guide-section">
                        <div class="sp-guide-header">
                            <h3>How to Track Your Shipment</h3>
                            <p class="sp-guide-intro">Track your shipment easily</p>
                        </div>

                        <div class="sp-step-guide">
                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">1</div>
                                    <h4>Enter Tracking Number</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Find tracking number in confirmation email</li>
                                        <li>Check shipping receipt</li>
                                        <li>Ensure correct number entry</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">2</div>
                                    <h4>Choose Tracking Method</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Use our website</li>
                                        <li>Track via mobile app</li>
                                        <li>Get SMS updates</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">3</div>
                                    <h4>View Status Updates</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Track current location</li>
                                        <li>Check estimated delivery time</li>
                                        <li>View shipping history</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="sp-guide-tips">
                            <h4><i class="fas fa-lightbulb"></i>Helpful Tips</h4>
                            <ul>
                                <li>Save tracking number for quick access</li>
                                <li>Enable push notifications in app</li>
                                <li>Check delivery instructions before shipping</li>
                                <li>Contact support if tracking is not updating</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        },
        billing: {
            vi: {
                title: "Thanh Toán & Hóa Đơn",
                overview: `
                    <div class="sp-overview-section">
                        <div class="sp-overview-header">
                            <h2>Phương Thức Thanh Toán & Thông Tin Hóa Đơn</h2>
                            <p class="sp-lead-text">Giải pháp thanh toán đơn giản và an toàn cho nhu cầu vận chuyển của bạn</p>
                        </div>

                        <div class="sp-features-grid">
                            <div class="sp-feature-card">
                                <i class="fas fa-credit-card"></i>
                                <h4>Phương Thức Thanh Toán</h4>
                                <ul class="sp-feature-list">
                                    <li>Thẻ Tín Dụng/Ghi Nợ</li>
                                    <li>Chuyển Khoản Ngân Hàng</li>
                                    <li>Ví Điện Tử</li>
                                    <li>Thanh Toán Khi Nhận Hàng</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-file-invoice-dollar"></i>
                                <h4>Chứng Từ Thanh Toán</h4>
                                <ul class="sp-feature-list">
                                    <li>Hóa Đơn Điện Tử</li>
                                    <li>Biên Lai Thanh Toán</li>
                                    <li>Sao K Hàng Tháng</li>
                                    <li>Chứng Từ Thuế</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-shield-alt"></i>
                                <h4>Giao Dịch An Toàn</h4>
                                <ul class="sp-feature-list">
                                    <li>Mã Hóa Thanh Toán</li>
                                    <li>Xử Lý An Toàn</li>
                                    <li>Bảo Vệ Chống Gian Lận</li>
                                    <li>Giám Sát 24/7</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sp-contact-info">
                            <h4>Cần Hỗ Trợ?</h4>
                            <div class="sp-contact-options">
                                <div class="sp-contact-option">
                                    <i class="fas fa-phone"></i>
                                    <p>Gọi cho chúng tôi: +84 899-498-589</p>
                                </div>
                                <div class="sp-contact-option">
                                    <i class="fas fa-envelope"></i>
                                    <p>Email: billing@logitrack.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                guide: `
                    <div class="sp-guide-section">
                        <div class="sp-guide-header">
                            <h3>Hướng Dẫn Thanh Toán</h3>
                            <p class="sp-guide-intro">Các bước đơn giản để quản lý thanh toán</p>
                        </div>

                        <div class="sp-step-guide">
                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">1</div>
                                    <h4>Chọn Phương Thức Thanh Toán</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Lựa chọn phương thức thanh toán ưa thích</li>
                                        <li>Kiểm tra thông tin thanh toán chính xác</li>
                                        <li>Xác nhận phí vận chuyển</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">2</div>
                                    <h4>Hoàn Tất Thanh Toán</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Xem lại chi tiết đơn hàng</li>
                                        <li>Xác nhận số tiền thanh toán</li>
                                        <li>Thực hiện thanh toán an toàn</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">3</div>
                                    <h4>Nhận Biên Lai</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Nhận xác nhận thanh toán</li>
                                        <li>Tải biên lai điện tử</li>
                                        <li>Lưu trữ cho mục đích sổ sách</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="sp-guide-tips">
                            <h4><i class="fas fa-lightbulb"></i>Mẹo Thanh Toán</h4>
                            <ul>
                                <li>Lưu phương thức thanh toán ưa thích để thanh toán nhanh hơn</li>
                                <li>Bật thông báo email cho các xác nhận thanh toán</li>
                                <li>Cập nhật thông tin thanh toán thường xuyên</li>
                                <li>Liên hệ hỗ trợ nếu gặp vấn đề về thanh toán</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            en: {
                title: "Billing & Payment Solutions",
                overview: `
                    <div class="sp-overview-section">
                        <div class="sp-overview-header">
                            <h2>Payment Methods & Billing Information</h2>
                            <p class="sp-lead-text">Simple and secure payment options for your shipping needs</p>
                        </div>

                        <div class="sp-features-grid">
                            <div class="sp-feature-card">
                                <i class="fas fa-credit-card"></i>
                                <h4>Payment Options</h4>
                                <ul class="sp-feature-list">
                                    <li>Credit/Debit Cards</li>
                                    <li>Bank Transfer</li>
                                    <li>Digital Wallets</li>
                                    <li>Cash on Delivery</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-file-invoice-dollar"></i>
                                <h4>Billing Documents</h4>
                                <ul class="sp-feature-list">
                                    <li>Digital Invoices</li>
                                    <li>Payment Receipts</li>
                                    <li>Monthly Statements</li>
                                    <li>Tax Documents</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-shield-alt"></i>
                                <h4>Secure Transactions</h4>
                                <ul class="sp-feature-list">
                                    <li>Encrypted Payments</li>
                                    <li>Secure Processing</li>
                                    <li>Fraud Protection</li>
                                    <li>24/7 Monitoring</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sp-contact-info">
                            <h4>Need Help?</h4>
                            <div class="sp-contact-options">
                                <div class="sp-contact-option">
                                    <i class="fas fa-phone"></i>
                                    <p>Call us: +84 899-498-589</p>
                                </div>
                                <div class="sp-contact-option">
                                    <i class="fas fa-envelope"></i>
                                    <p>Email: billing@logitrack.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                guide: `
                    <div class="sp-guide-section">
                        <div class="sp-guide-header">
                            <h3>Payment Guide</h3>
                            <p class="sp-guide-intro">Simple steps to manage your payments</p>
                        </div>

                        <div class="sp-step-guide">
                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">1</div>
                                    <h4>Choose Payment Method</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Select your preferred payment option</li>
                                        <li>Ensure your payment details are correct</li>
                                        <li>Verify the shipping cost</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">2</div>
                                    <h4>Complete Payment</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Review your order details</li>
                                        <li>Confirm payment amount</li>
                                        <li>Process secure payment</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">3</div>
                                    <h4>Get Receipt</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Receive payment confirmation</li>
                                        <li>Download digital receipt</li>
                                        <li>Keep for your records</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="sp-guide-tips">
                            <h4><i class="fas fa-lightbulb"></i>Payment Tips</h4>
                            <ul>
                                <li>Save preferred payment methods for faster checkout</li>
                                <li>Enable email notifications for payment confirmations</li>
                                <li>Keep your billing information updated</li>
                                <li>Contact support for any payment issues</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        },
        claims: {
            vi: {
                title: "Khiếu Nại & Hoàn Trả",
                overview: `
                    <div class="sp-overview-section">
                        <div class="sp-overview-header">
                            <h2>Quy Trình Khiếu Nại & Hoàn Trả</h2>
                            <p class="sp-lead-text">Xử lý khiếu nại và hoàn trả một cách dễ dàng và hiệu quả</p>
                        </div>

                        <div class="sp-features-grid">
                            <div class="sp-feature-card">
                                <i class="fas fa-box-open"></i>
                                <h4>Loại Khiếu Nại</h4>
                                <ul class="sp-feature-list">
                                    <li>Hàng Hóa Bị Hư Hỏng</li>
                                    <li>Hàng Bị Thất Lạc</li>
                                    <li>Giao Hàng Trễ</li>
                                    <li>Giao Sai Hàng</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-undo-alt"></i>
                                <h4>Tùy Chọn Hoàn Trả</h4>
                                <ul class="sp-feature-list">
                                    <li>Điểm Gửi Trả</li>
                                    <li>Dịch Vụ Lấy Hàng</li>
                                    <li>Nhãn Hoàn Trả</li>
                                    <li>Hoàn Trả Quốc Tế</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-clipboard-check"></i>
                                <h4>Quy Trình Khiếu Nại</h4>
                                <ul class="sp-feature-list">
                                    <li>Nộp Đơn Trực Tuyến</li>
                                    <li>Tải Lên Tài Liệu</li>
                                    <li>Theo Dõi Trạng Thái</li>
                                    <li>Cập Nhật Giải Quyết</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sp-important-info">
                            <h4><i class="fas fa-exclamation-circle"></i> Thông Tin Quan Trọng</h4>
                            <ul class="sp-info-list">
                                <li>Nộp khiếu nại trong vòng 7 ngày kể từ ngày giao hàng</li>
                                <li>Giữ nguyên bao bì gốc cho các khiếu nại về hư hỏng</li>
                                <li>Yêu cầu hình ảnh làm bằng chứng hư hỏng</li>
                                <li>Theo dõi trạng thái khiếu nại trực tuyến</li>
                            </ul>
                        </div>
                    </div>
                `,
                guide: `
                    <div class="sp-guide-section">
                        <h3>Cách Nộp Khiếu Nại</h3>
                        <div class="sp-step-guide">
                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">1</div>
                                    <h4>Thu Thập Thông Tin</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Mã vận đơn</li>
                                        <li>Ngày gửi hàng</li>
                                        <li>Chi tiết hư hỏng/thất lạc</li>
                                        <li>Hình ảnh hư hỏng (nếu có)</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">2</div>
                                    <h4>Nộp Khiếu Nại</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Điền đơn khiếu nại</li>
                                        <li>Tải lên tài liệu</li>
                                        <li>Cung cấp thông tin liên hệ</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">3</div>
                                    <h4>Theo Dõi Tiến Trình</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Kiểm tra trạng thái trực tuyến</li>
                                        <li>Phản hồi kịp thời các yêu cầu</li>
                                        <li>Chờ kết quả giải quyết</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="sp-guide-tips">
                            <h4><i class="fas fa-lightbulb"></i>Mẹo Xử Lý Khiếu Nại</h4>
                            <ul>
                                <li>Chụp ảnh hàng hóa ngay khi nhận được nếu có dấu hiệu hư hỏng</li>
                                <li>Lưu giữ tất cả biên nhận và chứng từ liên quan</li>
                                <li>Cung cấp thông tin chi tiết và chính xác trong đơn khiếu nại</li>
                                <li>Theo dõi thường xuyên trạng thái khiếu nại của bạn</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            en: {
                title: "Claims & Returns Support",
                overview: `
                    <div class="sp-overview-section">
                        <div class="sp-overview-header">
                            <h2>Claims & Returns Process</h2>
                            <p class="sp-lead-text">Easy and efficient handling of claims and returns</p>
                        </div>

                        <div class="sp-features-grid">
                            <div class="sp-feature-card">
                                <i class="fas fa-box-open"></i>
                                <h4>Types of Claims</h4>
                                <ul class="sp-feature-list">
                                    <li>Damaged Packages</li>
                                    <li>Lost Shipments</li>
                                    <li>Delayed Delivery</li>
                                    <li>Wrong Delivery</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-undo-alt"></i>
                                <h4>Return Options</h4>
                                <ul class="sp-feature-list">
                                    <li>Drop-off Points</li>
                                    <li>Pickup Service</li>
                                    <li>Return Labels</li>
                                    <li>International Returns</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-clipboard-check"></i>
                                <h4>Claim Process</h4>
                                <ul class="sp-feature-list">
                                    <li>Online Filing</li>
                                    <li>Document Upload</li>
                                    <li>Status Tracking</li>
                                    <li>Resolution Updates</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sp-important-info">
                            <h4><i class="fas fa-exclamation-circle"></i> Important Information</h4>
                            <ul class="sp-info-list">
                                <li>File claims within 7 days of delivery</li>
                                <li>Keep original packaging for damage claims</li>
                                <li>Photos required for damage evidence</li>
                                <li>Track claim status online</li>
                            </ul>
                        </div>
                    </div>
                `,
                guide: `
                    <div class="sp-guide-section">
                        <h3>How to File a Claim</h3>
                        <div class="sp-step-guide">
                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">1</div>
                                    <h4>Gather Information</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Tracking number</li>
                                        <li>Shipping date</li>
                                        <li>Damage/loss details</li>
                                        <li>Photos of damage (if applicable)</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">2</div>
                                    <h4>Submit Claim</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Fill out claim form</li>
                                        <li>Upload documentation</li>
                                        <li>Provide contact details</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">3</div>
                                    <h4>Track Progress</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Check claim status online</li>
                                        <li>Respond to inquiries promptly</li>
                                        <li>Await resolution</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="sp-guide-tips">
                            <h4><i class="fas fa-lightbulb"></i>Claim Handling Tips</h4>
                            <ul>
                                <li>Take photos of items immediately upon receipt if damage is suspected</li>
                                <li>Keep all receipts and related documents</li>
                                <li>Provide detailed and accurate information in your claim</li>
                                <li>Regularly monitor your claim status</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        },
        technical: {
            vi: {
                title: "Hỗ Trợ Kỹ Thuật",
                overview: `
                    <div class="sp-overview-section">
                        <div class="sp-overview-header">
                            <h2>Dịch Vụ Hỗ Trợ Kỹ Thuật</h2>
                            <p class="sp-lead-text">Giải pháp kỹ thuật chuyên nghiệp cho mọi vấn đề của bạn</p>
                        </div>

                        <div class="sp-features-grid">
                            <div class="sp-feature-card">
                                <i class="fas fa-headset"></i>
                                <h4>Kênh Hỗ Trợ</h4>
                                <ul class="sp-feature-list">
                                    <li>Hỗ Trợ Trực Tuyến 24/7</li>
                                    <li>Hỗ Trợ Qua Điện Thoại</li>
                                    <li>Email Hỗ Trợ</li>
                                    <li>Trò Chuyện Trực Tiếp</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-tools"></i>
                                <h4>Dịch Vụ Kỹ Thuật</h4>
                                <ul class="sp-feature-list">
                                    <li>Xử Lý Sự Cố</li>
                                    <li>Cài Đặt Hệ Thống</li>
                                    <li>Cập Nhật Phần Mềm</li>
                                    <li>Bảo Trì Hệ Thống</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-book"></i>
                                <h4>Tài Nguyên</h4>
                                <ul class="sp-feature-list">
                                    <li>Hướng Dẫn Sử Dụng</li>
                                    <li>Video Hướng Dẫn</li>
                                    <li>Câu Hỏi Thường Gặp</li>
                                    <li>Tài Liệu Kỹ Thuật</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sp-contact-info">
                            <h4>Liên Hệ Hỗ Trợ Kỹ Thuật</h4>
                            <div class="sp-contact-options">
                                <div class="sp-contact-option">
                                    <i class="fas fa-phone"></i>
                                    <p>Hotline: +84 899-498-589</p>
                                </div>
                                <div class="sp-contact-option">
                                    <i class="fas fa-envelope"></i>
                                    <p>Email: support@logitrack.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                guide: `
                    <div class="sp-guide-section">
                        <h3>Hướng Dẫn Hỗ Trợ Kỹ Thuật</h3>
                        <div class="sp-step-guide">
                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">1</div>
                                    <h4>Xác Định Vấn Đề</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Mô tả chi tiết vấn đề</li>
                                        <li>Thời điểm xảy ra</li>
                                        <li>Các bước đã thử</li>
                                        <li>Thông báo lỗi (nếu có)</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">2</div>
                                    <h4>Liên Hệ Hỗ Trợ</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Chọn kênh hỗ trợ phù hợp</li>
                                        <li>Cung cấp thông tin tài khoản</li>
                                        <li>Mô tả vấn đề gặp phải</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">3</div>
                                    <h4>Giải Quyết Vấn Đề</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Làm theo hướng dẫn</li>
                                        <li>Xác nhận kết quả</li>
                                        <li>Yêu cầu hỗ trợ thêm nếu cần</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="sp-guide-tips">
                            <h4><i class="fas fa-lightbulb"></i>Mẹo Hữu Ích</h4>
                            <ul>
                                <li>Kiểm tra các giải pháp trong FAQ trước khi liên hệ hỗ trợ</li>
                                <li>Chuẩn bị sẵn thông tin cần thiết trước khi gọi hỗ trợ</li>
                                <li>Chụp ảnh màn hình lỗi để mô tả vấn đề chính xác hơn</li>
                                <li>Lưu lại số ticket hỗ trợ để theo dõi tiến trình</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            en: {
                title: "Technical Support",
                overview: `
                    <div class="sp-overview-section">
                        <div class="sp-overview-header">
                            <h2>Technical Support Services</h2>
                            <p class="sp-lead-text">Professional technical solutions for all your needs</p>
                        </div>

                        <div class="sp-features-grid">
                            <div class="sp-feature-card">
                                <i class="fas fa-headset"></i>
                                <h4>Support Channels</h4>
                                <ul class="sp-feature-list">
                                    <li>24/7 Online Support</li>
                                    <li>Phone Support</li>
                                    <li>Email Support</li>
                                    <li>Live Chat</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-tools"></i>
                                <h4>Technical Services</h4>
                                <ul class="sp-feature-list">
                                    <li>Troubleshooting</li>
                                    <li>System Setup</li>
                                    <li>Software Updates</li>
                                    <li>System Maintenance</li>
                                </ul>
                            </div>

                            <div class="sp-feature-card">
                                <i class="fas fa-book"></i>
                                <h4>Resources</h4>
                                <ul class="sp-feature-list">
                                    <li>User Guides</li>
                                    <li>Video Tutorials</li>
                                    <li>FAQs</li>
                                    <li>Technical Documentation</li>
                                </ul>
                            </div>
                        </div>

                        <div class="sp-contact-info">
                            <h4>Technical Support Contact</h4>
                            <div class="sp-contact-options">
                                <div class="sp-contact-option">
                                    <i class="fas fa-phone"></i>
                                    <p>Hotline: +84 899-498-589</p>
                                </div>
                                <div class="sp-contact-option">
                                    <i class="fas fa-envelope"></i>
                                    <p>Email: support@logitrack.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                guide: `
                    <div class="sp-guide-section">
                        <h3>Technical Support Guide</h3>
                        <div class="sp-step-guide">
                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">1</div>
                                    <h4>Identify the Issue</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Describe the issue in detail</li>
                                        <li>When it occurred</li>
                                        <li>Steps already tried</li>
                                        <li>Error messages (if any)</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">2</div>
                                    <h4>Contact Support</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Choose appropriate support channel</li>
                                        <li>Provide account information</li>
                                        <li>Describe the issue</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="sp-step">
                                <div class="sp-step-header">
                                    <div class="sp-step-number">3</div>
                                    <h4>Resolve the Issue</h4>
                                </div>
                                <div class="sp-step-content">
                                    <ul class="sp-step-list">
                                        <li>Follow provided instructions</li>
                                        <li>Confirm resolution</li>
                                        <li>Request additional help if needed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="sp-guide-tips">
                            <h4><i class="fas fa-lightbulb"></i>Helpful Tips</h4>
                            <ul>
                                <li>Check FAQ solutions before contacting support</li>
                                <li>Have necessary information ready before calling</li>
                                <li>Take screenshots to describe issues more accurately</li>
                                <li>Save your support ticket number for follow-up</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        }
    };

    // Thêm event listener cho language selector
    document.querySelectorAll('.lang-selector a').forEach(langBtn => {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Cập nhật active state
            document.querySelector('.lang-selector .active').classList.remove('active');
            langBtn.classList.add('active');

            // Nếu modal đang mở, cập nhật nội dung theo ngôn ngữ mới
            if (modal?.classList.contains('active')) {
                const category = document.querySelector('.sp-category-card[data-category].active')?.dataset.category;
                if (category) {
                    openModal(category);
                }
            }
        });
    });

    // Thêm vào đầu file hoặc nơi phù hợp
    const modalStyles = `
        <style>
            /* Overview Section Styles */
            .sp-overview-section {
                padding: 20px;
            }

            .sp-overview-header {
                text-align: center;
                margin-bottom: 30px;
            }

            .sp-overview-header h2 {
                color: #333;
                margin-bottom: 10px;
            }

            .sp-lead-text {
                color: #666;
                font-size: 1.1em;
            }

            /* Features Grid */
            .sp-features-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }

            .sp-feature-card {
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                transition: transform 0.3s ease;
            }

            .sp-feature-card:hover {
                transform: translateY(-5px);
            }

            .sp-feature-card i {
                font-size: 2em;
                color: #ff6b00;
                margin-bottom: 15px;
            }

            .sp-feature-card h4 {
                color: #333;
                margin-bottom: 15px;
            }

            .sp-feature-list {
                list-style: none;
                padding: 0;
            }

            .sp-feature-list li {
                margin: 10px 0;
                color: #666;
                display: flex;
                align-items: center;
            }

            .sp-feature-list li i {
                font-size: 1em;
                margin-right: 10px;
                color: #ff6b00;
            }

            /* Guide Section Styles */
            .sp-guide-section {
                padding: 20px;
            }

            .sp-guide-header {
                text-align: center;
                margin-bottom: 30px;
            }

            .sp-step-guide {
                margin: 30px 0;
            }

            .sp-step {
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 20px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }

            .sp-step-header {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
            }

            .sp-step-number {
                width: 30px;
                height: 30px;
                background: #ff6b00;
                color: #fff;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 15px;
                font-weight: bold;
            }

            .sp-step-content ul {
                list-style: none;
                padding-left: 45px;
            }

            .sp-step-content li {
                margin: 10px 0;
                color: #666;
            }

            /* Tips Section */
            .sp-guide-tips {
                background: #f8f9fa;
                padding: 20px;
                border-radius: 8px;
                margin-top: 30px;
            }

            .sp-guide-tips h4 {
                color: #333;
                margin-bottom: 15px;
                display: flex;
                align-items: center;
            }

            .sp-guide-tips h4 i {
                color: #ff6b00;
                margin-right: 10px;
            }

            .sp-guide-tips ul {
                list-style: none;
                padding-left: 25px;
            }

            .sp-guide-tips li {
                margin: 10px 0;
                color: #666;
                position: relative;
            }

            .sp-guide-tips li:before {
                content: "•";
                color: #ff6b00;
                position: absolute;
                left: -15px;
            }

            /* Contact Info */
            .sp-contact-info {
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                margin-top: 30px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }

            .sp-contact-options {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin-top: 15px;
            }

            .sp-contact-option {
                display: flex;
                align-items: center;
            }

            .sp-contact-option i {
                font-size: 1.5em;
                color: #ff6b00;
                margin-right: 10px;
            }

            /* Important Info */
            .sp-important-info {
                background: #fff3e0;
                padding: 20px;
                border-radius: 8px;
                margin-top: 30px;
            }

            .sp-important-info h4 {
                color: #ff6b00;
                display: flex;
                align-items: center;
                margin-bottom: 15px;
            }

            .sp-important-info h4 i {
                margin-right: 10px;
            }

            .sp-info-list {
                list-style: none;
                padding-left: 25px;
            }

            .sp-info-list li {
                margin: 10px 0;
                color: #666;
                position: relative;
            }

            .sp-info-list li:before {
                content: "!";
                color: #ff6b00;
                position: absolute;
                left: -15px;
                font-weight: bold;
            }

            /* Responsive Design */
            @media (max-width: 768px) {
                .sp-features-grid {
                    grid-template-columns: 1fr;
                }

                .sp-contact-options {
                    grid-template-columns: 1fr;
                }

                .sp-step-content ul {
                    padding-left: 20px;
                }
            }
        </style>
    `;

    // Thêm styles vào document
    document.head.insertAdjacentHTML('beforeend', modalStyles);

    // Card flip functionality
    const qhCards = document.querySelectorAll('.qh-card');
    
    qhCards.forEach(card => {
        const viewDetailsBtn = card.querySelector('.qh-button');
        const backToStepsBtn = card.querySelector('.qh-back-button');
        
        // Flip to back
        viewDetailsBtn.addEventListener('click', () => {
            card.classList.add('flipped');
        });
        
        // Flip to front
        backToStepsBtn.addEventListener('click', () => {
            card.classList.remove('flipped');
        });
    });
});