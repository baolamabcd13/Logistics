// Language translations
const translations = {
    en: {
      services: "Services",
      aboutUs: "About Us", 
      sustainability: "Sustainability",
      news: "News",
      support: "Support",
      welcome: "Welcome to LogiTrack",
      heroTitle: "Global Logistics <span class='highlight'>Solutions</span> for Your <span class='highlight'>Success</span>",
      heroDesc: "Streamline your supply chain with our comprehensive logistics services. From air freight to last-mile delivery, we ensure your cargo reaches its destination safely and on time.",
      searchPlaceholder: "Track your shipment or explore our services...",
      searchButton: "Search",
      countriesServed: "Countries Served",
      support247: "Support",
      deliverySuccess: "Delivery Success",
      ourServices: "Our Services",
      servicesSubtitle: "Comprehensive logistics solutions for your business needs",
      airFreight: {
        title: "Air Freight",
        desc: "Fast and reliable air freight services worldwide with real-time tracking capabilities."
      },
      seaFreight: {
        title: "Sea Freight",
        desc: "Cost-effective ocean freight solutions for large-scale shipments globally."
      },
      landTransport: {
        title: "Land Transport",
        desc: "Efficient road transportation network covering major routes and destinations."
      },
      warehousing: {
        title: "Warehousing",
        desc: "Modern warehousing facilities with advanced inventory management systems."
      },
      supplyChain: {
        title: "Supply Chain",
        desc: "End-to-end supply chain solutions optimized for efficiency and reliability."
      },
      customClearance: {
        title: "Custom Clearance",
        desc: "Expert customs clearance services ensuring smooth international trade."
      },
      learnMore: "Learn More",
      whyChooseUs: {
        title: "Why Choose Us",
        subtitle: "Delivering excellence in logistics with our unique advantages",
        hubTitle: "Global Logistics Excellence",
        hubSubtitle: "Trusted by over 15,000 businesses worldwide",
        globalNetwork: {
          title: "Global Network",
          description: "Connected to 200+ countries with local expertise worldwide",
          hoverItems: [
            "International shipping routes",
            "24/7 global support",
            "Local partnerships"
          ]
        },
        secureReliable: {
          title: "Secure & Reliable",
          description: "Advanced tracking and security measures for your cargo",
          hoverItems: [
            "Real-time monitoring",
            "Insurance coverage",
            "Secure warehousing"
          ]
        },
        customSolutions: {
          title: "Custom Solutions",
          description: "Tailored logistics services for your specific needs",
          hoverItems: [
            "Industry-specific solutions",
            "Flexible shipping",
            "Scalable services"
          ]
        },
        sustainability: {
          title: "Sustainability",
          description: "Eco-friendly logistics solutions for a better future",
          hoverItems: [
            "Carbon footprint reduction",
            "Green packaging",
            "Sustainable practices"
          ]
        }
      },
      servicesProcess: {
        title: "Our Service Process",
        subtitle: "Simple and efficient logistics solutions",
        steps: [
          {
            title: "Inquiry",
            description: "Contact us with your logistics requirements"
          },
          {
            title: "Planning",
            description: "Customized solution and route planning"
          },
          {
            title: "Documentation",
            description: "Handle all necessary paperwork and customs"
          },
          {
            title: "Transportation",
            description: "Real-time cargo tracking and monitoring"
          },
          {
            title: "Delivery",
            description: "Receive cargo and service completion confirmation"
          }
        ]
      },
      globalNetwork: {
        title: "Our Global Network",
        subtitle: "Connecting businesses across continents",
        gallery: {
          mainAlt: "Global Logistics Hub",
          items: [
            { title: "Air Operations", alt: "Air Freight Operations" },
            { title: "Sea Routes", alt: "Sea Freight Operations" },
            { title: "Ground Fleet", alt: "Ground Operations" },
            { title: "Warehouses", alt: "Warehouse Operations" }
          ]
        },
        content: {
          title: "Global Reach, Local Expertise",
          description: "Our extensive network spans across continents, providing seamless logistics solutions worldwide:",
          stats: [
            { number: "200+", label: "Air Routes" },
            { number: "150+", label: "Sea Routes" },
            { number: "500+", label: "Warehouses" }
          ],
          features: [
            "24/7 Global Operations",
            "Strategic Hub Locations",
            "Integrated Transport Solutions"
          ]
        }
      },
      customerReviews: {
        title: "What Our Customers Say",
        subtitle: "Trusted by businesses worldwide",
        testimonials: [
          {
            text: "LogiTrack has transformed our supply chain operations. Their efficient service and real-time tracking capabilities have significantly improved our delivery times.",
            author: "Giannis Antetokounmpo",
            position: "Basketball Player - Milwaukee Bucks"
          },
          {
            text: "Outstanding service quality and professional team. They've been instrumental in helping us expand our international operations.",
            author: "Paul George",
            position: "Basketball Player - Philadelphia 76ers"
          },
          {
            text: "Reliable, efficient, and cost-effective. LogiTrack has been a valuable logistics partner for our business growth.",
            author: "Tyrese Maxey",
            position: "Basketball Player - Philadelphia 76ers"
          },
          {
            text: "Exceptional logistics services that have streamlined our operations. Their dedication to customer satisfaction is unmatched.",
            author: "Anthony Edwards",
            position: "Basketball Player - Minnesota Timberwolves"
          }
        ]
      },
      footer: {
        company: {
          title: "LOGISTICS GROUP",
          name: "LogiTrack GROUP",
          contact: {
            address: "Huynh Tan Phat, District 7, Ho Chi Minh City",
            phone: "(+84) 899-498-589",
            email: "nguyenhblam000@gmail.com",
            website: "https://github.com/baolamabcd13"
          }
        },
        location: {
          title: "COMPANY LOCATION",
          subtitle: "Find Us On Map",
          mapAlt: "World Map"
        },
        connect: {
          title: "CONNECT WITH US",
          subtitle: "Social Media",
          socialLinks: {
            facebook: "Facebook",
            twitter: "Twitter",
            tiktok: "TikTok",
            youtube: "YouTube",
            linkedin: "LinkedIn",
            instagram: "Instagram"
          }
        }
      },
      preHeading: "Welcome to LogiTrack",
      stats: {
        countries: {
          number: "150+",
          text: "Countries Served"
        },
        support: {
          number: "24/7",
          text: "Support"
        },
        success: {
          number: "99.9%",
          text: "Delivery Success"
        }
      },
      dropdown: {
        solutions: "Solutions",
        transportation: {
          title: "Transportation",
          items: {
            seaFreight: "Sea freight",
            airFreight: "Air freight",
            inlandTrucking: "Inland trucking & Cross border",
            railFreight: "Rail freight",
            breakBulk: "Break bulk & OOG (Out-of-Gauge)"
          }
        },
        logistics: {
          title: "Logistics and Supply chain",
          items: {
            customs: "Customs brokerage",
            insurance: "Cargo insurance",
            warehousing: "Warehousing",
            ecommerce: "E-Commerce (Air-express)"
          }
        },
        industries: {
          title: "Industries",
          items: {
            foodBeverage: "Food & Beverage",
            garment: "Garment & Footwear",
            furniture: "Furniture & Houseware",
            metal: "Metal & Construction materials",
            machinery: "Machinery & Equipment",
            healthcare: "Healthcare, Cosmetics & Medical supply",
            dangerous: "Dangerous goods",
            automotive: "Automotives",
            electronics: "Electronics"
          }
        }
      }
    },
    vi: {
      services: "Dịch vụ",
      aboutUs: "Về chúng tôi",
      sustainability: "Phát triển bền vững",
      news: "Tin tức",
      support: "Hỗ trợ",
      welcome: "Chào mừng đến với LogiTrack",
      heroTitle: "<span class='highlight'>Giải pháp</span> Logistics Toàn cầu cho <span class='highlight'>Thành công</span> của Bạn",
      heroDesc: "Tối ưu hóa chuỗi cung ứng của bạn với các dịch vụ logistics toàn diện của chúng tôi. Từ vận chuyển hàng không đến giao hàng chặng cuối, chúng tôi đảm bảo hàng hóa của bạn đến đích an toàn và đúng hẹn.",
      searchPlaceholder: "Theo dõi lô hàng hoặc khám phá dịch vụ của chúng tôi...",
      searchButton: "Tìm kiếm",
      countriesServed: "Quốc gia",
      support247: "Hỗ trợ",
      deliverySuccess: "Tỷ lệ giao hàng thành công",
      ourServices: "Dịch Vụ Của Chúng Tôi",
      servicesSubtitle: "Giải pháp logistics toàn diện cho nhu cầu kinh doanh của bạn",
      airFreight: {
        title: "Vận Tải Hàng Không",
        desc: "Dịch vụ vận chuyển hàng không nhanh chóng và đáng tin cậy với khả năng theo dõi thời gian thực."
      },
      seaFreight: {
        title: "Vận Tải Đường Biển",
        desc: "Giải pháp vận chuyển đường biển hiệu quả về chi phí cho các lô hàng quy mô lớn toàn cầu."
      },
      landTransport: {
        title: "Vận Tải Đường Bộ",
        desc: "Mạng lưới vận tải đường bộ hiệu quả phủ sóng các tuyến đường và điểm đến chính."
      },
      warehousing: {
        title: "Kho Bãi",
        desc: "Cơ sở kho bãi hiện đại với hệ thống quản lý hàng tồn kho tiên tiến."
      },
      supplyChain: {
        title: "Chuỗi Cung Ứng",
        desc: "Giải pháp chuỗi cung ứng toàn diện được tối ưu hóa về hiệu quả và độ tin cậy."
      },
      customClearance: {
        title: "Thông Quan",
        desc: "Dịch vụ thông quan chuyên nghiệp đảm bảo thương mại quốc tế suôn sẻ."
      },
      learnMore: "Tìm Hiểu Thêm",
      whyChooseUs: {
        title: "Tại Sao Chọn Chúng Tôi",
        subtitle: "Mang đến sự xuất sắc trong dịch vụ logistics với những ưu điểm độc đáo",
        hubTitle: "Sự Xuất Sắc Trong Logistics Toàn Cầu",
        hubSubtitle: "Được tin tưởng bởi hơn 15.000 doanh nghiệp trên toàn thế giới",
        globalNetwork: {
          title: "Mạng Lưới Toàn Cầu",
          description: "Kết nối với hơn 200 quốc gia cùng chuyên môn địa phương",
          hoverItems: [
            "Tuyến vận chuyển quốc tế",
            "Hỗ trợ toàn cầu 24/7",
            "Đối tác địa phương"
          ]
        },
        secureReliable: {
          title: "An Toàn & Đáng Tin Cậy",
          description: "Theo dõi nâng cao và biện pháp bảo mật cho hàng hóa",
          hoverItems: [
            "Giám sát thời gian thực",
            "Bảo hiểm toàn diện",
            "Kho bãi an toàn"
          ]
        },
        customSolutions: {
          title: "Giải Pháp Tùy Chỉnh",
          description: "Dịch vụ logistics được điều chỉnh theo nhu cầu cụ thể",
          hoverItems: [
            "Giải pháp theo ngành",
            "Vận chuyển linh hoạt",
            "Dịch vụ có thể mở rộng"
          ]
        },
        sustainability: {
          title: "Phát Triển Bền Vững",
          description: "Giải pháp logistics thân thiện với môi trường",
          hoverItems: [
            "Giảm thiểu carbon",
            "Đóng gói xanh",
            "Thực hành bền vững"
          ]
        }
      },
      servicesProcess: {
        title: "Quy Trình Dịch Vụ",
        subtitle: "Giải pháp logistics đơn giản và hiệu quả",
        steps: [
          {
            title: "Yêu Cầu",
            description: "Liên hệ với chúng tôi về nhu cầu logistics của bạn"
          },
          {
            title: "Lập Kế Hoạch",
            description: "Giải pháp và lộ trình vận chuyển tùy chỉnh"
          },
          {
            title: "Chứng Từ",
            description: "Xử lý tất cả giấy tờ và thủ tục hải quan cần thiết"
          },
          {
            title: "Vận Chuyển",
            description: "Theo dõi và giám sát hàng hóa thời gian thực"
          },
          {
            title: "Giao Hàng",
            description: "Nhận hàng và xác nhận hoàn thành dịch vụ"
          }
        ]
      },
      globalNetwork: {
        title: "Mạng Lưới Toàn Cầu",
        subtitle: "Kết nối doanh nghiệp xuyên lục địa",
        gallery: {
          mainAlt: "Trung Tâm Logistics Toàn Cầu",
          items: [
            { title: "Hoạt Động Hàng Không", alt: "Hoạt Động Vận Tải Hàng Không" },
            { title: "Tuyến Đường Biển", alt: "Hoạt Động Vận Tải Biển" },
            { title: "Đội Xe", alt: "Hoạt Động Mặt Đất" },
            { title: "Kho Bãi", alt: "Hoạt Động Kho Bãi" }
          ]
        },
        content: {
          title: "Tầm Với Toàn Cầu, Chuyên Môn Địa Phương",
          description: "Mạng lưới rộng khắp của chúng tôi trải dài khắp các châu lục, cung cấp giải pháp logistics liền mạch trên toàn thế giới:",
          stats: [
            { number: "200+", label: "Tuyến Hàng Không" },
            { number: "150+", label: "Tuyến Đường Biển" },
            { number: "500+", label: "Kho Bãi" }
          ],
          features: [
            "Hoạt Động Toàn Cầu 24/7",
            "Vị Trí Trung Tâm Chiến Lược",
            "Giải Pháp Vận Tải Tích Hợp"
          ]
        }
      },
      customerReviews: {
        title: "Khách Hàng Nói Gì Về Chúng Tôi",
        subtitle: "Được tin tưởng bởi doanh nghiệp trên toàn thế giới",
        testimonials: [
          {
            text: "LogiTrack đã chuyển đổi hoạt động chuỗi cung ứng của chúng tôi. Dịch vụ hiệu quả và khả năng theo dõi thời gian thực đã cải thiện đáng kể thời gian giao hàng của chúng tôi.",
            author: "Giannis Antetokounmpo",
            position: "Cầu thủ bóng rổ - Milwaukee Bucks"
          },
          {
            text: "Chất lượng dịch vụ xuất sắc và đội ngũ chuyên nghiệp. Họ đã giúp chúng tôi mở rộng hoạt động kinh doanh quốc tế.",
            author: "Paul George",
            position: "Cầu thủ bóng rổ - Philadelphia 76ers"
          },
          {
            text: "Đáng tin cậy, hiệu quả và tiết kiệm chi phí. LogiTrack là đối tác logistics quan trọng cho sự phát triển kinh doanh của chúng tôi.",
            author: "Tyrese Maxey",
            position: "Cầu thủ bóng rổ - Philadelphia 76ers"
          },
          {
            text: "Dịch vụ logistics xuất sắc đã tối ưu hóa hoạt động của chúng tôi. Sự tận tâm của họ đối với sự hài lòng của khách hàng là không gì sánh được.",
            author: "Anthony Edwards",
            position: "Cầu thủ bóng rổ - Minnesota Timberwolves"
          }
        ]
      },
      footer: {
        company: {
          title: "TẬP ĐOÀN LOGISTICS",
          name: "TẬP ĐOÀN LogiTrack",
          contact: {
            address: "Huỳnh Tấn Phát, Quận 7, Thành phố Hồ Chí Minh",
            phone: "(+84) 899-498-589",
            email: "nguyenhblam000@gmail.com",
            website: "https://github.com/baolamabcd13"
          }
        },
        location: {
          title: "VỊ TRÍ CÔNG TY",
          subtitle: "Tìm Chúng Tôi Trên Bản Đồ",
          mapAlt: "Bản Đồ Thế Giới"
        },
        connect: {
          title: "KẾT NỐI VỚI CHÚNG TÔI",
          subtitle: "Mạng Xã Hội",
          socialLinks: {
            facebook: "Facebook",
            twitter: "Twitter",
            tiktok: "TikTok",
            youtube: "YouTube",
            linkedin: "LinkedIn",
            instagram: "Instagram"
          }
        }
      },
      preHeading: "Chào mừng đến với LogiTrack",
      stats: {
        countries: {
          number: "150+",
          text: "Quốc gia được phục vụ"
        },
        support: {
          number: "24/7",
          text: "Hỗ trợ"
        },
        success: {
          number: "99.9%",
          text: "Tỷ lệ giao hàng thành công"
        }
      },
      dropdown: {
        solutions: "Giải pháp",
        transportation: {
          title: "Vận tải",
          items: {
            seaFreight: "Vận tải biển",
            airFreight: "Vận tải hàng không",
            inlandTrucking: "Vận tải đường bộ & Xuyên biên giới",
            railFreight: "Vận tải đường sắt",
            breakBulk: "Hàng rời & Hàng quá khổ (OOG)"
          }
        },
        logistics: {
          title: "Logistics và Chuỗi cung ứng",
          items: {
            customs: "Dịch vụ khai báo hải quan",
            insurance: "Bảo hiểm hàng hóa",
            warehousing: "Kho bãi",
            ecommerce: "Thương mại điện tử (Chuyển phát nhanh)"
          }
        },
        industries: {
          title: "Ngành nghề",
          items: {
            foodBeverage: "Thực phẩm & Đồ uống",
            garment: "May mặc & Giày dép",
            furniture: "Nội thất & Đồ gia dụng",
            metal: "Kim loại & Vật liệu xây dựng",
            machinery: "Máy móc & Thiết bị",
            healthcare: "Y tế, Mỹ phẩm & Vật tư y tế",
            dangerous: "Hàng hóa nguy hiểm",
            automotive: "Ô tô & Phụ tùng",
            electronics: "Điện tử"
          }
        }
      }
    }
  };
  
  // Language Switcher Class
  class LanguageSwitcher {
    constructor() {
      this.currentLang = 'en';
      this.init();
      this.initDropdownHandlers();
    }
  
    init() {
      // Get language buttons
      const langButtons = document.querySelectorAll('.lang-selector a');
      
      // Add click event listeners
      langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = btn.textContent.toLowerCase() === 'vie' ? 'vi' : 'en';
          this.switchLanguage(lang);
          
          // Update active state
          langButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    }
  
    initDropdownHandlers() {
      const dropdownButton = document.querySelector('.dropdown > a');
      if (dropdownButton) {
        dropdownButton.addEventListener('click', (e) => {
          e.preventDefault();
          const dropdownMenu = document.querySelector('.dropdown-menu');
          if (dropdownMenu) {
            dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
          }
        });
      }
    }
  
    switchLanguage(lang) {
      this.currentLang = lang;
      
      // Update elements with data-translate attributes
      document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = this.getNestedTranslation(translations[lang], key);
        if (translation) {
          if (element.tagName === 'INPUT') {
            element.placeholder = translation;
          } else {
            element.innerHTML = translation;
          }
        }
      });

      // Update navigation items
      const servicesLink = document.querySelector('a[href="services.html"]');
      const aboutLink = document.querySelector('a[href="#about"]');
      const sustainabilityLink = document.querySelector('a[href="#sustainability"]');
      const newsLink = document.querySelector('a[href="#news"]');
      const supportLink = document.querySelector('a[href="#support"]');

      if (servicesLink) servicesLink.textContent = translations[lang].services;
      if (aboutLink) aboutLink.textContent = translations[lang].aboutUs;
      if (sustainabilityLink) sustainabilityLink.textContent = translations[lang].sustainability;
      if (newsLink) newsLink.textContent = translations[lang].news;
      if (supportLink) supportLink.textContent = translations[lang].support;

      // Update dropdown menu
      const dropdown = document.querySelector('.dropdown > a');
      if (dropdown) {
        dropdown.innerHTML = `${translations[lang].dropdown.solutions} <i class="fas fa-chevron-down"></i>`;
        
        // Update transportation column
        const transportationColumn = document.querySelector('.dropdown-column:nth-child(1)');
        if (transportationColumn) {
          const columnTitle = transportationColumn.querySelector('h3');
          if (columnTitle) {
            columnTitle.textContent = translations[lang].dropdown.transportation.title;
          }
          
          const transportItems = transportationColumn.querySelectorAll('ul li a');
          const transportTranslations = translations[lang].dropdown.transportation.items;
          Object.values(transportTranslations).forEach((translation, index) => {
            if (transportItems && transportItems[index]) {
              transportItems[index].textContent = translation;
            }
          });
        }

        // Update logistics column
        const logisticsColumn = document.querySelector('.dropdown-column:nth-child(2)');
        if (logisticsColumn) {
          const columnTitle = logisticsColumn.querySelector('h3');
          if (columnTitle) {
            columnTitle.textContent = translations[lang].dropdown.logistics.title;
          }
          
          const logisticsItems = logisticsColumn.querySelectorAll('ul li a');
          const logisticsTranslations = translations[lang].dropdown.logistics.items;
          Object.values(logisticsTranslations).forEach((translation, index) => {
            if (logisticsItems && logisticsItems[index]) {
              logisticsItems[index].textContent = translation;
            }
          });
        }

        // Update industries column
        const industriesColumn = document.querySelector('.dropdown-column:nth-child(3)');
        if (industriesColumn) {
          const columnTitle = industriesColumn.querySelector('h3');
          if (columnTitle) {
            columnTitle.textContent = translations[lang].dropdown.industries.title;
          }
          
          const industryItems = industriesColumn.querySelectorAll('ul li a');
          const industryTranslations = translations[lang].dropdown.industries.items;
          Object.values(industryTranslations).forEach((translation, index) => {
            if (industryItems && industryItems[index]) {
              industryItems[index].textContent = translation;
            }
          });
        }
      }

      // Update hero section
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        // Update pre-heading
        heroSection.querySelector('.pre-heading').textContent = 
            translations[lang].preHeading;

        // Update stats
        const statItems = heroSection.querySelectorAll('.stat-item');
        const stats = translations[lang].stats;
        
        statItems.forEach((item, index) => {
            const statKey = Object.keys(stats)[index];
            if (stats[statKey]) {
                item.querySelector('.stat-number').textContent = stats[statKey].number;
                item.querySelector('.stat-text').textContent = stats[statKey].text;
            }
        });
      }
      
      // Update search
      document.querySelector('.search-box input').placeholder = translations[lang].searchPlaceholder;
      document.querySelector('.search-btn').innerHTML = `
        <i class="fas fa-search"></i>
        ${translations[lang].searchButton}
      `;
      
      // Update stats
      document.querySelectorAll('.stat-text')[0].textContent = translations[lang].countriesServed;
      document.querySelectorAll('.stat-text')[1].textContent = translations[lang].support247;
      document.querySelectorAll('.stat-text')[2].textContent = translations[lang].deliverySuccess;
      
      // Update Services section
      document.querySelector('#services .section-header h2').textContent = translations[lang].ourServices;
      document.querySelector('#services .section-header p').textContent = translations[lang].servicesSubtitle;
      
      // Update Service Cards
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach((card, index) => {
        const services = ['airFreight', 'seaFreight', 'landTransport', 'warehousing', 'supplyChain', 'customClearance'];
        const service = services[index];
        
        card.querySelector('h3').textContent = translations[lang][service].title;
        card.querySelector('p').textContent = translations[lang][service].desc;
        card.querySelector('.learn-more').innerHTML = `${translations[lang].learnMore} <i class="fas fa-arrow-right"></i>`;
      });
      
      // Update Why Choose Us section
      const whyChooseUsSection = document.querySelector('.why-choose-us');
      if (whyChooseUsSection) {
        // Update main title and subtitle
        whyChooseUsSection.querySelector('h2').textContent = translations[lang].whyChooseUs.title;
        whyChooseUsSection.querySelector('.section-header p').textContent = translations[lang].whyChooseUs.subtitle;

        // Update hub title and subtitle
        const overlayContent = whyChooseUsSection.querySelector('.overlay-content');
        if (overlayContent) {
          overlayContent.querySelector('h3').textContent = translations[lang].whyChooseUs.hubTitle;
          overlayContent.querySelector('p').textContent = translations[lang].whyChooseUs.hubSubtitle;
        }

        // Update feature items including hover info
        const featureItems = whyChooseUsSection.querySelectorAll('.feature-item');
        featureItems.forEach(item => {
          const featureKey = this.getFeatureKey(item);
          if (featureKey && translations[lang].whyChooseUs[featureKey]) {
            const translation = translations[lang].whyChooseUs[featureKey];
            
            // Update title and description
            item.querySelector('h3').textContent = translation.title;
            item.querySelector('p').textContent = translation.description;
            
            // Update hover info
            const hoverList = item.querySelector('.hover-info ul');
            if (hoverList && translation.hoverItems) {
              hoverList.innerHTML = translation.hoverItems
                .map(item => `<li>${item}</li>`)
                .join('');
            }
          }
        });
      }

      // Update Services Process section
      const processSection = document.querySelector('.services-process');
      if (processSection) {
        // Update section header
        processSection.querySelector('.section-header h2').textContent = 
          translations[lang].servicesProcess.title;
        processSection.querySelector('.section-header p').textContent = 
          translations[lang].servicesProcess.subtitle;

        // Update process steps
        const steps = processSection.querySelectorAll('.process-step');
        steps.forEach((step, index) => {
          const stepTranslation = translations[lang].servicesProcess.steps[index];
          if (stepTranslation) {
            step.querySelector('h3').textContent = stepTranslation.title;
            step.querySelector('p').textContent = stepTranslation.description;
          }
        });
      }

      // Update Global Network section
      const networkSection = document.querySelector('.global-network');
      if (networkSection) {
        // Update header
        networkSection.querySelector('.section-header h2').textContent = 
          translations[lang].globalNetwork.title;
        networkSection.querySelector('.section-header p').textContent = 
          translations[lang].globalNetwork.subtitle;

        // Update gallery
        const gallery = networkSection.querySelector('.network-gallery');
        if (gallery) {
          gallery.querySelector('.gallery-main img').alt = 
            translations[lang].globalNetwork.gallery.mainAlt;
            
          // Update gallery items
          const items = gallery.querySelectorAll('.gallery-item');
          items.forEach((item, index) => {
            const translation = translations[lang].globalNetwork.gallery.items[index];
            item.querySelector('img').alt = translation.alt;
            item.querySelector('.overlay span').textContent = translation.title;
          });
        }

        // Update content
        const content = networkSection.querySelector('.network-content');
        if (content) {
          content.querySelector('h3').textContent = 
            translations[lang].globalNetwork.content.title;
          content.querySelector('p').textContent = 
            translations[lang].globalNetwork.content.description;

          // Update stats
          const statBoxes = content.querySelectorAll('.stat-box');
          statBoxes.forEach((box, index) => {
            const stat = translations[lang].globalNetwork.content.stats[index];
            box.querySelector('h4').textContent = stat.number;
            box.querySelector('p').textContent = stat.label;
          });

          // Update features
          const features = content.querySelectorAll('.feature');
          features.forEach((feature, index) => {
            feature.querySelector('span').textContent = 
              translations[lang].globalNetwork.content.features[index];
          });
        }
      }

      // Update Customer Reviews section
      const reviewsSection = document.querySelector('.reviews');
      if (reviewsSection) {
        // Update header
        reviewsSection.querySelector('.section-header h2').textContent = 
          translations[lang].customerReviews.title;
        reviewsSection.querySelector('.section-header p').textContent = 
          translations[lang].customerReviews.subtitle;

        // Update testimonials
        const testimonialCards = reviewsSection.querySelectorAll('.testimonial-card');
        testimonialCards.forEach((card, index) => {
          const testimonial = translations[lang].customerReviews.testimonials[index];
          card.querySelector('.testimonial-text').textContent = testimonial.text;
          card.querySelector('.author-info h4').textContent = testimonial.author;
          card.querySelector('.author-info p').textContent = testimonial.position;
        });
      }

      // Update Footer section
      const footer = document.querySelector('.main-footer');
      if (footer) {
        // Update Company Info section
        const companySection = footer.querySelector('.footer-section:nth-child(1)');
        if (companySection) {
          companySection.querySelector('h3').textContent = 
            translations[lang].footer.company.title;
          companySection.querySelector('.company-name').innerHTML = 
            lang === 'en' ? 'Logi<span class="highlight">Track</span> GROUP' : 
            'TẬP ĐOÀN Logi<span class="highlight">Track</span>';
          
          // Update contact info
          const contactInfo = companySection.querySelector('.contact-info');
          const contact = translations[lang].footer.company.contact;
          contactInfo.innerHTML = `
            <p><i class="fas fa-map-marker-alt"></i> ${contact.address}</p>
            <p><i class="fas fa-phone"></i> ${contact.phone}</p>
            <p><i class="fas fa-envelope"></i> ${contact.email}</p>
            <p><i class="fas fa-globe"></i> ${contact.website}</p>
          `;
        }

        // Update Map section
        const mapSection = footer.querySelector('.footer-section:nth-child(2)');
        if (mapSection) {
          mapSection.querySelector('h3').textContent = 
            translations[lang].footer.location.title;
          mapSection.querySelector('h2').textContent = 
            translations[lang].footer.location.subtitle;
          mapSection.querySelector('.world-map').alt = 
            translations[lang].footer.location.mapAlt;
        }

        // Update Connect section
        const connectSection = footer.querySelector('.footer-section:nth-child(3)');
        if (connectSection) {
          connectSection.querySelector('h3').textContent = 
            translations[lang].footer.connect.title;
          connectSection.querySelector('h2').textContent = 
            translations[lang].footer.connect.subtitle;
          
          // Update social links aria-labels
          const socialLinks = translations[lang].footer.connect.socialLinks;
          Object.entries(socialLinks).forEach(([platform, label]) => {
            const link = connectSection.querySelector(`.social-btn.${platform}`);
            if (link) {
              link.setAttribute('aria-label', label);
            }
          });
        }
      }
    }

    getNestedTranslation(obj, path) {
      return path.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : null;
      }, obj);
    }

    getFeatureKey(featureElement) {
      const title = featureElement.querySelector('h3').textContent;
      switch (title) {
        case 'Global Network':
        case 'Mạng Lưới Toàn Cầu':
          return 'globalNetwork';
        case 'Secure & Reliable':
        case 'An Toàn & Đáng Tin Cậy':
          return 'secureReliable';
        case 'Custom Solutions':
        case 'Giải Pháp Tùy Chỉnh':
          return 'customSolutions';
        case 'Sustainability':
        case 'Phát Triển Bền Vững':
          return 'sustainability';
        default:
          return null;
      }
    }
  }
  
  // Export for use in other files
  export { LanguageSwitcher };