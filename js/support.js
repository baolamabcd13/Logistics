document.addEventListener('DOMContentLoaded', () => {
    // Support search functionality
    const searchInput = document.querySelector('.sp-search-container input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            console.log('Searching for:', e.target.value);
        });
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

        const content = categoryContent[category];
        if (!content) {
            console.error('No content found for category:', category);
            return;
        }

        // Update modal content
        const modalTitle = modal.querySelector('.sp-modal-title');
        const overviewSection = document.getElementById('sp-overview');
        const guideSection = document.getElementById('sp-guide');

        if (modalTitle) modalTitle.textContent = content.title;
        if (overviewSection) overviewSection.innerHTML = content.overview;
        if (guideSection) guideSection.innerHTML = content.guide;

        // Show modal
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
});