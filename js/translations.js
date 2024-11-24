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
      },
      copyright: "2024 LogiTrack. All rights reserved.",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      termsPage: {
        title: "Terms & Conditions",
        lastUpdated: "Last updated: March 15, 2024",
        sections: {
          intro: {
            title: "1. Introduction",
            content: "Welcome to LogiTrack. These terms and conditions outline the rules and regulations for the use of LogiTrack's services and website."
          },
          serviceTerms: {
            title: "2. Service Terms",
            description: {
              title: "2.1 Service Description",
              content: "LogiTrack provides logistics and transportation services including but not limited to:",
              items: [
                "Air Freight Services",
                "Sea Freight Services",
                "Land Transportation",
                "Warehousing Solutions",
                "Custom Clearance Services"
              ]
            },
            availability: {
              title: "2.2 Service Availability",
              content: "We strive to provide our services 24/7, but we cannot guarantee uninterrupted availability of our services due to maintenance, updates, or factors beyond our control."
            }
          },
          userResponsibilities: {
            title: "3. User Responsibilities",
            content: "By using our services, you agree to:",
            items: [
              "Provide accurate and complete information",
              "Comply with all applicable laws and regulations",
              "Maintain the confidentiality of your account",
              "Notify us immediately of any unauthorized use"
            ]
          },
          shippingPolicies: {
            title: "4. Shipping Policies",
            prohibited: {
              title: "4.1 Prohibited Items",
              content: "The following items are strictly prohibited from shipping:",
              items: [
                "Illegal substances",
                "Hazardous materials without proper documentation",
                "Protected wildlife products",
                "Counterfeit goods"
              ]
            }
          },
          liability: {
            title: "5. Liability",
            content: "LogiTrack's liability is limited to the terms specified in our shipping agreements and applicable international conventions."
          },
          changes: {
            title: "6. Changes to Terms",
            content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website."
          },
          footer: {
            contact: "For any questions regarding these terms, please contact us at:"
          }
        }
      },
      privacyPage: {
        title: "Privacy Policy",
        lastUpdated: "Last updated: March 15, 2024",
        sections: {
          intro: {
            title: "1. Introduction",
            content: "At LogiTrack, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information."
          },
          dataCollection: {
            title: "2. Data Collection",
            personal: {
              title: "2.1 Personal Information",
              content: "We collect the following types of personal information:",
              items: [
                "Name and contact details",
                "Shipping and billing addresses",
                "Payment information",
                "Account credentials",
                "Communication preferences"
              ]
            },
            usage: {
              title: "2.2 Usage Data",
              content: "We automatically collect certain information about your device and how you interact with our services.",
              items: [
                "IP address and device information",
                "Browser type and settings",
                "Location data",
                "Usage patterns and preferences"
              ]
            }
          },
          dataUse: {
            title: "3. Use of Information",
            content: "We use your information to:",
            items: [
              "Process and track shipments",
              "Provide customer support",
              "Improve our services",
              "Send service updates and marketing communications",
              "Comply with legal obligations"
            ]
          },
          dataSecurity: {
            title: "4. Data Security",
            content: "We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction."
          },
          userRights: {
            title: "5. Your Rights",
            content: "You have the right to:",
            items: [
              "Access your personal data",
              "Request data correction",
              "Request data deletion",
              "Opt-out of marketing communications",
              "Data portability"
            ]
          },
          cookies: {
            title: "6. Cookies and Tracking",
            content: "We use cookies and similar technologies to enhance your experience. See our Cookie Policy for more details."
          },
          updates: {
            title: "7. Updates to Privacy Policy",
            content: "We may update this policy periodically. We will notify you of any significant changes."
          },
          footer: {
            contact: "For privacy-related inquiries, please contact our Data Protection Officer at:"
          }
        }
      },
      transportation: {
        title: "Transportation Services",
        mainServices: "Main Services",
        specialServices: "Special Services", 
        services: {
          seaFreight: {
            name: "Sea Freight",
            title: "Sea Freight Services",
            stats: {
              ports: {
                number: "150+",
                label: "Global Ports"
              },
              tracking: {
                number: "24/7",
                label: "Tracking"
              },
              success: {
                number: "98%",
                label: "Success Rate"
              }
            },
            overview: {
              title: "Service Overview",
              description: "Our comprehensive sea freight solutions offer reliable and cost-effective shipping services across major ports worldwide. We specialize in both FCL (Full Container Load) and LCL (Less than Container Load) shipments."
            },
            features: {
              title: "Key Features",
              items: [
                { title: "Global Coverage", description: "Access to major shipping routes and ports" },
                { title: "Flexible Solutions", description: "FCL and LCL shipping options" },
                { title: "Cargo Insurance", description: "Comprehensive coverage options" },
                { title: "Schedule Reliability", description: "Regular departures and arrivals" }
              ]
            },
            options: {
              title: "Shipping Options",
              fcl: {
                title: "FCL Shipping",
                features: [
                  "Full container exclusivity",
                  "Direct port delivery",
                  "Suitable for large shipments",
                  "Cost-effective for full loads"
                ]
              },
              lcl: {
                title: "LCL Shipping",
                features: [
                  "Shared container space",
                  "Flexible cargo size",
                  "Economic for small shipments",
                  "Regular consolidation service"
                ]
              }
            }
          },
          airFreight: {
            name: "Air Freight",
            title: "Air Freight Services",
            stats: {
              destinations: { number: "200+", label: "Destinations" },
              express: { number: "48h", label: "Express Delivery" },
              ontime: { number: "99%", label: "On-time Rate" }
            },
            overview: {
              title: "Service Overview",
              description: "Experience swift and reliable air freight solutions connecting to major airports worldwide. Our air cargo services are designed for time-sensitive shipments and high-value goods."
            },
            features: {
              title: "Key Features",
              items: [
                { title: "Express Services", description: "Next-day and same-day delivery options" },
                { title: "Temperature Control", description: "Special handling for sensitive cargo" },
                { title: "Flexible Capacity", description: "From small parcels to charter services" },
                { title: "Custom Clearance", description: "Streamlined documentation process" }
              ]
            },
            options: {
              title: "Shipping Options",
              express: {
                title: "Express Air Freight",
                features: [
                  "Next-day delivery",
                  "Priority handling",
                  "Door-to-door service",
                  "Real-time tracking"
                ]
              },
              standard: {
                title: "Standard Air Freight",
                features: [
                  "Cost-effective solution",
                  "Regular schedules",
                  "Consolidated shipping",
                  "Worldwide coverage"
                ]
              }
            }
          },
          inlandTrucking: {
            name: "Inland Trucking & Cross Border",
            title: "Inland Trucking & Cross Border Services",
            stats: {
              vehicles: { number: "1000+", label: "Vehicles" },
              countries: { number: "15+", label: "Countries" },
              coverage: { number: "95%", label: "Coverage" }
            },
            overview: {
              title: "Service Overview", 
              description: "Our inland trucking and cross-border services provide seamless door-to-door transportation solutions across Southeast Asia. We offer dedicated fleet services and specialized equipment for various types of cargo."
            },
            features: {
              title: "Key Features",
              items: [
                { title: "Route Optimization", description: "Efficient delivery planning" },
                { title: "Specialized Equipment", description: "Various truck types available" },
                { title: "Border Expertise", description: "Smooth customs clearance" },
                { title: "GPS Tracking", description: "Real-time shipment monitoring" }
              ]
            },
            options: {
              title: "Service Options",
              domestic: {
                title: "Domestic Transport",
                features: [
                  "Door-to-door delivery",
                  "Express and standard service", 
                  "Temperature-controlled options",
                  "Last-mile delivery"
                ]
              },
              crossBorder: {
                title: "Cross Border",
                features: [
                  "International routes",
                  "Customs documentation",
                  "Transit management",
                  "Multi-country services"
                ]
              }
            }
          },
          railFreight: {
            name: "Rail Freight",
            title: "Rail Freight Services",
            stats: {
              routes: { number: "50+", label: "Routes" },
              cost: { number: "30%", label: "Cost Saving" },
              reliability: { number: "97%", label: "Reliability" }
            },
            overview: {
              title: "Service Overview",
              description: "Our rail freight services offer an eco-friendly and cost-effective alternative for long-distance cargo transportation. We provide reliable connections between Asia and Europe through the New Silk Road."
            },
            features: {
              title: "Key Features",
              items: [
                { title: "Eco-Friendly", description: "Lower carbon footprint" },
                { title: "Cost-Effective", description: "Competitive pricing for bulk cargo" },
                { title: "Network Coverage", description: "Extensive rail connections" },
                { title: "Fixed Schedules", description: "Regular departure times" }
              ]
            },
            options: {
              title: "Service Options",
              container: {
                title: "Container Rail",
                features: [
                  "Full container loads",
                  "Consolidated cargo",
                  "Temperature-controlled",
                  "High-value goods service"
                ]
              },
              bulk: {
                title: "Bulk Rail",
                features: [
                  "Raw materials transport",
                  "Large volume shipping",
                  "Special equipment",
                  "Project cargo handling"
                ]
              }
            }
          },
          breakBulk: {
            name: "Break Bulk & OOG",
            title: "Break Bulk & OOG Services", 
            stats: {
              experience: { number: "25+", label: "Years Experience" },
              projects: { number: "500+", label: "Projects per Year" },
              specialists: { number: "50+", label: "Specialists" }
            },
            overview: {
              title: "Service Overview",
              description: "We specialize in handling break bulk and out-of-gauge cargo with our experienced team of experts. Our services include detailed planning, specialized equipment, and customized transportation solutions."
            },
            features: {
              title: "Key Features",
              items: [
                { title: "In-depth Survey", description: "Route and requirement assessment" },
                { title: "Specialized Equipment", description: "Special handling equipment" },
                { title: "Comprehensive Monitoring", description: "Detailed tracking and reporting" },
                { title: "Optimal Safety", description: "Strict safety procedures" }
              ]
            },
            options: {
              title: "Service Options",
              breakbulk: {
                title: "Break Bulk",
                features: [
                  "Professional break bulk handling",
                  "Specialized lifting equipment",
                  "Suitable storage facilities",
                  "Cargo packaging and protection"
                ]
              },
              oog: {
                title: "Out of Gauge",
                features: [
                  "Oversized equipment",
                  "Heavy machinery",
                  "Customized solutions", 
                  "Route surveys"
                ]
              }
            }
          }
        }
      },
      quote: {
        title: "Request a Quote",
        serviceType: {
          label: "Service Type",
          placeholder: "Select a service",
          options: {
            sea: "Sea Freight",
            air: "Air Freight",
            land: "Land Transport",
            rail: "Rail Freight"
          }
        },
        origin: {
          label: "From",
          placeholder: "Enter origin city/port"
        },
        destination: {
          label: "To",
          placeholder: "Enter destination city/port"
        },
        submit: "Get Free Quote"
      },
      tracking: {
        title: "Track Shipment",
        number: {
          label: "Tracking Number",
          placeholder: "Enter your tracking number"
        },
        submit: "Track Now"
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
        desc: "Dịch vụ thông quan chuyên nghiệp đảm bảo thương mại quc tế suôn sẻ."
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
            text: "Dịch vụ logistics xuất sắc đã tối u hóa hoạt động của chúng tôi. Sự tận tâm của họ đối với sự hài lòng của khách hàng là không gì sánh được.",
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
            garment: "May mặc & Giy dép",
            furniture: "Nội thất & Đồ gia dụng",
            metal: "Kim loại & Vật liệu xây dựng",
            machinery: "Máy móc & Thiết bị",
            healthcare: "Y tế, Mỹ phẩm & Vật tư y tế",
            dangerous: "Hàng hóa nguy hiểm",
            automotive: "Ô tô & Phụ tùng",
            electronics: "Điện tử"
          }
        }
      },
      copyright: "2024 LogiTrack. Đã đăng ký bản quyền.",
      terms: "Điều khoản & Điều kiện",
      privacy: "Chính sách bảo mật",
      cookies: "Chính sách Cookie",
      termsPage: {
        title: "Điều Khoản & Điều Kiện",
        lastUpdated: "Cập nhật lần cuối: 15 tháng 3, 2024",
        sections: {
          intro: {
            title: "1. Giới Thiệu",
            content: "Chào mừng đến với LogiTrack. Các điều khoản và điều kiện này quy định các quy tắc và quy định cho việc sử dụng dịch vụ và trang web của LogiTrack."
          },
          serviceTerms: {
            title: "2. Điều Khoản Dịch Vụ",
            description: {
              title: "2.1 Mô Tả Dịch Vụ",
              content: "LogiTrack cung cấp các dịch vụ logistics và vận tải bao gồm nhưng không giới hạn:",
              items: [
                "Dịch vụ vận tải hàng không",
                "Dịch vụ vận tải biển",
                "Vận tải đường bộ",
                "Giải pháp kho bãi",
                "Dịch vụ thông quan"
              ]
            },
            availability: {
              title: "2.2 Tính Khả Dụng của Dịch Vụ",
              content: "Chúng tôi cố gắng cung cấp dịch vụ 24/7, nhưng không thể đảm bảo tính khả dụng liên tục của dịch vụ do bảo trì, cập nhật hoặc các yếu tố ngoài tầm kiểm soát của chúng tôi."
            }
          },
          userResponsibilities: {
            title: "3. Trách Nhiệm Người Dùng",
            content: "Khi sử dụng dịch vụ của chúng tôi, bạn đồng ý:",
            items: [
              "Cung cấp thông tin chính xác và đầy đủ",
              "Tuân thủ tất cả luật lệ và quy định hiện hành",
              "Bảo mật thông tin tài khoản của bạn",
              "Thông báo ngay cho chúng tôi về bất kỳ việc sử dụng trái phép nào"
            ]
          },
          shippingPolicies: {
            title: "4. Chính Sách Vn Chuyển",
            prohibited: {
              title: "4.1 Hàng Hóa Cấm",
              content: "Các mặt hàng sau bị nghiêm cấm vận chuyển:",
              items: [
                "Các chất bất hợp pháp",
                "Hàng hóa nguy hiểm không có giấy tờ phù hợp",
                "Sản phẩm động vật hoang dã được bảo vệ",
                "Hàng giả, hàng nhái"
              ]
            }
          },
          liability: {
            title: "5. Trách Nhiệm Pháp Lý",
            content: "Trách nhiệm pháp lý của LogiTrack được giới hạn trong các điều khoản được quy định trong thỏa thuận vận chuyển và các công ước quốc tế hiện hành."
          },
          changes: {
            title: "6. Thay Đổi Điều Khoản",
            content: "Chúng tôi có quyền sửa đổi các điều khoản này bất cứ lúc nào. Những thay đổi sẽ có hiệu lực ngay sau khi được đăng tải trên trang web của chúng tôi."
          },
          footer: {
            contact: "Nếu có bất kỳ thắc mắc nào về các điều khoản này, vui lòng liên hệ với chúng tôi tại:",
            email: "Email hỗ trợ:",
            phone: "Điện thoại:"
          }
        }
      },
      privacyPage: {
        title: "Chính Sách Bảo Mật",
        lastUpdated: "Cập nhật lần cuối: 15 tháng 3, 2024",
        sections: {
          intro: {
            title: "1. Giới Thiệu",
            content: "Tại LogiTrack, chúng tôi rất coi trọng quyền riêng tư của bạn. Chính sách Bảo mật này gi��i thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ thông tin của bạn."
          },
          dataCollection: {
            title: "2. Thu Thập Dữ Liệu",
            personal: {
              title: "2.1 Thông Tin Cá Nhân",
              content: "Chúng tôi thu thập các loại thông tin cá nhân sau:",
              items: [
                "Tên và thông tin liên hệ",
                "Địa chỉ giao hàng và thanh toán",
                "Thông tin thanh toán",
                "Thông tin đăng nhập",
                "Tùy chọn liên lạc"
              ]
            },
            usage: {
              title: "2.2 Dữ Liệu Sử Dụng",
              content: "Chúng tôi tự động thu thập một số thông tin về thiết bị của bạn và cách bạn tương tác với dịch vụ của chúng tôi.",
              items: [
                "Địa chỉ IP và thông tin thiết bị",
                "Loại trình duyệt và cài đặt",
                "Dữ liệu vị trí",
                "Mẫu sử dụng và tùy chọn"
              ]
            }
          },
          dataUse: {
            title: "3. Sử Dụng Thông Tin",
            content: "Chúng tôi sử dụng thông tin của bạn để:",
            items: [
              "Xử lý và theo dõi lô hàng",
              "Cung cấp hỗ trợ khách hàng",
              "Cải thiện dịch vụ",
              "Gửi thông tin cập nhật dịch vụ và tiếp thị",
              "Tuân thủ nghĩa vụ pháp lý"
            ]
          },
          dataSecurity: {
            title: "4. Bảo Mật Dữ Liệu",
            content: "Chúng tôi thực hiện các biện pháp bảo mật thích hợp để bảo vệ thông tin của bạn khỏi truy cập, thay đổi, tiết lộ hoặc phá hủy trái phép."
          },
          userRights: {
            title: "5. Quyền Của Bạn",
            content: "Bạn có quyền:",
            items: [
              "Truy cập dữ liệu cá nhân của bạn",
              "Yêu cầu chỉnh sửa dữ liệu",
              "Yêu cầu xóa dữ liệu",
              "Từ chối nhận thông tin tiếp thị",
              "Chuyển giao dữ liệu"
            ]
          },
          cookies: {
            title: "6. Cookie và Theo Dõi",
            content: "Chúng tôi sử dụng cookie và các công nghệ tương tự để nâng cao trải nghiệm của bạn. Xem Chính sách Cookie của chúng tôi để biết thêm chi tiết."
          },
          updates: {
            title: "7. Cập Nhật Chính Sách Bảo Mật",
            content: "Chúng tôi có thể cập nhật chính sách này định kỳ. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi quan trọng nào."
          }
        },
        footer: {
          contact: "Đối với các câu hỏi liên quan đến quyền riêng tư, vui lòng liên hệ với Cán bộ Bảo vệ Dữ liệu của chúng tôi tại:",
          email: "Email bảo mật:",
          phone: "Điện thoại:"
        }
      },
      cookiePage: {
        title: "Chính Sách Cookie",
        lastUpdated: "Cập nhật lần cuối: 15 tháng 3, 2024",
        sections: {
          what: {
            title: "1. Cookie Là Gì?",
            content: "Cookie là các tệp văn bản nhỏ được đặt trên thiết bị của bạn khi bạn truy cập trang web của chúng tôi. Chúng giúp chúng tôi cung cấp trải nghiệm tốt hơn bằng cách:",
            items: [
              "Ghi nhớ tùy chọn của bạn",
              "Hiểu cách bạn sử dụng trang web của chúng tôi",
              "Cải thiện chức năng trang web",
              "Cung cấp nội dung được cá nhân hóa"
            ]
          },
          types: {
            title: "2. Các Loại Cookie Chúng Tôi Sử Dụng",
            essential: {
              title: "2.1 Cookie Thiết Yếu",
              content: "Những cookie này cần thiết để trang web hoạt động bình thường. Chúng cho phép các chức năng cơ bản như:",
              items: [
                "Điều hướng trang",
                "Truy cập vào khu vực bảo mật",
                "Chức năng giỏ hàng",
                "Xử lý thanh toán"
              ]
            },
            performance: {
              title: "2.2 Cookie Hiệu Suất",
              content: "Những cookie này giúp chúng tôi hiểu cách người truy cập tương tác với trang web của chúng tôi bằng cách:",
              items: [
                "Thu thập dữ liệu phân tích",
                "Xác định thông báo lỗi",
                "Kiểm tra các thiết kế khác nhau",
                "Đo lường hiệu suất trang web"
              ]
            },
            functionality: {
              title: "2.3 Cookie Chức Năng",
              content: "Những cookie này ghi nhớ tùy chọn của bạn để nâng cao trải nghiệm:",
              items: [
                "Tùy chọn ngôn ngữ",
                "Cài đặt vị trí",
                "Thông tin tài khoản người dùng",
                "Bố cục tùy chỉnh"
              ]
            },
            targeting: {
              title: "2.4 Cookie Tiếp Thị",
              content: "Những cookie này được sử dụng cho mục đích tiếp thị:",
              items: [
                "Hiển thị quảng cáo phù hợp",
                "Đo lường hiệu quả quảng cáo",
                "Tích hợp đối tác",
                "Tính năng mạng xã hội"
              ]
            }
          },
          management: {
            title: "3. Quản Lý Cookie",
            content: "Bạn có thể kiểm soát cookie thông qua cài đặt trình duyệt:",
            items: [
              "Chặn tất cả cookie",
              "Xóa cookie hiện có",
              "Cho phép cookie từ các trang cụ thể",
              "Thiết lập tùy chọn cookie"
            ],
            note: "Lưu ý: Việc chặn một số loại cookie có thể ảnh hưởng đến trải nghiệm của bạn trên trang web của chúng tôi."
          },
          thirdParty: {
            title: "4. Cookie Bên Thứ Ba",
            content: "Chúng tôi sử dụng dịch vụ từ các đối tác đáng tin cậy sau:",
            items: [
              "Google Analytics - Theo dõi hiệu suất",
              "Bộ xử lý thanh toán - Bảo mật giao dịch",
              "Nền tảng mạng xã hội - Chia sẻ nội dung",
              "Mạng lưới quảng cáo - Quảng cáo có mục tiêu"
            ]
          },
          updates: {
            title: "5. Cập Nhật Chính Sách Cookie",
            content: "Chúng tôi có thể cập nhật chính sách này khi dịch vụ của chúng tôi phát triển. Vui lòng kiểm tra định kỳ để biết các thay đổi."
          }
        },
        footer: {
          contact: "Nếu có thắc mắc về chính sách cookie của chúng tôi, vui lòng liên hệ:",
          email: "Email hỗ trợ:",
          phone: "Điện thoại:"
        }
      },
      transportation: {
        title: "Dịch Vụ Vận Tải",
        mainServices: "Dịch Vụ Chính",
        specialServices: "Dịch Vụ Đặc Biệt",
        services: {
          seaFreight: {
            name: "Vận Tải Biển",
            title: "Dịch Vụ Vận Tải Biển",
            stats: {
              ports: { number: "150+", label: "Cảng Toàn Cầu" },
              tracking: { number: "24/7", label: "Theo Dõi" },
              success: { number: "98%", label: "Tỷ Lệ Thành Công" }
            },
            overview: {
              title: "Tổng Quan Dịch Vụ",
              description: "Giải pháp vận tải biển toàn diện của chúng tôi cung cấp dịch vụ vận chuyển đáng tin cậy và hiệu quả về chi phí qua các cảng lớn trên toàn thế giới. Chúng tôi chuyên về cả hàng nguyên container (FCL) và hàng lẻ (LCL)."
            },
            features: {
              title: "Tính Năng Chính",
              items: [
                { title: "Phạm Vi Toàn Cầu", description: "Tiếp cận các tuyến đường và cảng biển chính" },
                { title: "Giải Pháp Linh Hoạt", description: "Lựa chọn FCL và LCL" },
                { title: "Bảo Hiểm Hàng Hóa", description: "Các tùy chọn bảo hiểm toàn diện" },
                { title: "Lịch Trình Đáng Tin Cậy", description: "Khởi hành và đến định kỳ" }
              ]
            },
            options: {
              title: "Tùy Chọn Vận Chuyển",
              fcl: {
                title: "Vận Chuyển FCL",
                features: [
                  "Container độc quyền",
                  "Giao hàng trực tiếp tại cảng",
                  "Phù hợp cho lô hàng lớn",
                  "Hiệu quả chi phí cho container đầy"
                ]
              },
              lcl: {
                title: "Vận Chuyển LCL",
                features: [
                  "Chia sẻ không gian container",
                  "Kích thước hàng hóa linh hoạt",
                  "Tiết kiệm cho lô hàng nhỏ",
                  "Dịch vụ gom hàng thường xuyên"
                ]
              }
            }
          },
          airFreight: {
            name: "Vận Tải Hàng Không",
            title: "Dịch Vụ Vận Tải Hàng Không",
            stats: {
              destinations: { number: "200+", label: "Destinations" },
              express: { number: "48h", label: "Express Delivery" },
              ontime: { number: "99%", label: "On-time Rate" }
            },
            overview: {
              title: "Tổng Quan Dịch Vụ",
              description: "Trải nghiệm giải pháp vận tải hàng không nhanh chóng và đáng tin cậy kết nối với các sân bay lớn trên toàn thế giới. Dịch vụ vận chuyển hàng không của chúng tôi được thiết kế cho các lô hàng cần giao gấp và hàng hóa giá trị cao."
            },
            features: {
              title: "Tính Năng Chính",
              items: [
                { title: "Dịch Vụ Chuyển Phát Nhanh", description: "Tùy chọn giao hàng trong ngày và ngày hôm sau" },
                { title: "Kiểm Soát Nhiệt Độ", description: "Xử lý đặc biệt cho hàng hóa nhạy cảm" },
                { title: "Năng Lực Linh Hoạt", description: "Từ bưu kiện nhỏ đến dịch vụ thuê chuyến" },
                { title: "Thông Quan", description: "Quy trình chứng từ đơn giản" }
              ]
            },
            options: {
              title: "Tùy Chọn Vận Chuyển",
              express: {
                title: "Vận Chuyển Hàng Không Nhanh",
                features: [
                  "Giao hàng ngày hôm sau",
                  "Xử lý ưu tiên",
                  "Dịch vụ door-to-door",
                  "Theo dõi thời gian thực"
                ]
              },
              standard: {
                title: "Vận Chuyển Hàng Không Tiêu Chuẩn",
                features: [
                  "Giải pháp tiết kiệm chi phí",
                  "Lịch trình thường xuyên",
                  "Vận chuyển gom hàng",
                  "Phủ sóng toàn cầu"
                ]
              }
            }
          },
          railFreight: {
            name: "Vận Tải Đường Sắt",
            title: "Dịch Vụ Vận Tải Đường Sắt",
            stats: {
              network: { number: "50,000+", label: "Km Đường Sắt" },
              terminals: { number: "100+", label: "Nhà Ga" },
              capacity: { number: "10,000+", label: "TEU/Tháng" }
            },
            overview: {
              title: "Tổng Quan Dịch Vụ",
              description: "Dịch vụ vận tải đường sắt của chúng tôi cung cấp giải pháp vận chuyển đáng tin cậy và thân thiện với môi trường. Kết nối các trung tâm logistics chính thông qua mạng lưới đường sắt rộng khắp."
            },
            features: {
              title: "Tính Năng Chính",
              items: [
                { title: "Vận Chuyển Xanh", description: "Giảm thiểu carbon footprint" },
                { title: "Kết Nối Liền Mạch", description: "Tích hợp đa phương thức" },
                { title: "Chi Phí Hiệu Quả", description: "Giá cả cạnh tranh cho quãng đường dài" },
                { title: "Độ Tin Cậy Cao", description: "Lịch trình cố định và ổn định" }
              ]
            },
            options: {
              title: "Tùy Chọn Dịch Vụ",
              container: {
                title: "Vận Chuyển Container",
                features: [
                  "Dịch vụ container đầy",
                  "Vận chuyển hàng lẻ",
                  "Theo dõi thời gian thực",
                  "Kết nối đa điểm"
                ]
              },
              bulk: {
                title: "Vận Chuyển Hàng Rời",
                features: [
                  "Toa xe chuyên dụng",
                  "Xử lý hàng hóa đặc biệt",
                  "Giải pháp tùy chỉnh",
                  "Dịch vụ kho bãi"
                ]
              }
            }
          },
          inlandTrucking: {
            name: "Vận Tải Đường Bộ & Xuyên Biên Giới",
            title: "Dịch Vụ Vận Tải Đường Bộ & Xuyên Biên Giới",
          stats: {
            vehicles: { number: "1000+", label: "Phương Tiện" },
            countries: { number: "15+", label: "Quốc Gia" },
            coverage: { number: "95%", label: "Độ Phủ" }
          },
          overview: {
            title: "Tổng Quan Dịch Vụ",
            description: "Dịch vụ vận tải đường bộ và xuyên biên giới của chúng tôi cung cấp giải pháp vận chuyển door-to-door liền mạch khắp Đông Nam Á. Chúng tôi cung cấp dịch vụ đội xe chuyên dụng và thiết bị chuyên biệt cho nhiều loại hàng hóa."
          },
          features: {
            title: "Tính Năng Chính",
            items: [
              { title: "Tối Ưu Tuyến Đường", description: "Lập kế hoạch giao hàng hiệu quả" },
              { title: "Thiết Bị Chuyên Dụng", description: "Đa dạng loại xe tải" },
              { title: "Chuyên Môn Biên Giới", description: "Thông quan thuận lợi" },
              { title: "Theo Dõi GPS", description: "Giám sát lô hàng thời gian thực" }
            ]
          },
          options: {
            title: "Tùy Chọn Dịch Vụ",
            domestic: {
              title: "Vận Tải Nội Địa",
              features: [
                "Giao hàng door-to-door",
                "Dịch vụ nhanh và tiêu chuẩn",
                "Tùy chọn kiểm soát nhiệt độ",
                "Giao hàng chặng cuối"
              ]
            },
            crossBorder: {
              title: "Xuyên Biên Giới",
              features: [
                "Tuyến đường quốc tế",
                "Chứng từ hải quan",
                "Quản lý quá cảnh",
                "Dịch vụ đa quốc gia"
              ]
            }
          }
          },
          breakBulk: {
            name: "Hàng Rời & Hàng Quá Khổ",
            title: "Dịch Vụ Vận Chuyển Hàng Rời & Hàng Quá Khổ",
            stats: {
              experience: { number: "25+", label: "Năm Kinh Nghiệm" },
              projects: { number: "500+", label: "Dự Án Mỗi Năm" },
              specialists: { number: "50+", label: "Chuyên Gia" }
            },
            overview: {
              title: "Tổng Quan Dịch Vụ",
              description: "Chúng tôi chuyên xử lý các lô hàng rời và hàng quá khổ với đội ngũ chuyên gia giàu kinh nghiệm. Dịch vụ của chúng tôi bao gồm lập kế hoạch chi tiết, thiết bị chuyên dụng và giải pháp vận chuyển tùy chỉnh."
            },
            features: {
              title: "Tính Năng Chính",
              items: [
                { title: "Khảo Sát Chuyên Sâu", description: "Đánh giá tuyến đường và yêu cầu" },
                { title: "Thiết Bị Chuyên Dụng", description: "Trang thiết bị xử lý đặc biệt" },
                { title: "Giám Sát Toàn Diện", description: "Theo dõi và báo cáo chi tiết" },
                { title: "An Toàn Tối Ưu", description: "Quy trình an toàn nghiêm ngặt" }
              ]
            },
            options: {
              title: "Tùy Chọn Dịch Vụ",
              breakbulk: {
                title: "Hàng Rời",
                features: [
                  "Xử lý hàng rời chuyên nghiệp",
                  "Thiết bị nâng chuyên dụng",
                  "Kho bãi phù hợp",
                  "Đóng gói và bảo vệ hàng hóa"
                ]
              },
              oog: {
                title: "Hàng Quá Khổ",
                features: [
                  "Thiết bị quá khổ",
                  "Máy móc hạng nặng",
                  "Giải pháp tùy chỉnh",
                  "Khảo sát tuyến đường"
                ]
              }
            }
          }
        }
      },
      quote: {
        title: "Yêu Cầu Báo Giá",
        serviceType: {
          label: "Loại Dịch Vụ",
          placeholder: "Chọn dịch vụ",
          options: {
            sea: "Vận Tải Biển",
            air: "Vận Tải Hàng Không",
            land: "Vận Tải Đường Bộ",
            rail: "Vận Tải Đường Sắt"
          }
        },
        origin: {
          label: "Từ",
          placeholder: "Nhập thành phố/cảng đi"
        },
        destination: {
          label: "Đến",
          placeholder: "Nhập thành phố/cảng đến"
        },
        submit: "Nhận Báo Giá Miễn Phí"
      },
      tracking: {
        title: "Theo Dõi Lô Hàng",
        number: {
          label: "Mã Theo Dõi",
          placeholder: "Nhập mã theo dõi của bạn"
        },
        submit: "Theo Dõi Ngay"
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