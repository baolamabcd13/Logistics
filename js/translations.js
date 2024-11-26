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
        },
        footer: {
          contact: "For privacy-related questions, please contact our Data Protection Officer at:",
          email: "Security Email:",
          phone: "Phone:"
        }
      },
      cookiePage: {
        title: "Cookie Policy",
        lastUpdated: "Last updated: March 15, 2024",
        sections: {
          what: {
            title: "1. What Are Cookies?",
            content: "Cookies are small text files placed on your device when you visit our website. They help us provide a better experience by:",
            items: [
              "Remembering your preferences",
              "Understanding how you use our website",
              "Improving website functionality", 
              "Providing personalized content"
            ]
          },
          types: {
            title: "2. Types of Cookies We Use",
            essential: {
              title: "2.1 Essential Cookies",
              content: "These cookies are necessary for the website to function normally. Chúng cho phép các chức năng cơ bản như:",
              items: [
                "Điều hướng trang",
                "Truy cập vào khu vực bảo mật",
                "Chức năng giỏ hàng",
                "Xử lý thanh toán"
              ]
            },
            performance: {
              title: "2.2 Performance Cookies",
              content: "These cookies help us understand how visitors interact with our website by:",
              items: [
                "Collecting analytics data",
                "Identifying error messages",
                "Testing different designs",
                "Measuring website performance"
              ]
            },
            functionality: {
              title: "2.3 Functionality Cookies",
              content: "These cookies remember your preferences to enhance your experience:",
              items: [
                "Language preferences",
                "Location settings",
                "User account information",
                "Customized layouts"
              ]
            },
            targeting: {
              title: "2.4 Marketing Cookies",
              content: "These cookies are used for marketing purposes:",
              items: [
                "Displaying relevant advertisements",
                "Measuring advertising effectiveness",
                "Partner integration",
                "Social media features"
              ]
            }
          },
          management: {
            title: "3. Cookie Management",
            content: "You can control cookies through your browser settings:",
            items: [
              "Block all cookies",
              "Delete existing cookies",
              "Allow cookies from specific sites",
              "Set cookie preferences"
            ],
            note: "Note: Blocking certain types of cookies may affect your experience on our website."
          },
          thirdParty: {
            title: "4. Third Party Cookies",
            content: "We use services from the following trusted partners:",
            items: [
              "Google Analytics - Performance tracking",
              "Payment processors - Transaction security", 
              "Social media platforms - Content sharing",
              "Ad networks - Targeted advertising"
            ]
          },
          updates: {
            title: "5. Cookie Policy Updates",
            content: "We may update this policy as our services evolve. Please check periodically for changes."
          }
        },
        footer: {
          contact: "If you have questions about our cookie policy, please contact:",
          email: "Support email:",
          phone: "Phone:"
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
              ports: { number: "150+", label: "Global Ports" },
              tracking: { number: "24/7", label: "Tracking" },
              success: { number: "98%", label: "Success Rate" }
            },
            overview: {
              title: "Service Overview",
              description: "Our comprehensive sea freight solutions provide reliable and cost-effective shipping services through major ports worldwide. We specialize in Full Container Load (FCL) and Less than Container Load (LCL) shipments."
            },
            features: {
              title: "Key Features",
              items: [
                { title: "Global Coverage", description: "Access to major shipping routes and ports" },
                { title: "Flexible Solutions", description: "FCL and LCL options" },
                { title: "Cargo Insurance", description: "Comprehensive insurance options" },
                { title: "Reliable Schedules", description: "Regular departures and arrivals" }
              ]
            },
            options: {
              title: "Shipping Options",
              fcl: {
                title: "FCL Shipping",
                features: [
                  "Exclusive container use",
                  "Port-to-port delivery",
                  "Suitable for large shipments",
                  "Cost-effective for full containers"
                ]
              },
              lcl: {
                title: "LCL Shipping",
                features: [
                  "Shared container space",
                  "Flexible cargo sizes",
                  "Economical for small shipments",
                  "Regular consolidation services"
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
              ontime: { number: "99%", label: "On-Time Rate" }
            },
            overview: {
              title: "Service Overview", 
              description: "Experience fast and reliable air freight solutions connecting major airports worldwide. Our air transportation services are designed for time-sensitive shipments and high-value cargo."
            },
            features: {
              title: "Key Features",
              items: [
                { title: "Express Delivery", description: "Same-day and next-day delivery options" },
                { title: "Temperature Control", description: "Special handling for sensitive cargo" },
                { title: "Flexible Capacity", description: "From small parcels to charter services" },
                { title: "Customs Clearance", description: "Simplified documentation process" }
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
                  "Global coverage"
                ]
              }
            }
          },
          railFreight: {
            name: "Rail Freight",
            title: "Rail Freight Services",
            stats: {
              network: { number: "50,000+", label: "Km of Rail" },
              terminals: { number: "100+", label: "Terminals" },
              capacity: { number: "10,000+", label: "TEU/Month" }
            },
            overview: {
              title: "Service Overview",
              description: "Our rail freight services provide reliable and environmentally friendly transportation solutions. Connecting major logistics hubs through an extensive rail network."
            },
            features: {
              title: "Key Features", 
              items: [
                { title: "Green Transportation", description: "Reduced carbon footprint" },
                { title: "Seamless Connectivity", description: "Multimodal integration" },
                { title: "Cost Effective", description: "Competitive pricing for long distances" },
                { title: "High Reliability", description: "Fixed and stable schedules" }
              ]
            },
            options: {
              title: "Service Options",
              container: {
                title: "Container Transport",
                features: [
                  "Full container service",
                  "Less than container load",
                  "Real-time tracking",
                  "Multi-point connections"
                ]
              },
              bulk: {
                title: "Bulk Transport",
                features: [
                  "Specialized wagons",
                  "Special cargo handling",
                  "Customized solutions",
                  "Warehousing services"
                ]
              }
            }
          },
          inlandTrucking: {
            name: "Inland & Cross-Border Trucking",
            title: "Inland & Cross-Border Trucking Services",
            stats: {
              vehicles: { number: "1000+", label: "Vehicles" },
              countries: { number: "15+", label: "Countries" },
              coverage: { number: "95%", label: "Coverage" }
            },
            overview: {
              title: "Service Overview",
              description: "Our inland and cross-border trucking services provide seamless door-to-door transportation solutions across Southeast Asia. We offer dedicated fleet services and specialized equipment for various types of cargo."
            },
            features: {
              title: "Key Features",
              items: [
                { title: "Route Optimization", description: "Efficient delivery planning" },
                { title: "Specialized Equipment", description: "Diverse truck fleet" },
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
                "Express and standard services",
                "Temperature control options",
                "Last mile delivery"
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
          breakBulk: {
            name: "Break Bulk & Out of Gauge",
            title: "Break Bulk & Out of Gauge Transportation Services",
            stats: {
              experience: { number: "25+", label: "Years Experience" },
              projects: { number: "500+", label: "Projects Per Year" },
              specialists: { number: "50+", label: "Specialists" }
            },
            overview: {
              title: "Service Overview", 
              description: "We specialize in handling break bulk and out of gauge cargo with our experienced team of experts. Our services include detailed planning, specialized equipment and customized transportation solutions."
            },
            features: {
              title: "Key Features",
              items: [
                { title: "In-Depth Survey", description: "Route and requirements assessment" },
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
                  "Suitable warehousing",
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
          placeholder: "Select service",
          options: {
            sea: "Sea Freight",
            air: "Air Freight", 
            land: "Land Transport",
            rail: "Rail Transport"
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
      },
      logistics: {
        title: "Logistics & Supply Chain",
        services: {
          mainServices: "Main Services",
          customs: {
            name: "Customs Declaration Services",
            title: "Customs Declaration Services",
            stats: {
              countries: "50+",
              countriesLabel: "Countries",
              support: "24/7",
              supportLabel: "Support",
              clearance: "99%",
              clearanceLabel: "Clearance Rate"
            },
            overview: {
              title: "Service Overview",
              description: "Our customs declaration services ensure smooth and compliant international trade operations. We handle all customs documentation, taxes and regulations to facilitate cross-border shipments."
            },
            features: {
              title: "Key Features",
              compliance: {
                title: "Compliance Management",
                description: "Professional handling of regulations"
              },
              calculator: {
                title: "Tax Calculator",
                description: "Accurate cost estimation"
              },
              documentation: {
                title: "Documentation",
                description: "Complete paperwork handling"
              },
              support: {
                title: "24/7 Support",
                description: "Continuous assistance"
              }
            },
            options: {
              title: "Service Options",
              import: {
                title: "Import Customs",
                features: [
                  "Import declaration",
                  "Duty calculation",
                  "Documentation review",
                  "Compliance check"
                ]
              },
              export: {
                title: "Export Customs",
                features: [
                  "Export documentation",
                  "License management",
                  "Certificate handling",
                  "Customs consulting"
                ]
              }
            }
          },
          insurance: {
            name: "Cargo Insurance",
            title: "Cargo Insurance Solutions",
            stats: {
              coverage: "100%",
              coverageLabel: "Coverage Area",
              processing: "48h",
              processingLabel: "Claims Processing",
              satisfaction: "95%",
              satisfactionLabel: "Customer Satisfaction"
            },
            overview: {
              title: "Service Overview",
              description: "Protect your valuable cargo with comprehensive insurance solutions. We provide suitable insurance options to protect shipments from loss, damage and unforeseen situations during transportation."
            },
            features: {
              title: "Key Features",
              coverage: {
                title: "Comprehensive Coverage",
                description: "Protection against all risks"
              },
              claims: {
                title: "Fast Claims Processing",
                description: "Quick handling and resolution"
              },
              global: {
                title: "Global Coverage",
                description: "Worldwide protection"
              },
              rates: {
                title: "Competitive Rates",
                description: "Cost-effective solutions"
              }
            },
            options: {
              title: "Service Options",
              standard: {
                title: "Standard Coverage",
                features: [
                  "Basic damage protection",
                  "Loss coverage",
                  "Transit insurance",
                  "General liability"
                ]
              },
              premium: {
                title: "Premium Coverage",
                features: [
                  "All-risk coverage",
                  "Door-to-door protection",
                  "Priority claims handling",
                  "Extended liability"
                ]
              }
            }
          },
          warehousing: {
            name: "Warehousing Services",
            stats: {
              accuracy: {
                number: "99.9%",
                label: "Accuracy"
              },
              locations: {
                number: "15+",
                label: "Locations"
              }
            },
            overview: {
              title: "Service Overview", 
              description: "Our modern warehousing facilities provide secure storage and efficient distribution solutions. With advanced inventory management systems and strategic locations, we ensure your products are safely stored and delivered on time."
            },
            features: {
              title: "Key Features",
              inventory: {
                title: "Inventory Management",
                description: "Real-time tracking system"
              },
              climate: {
                title: "Temperature Control",
                description: "Dedicated cold storage"
              },
              security: {
                title: "24/7 Security",
                description: "Advanced protection systems"
              },
              crossdock: {
                title: "Cross-Docking",
                description: "Efficient distribution"
              }
            },
            options: {
              title: "Service Options",
              standard: {
                title: "Standard Storage",
                features: [
                  "General storage space",
                  "Basic inventory management",
                  "Security monitoring",
                  "Loading/unloading"
                ]
              },
              value: {
                title: "Value-Added Services",
                features: [
                  "Pick and pack",
                  "Kitting and assembly",
                  "Quality inspection",
                  "Inventory optimization"
                ]
              }
            }
          },
          ecommerce: {
            name: "E-commerce (Express Delivery)",
            stats: {
              delivery: {
                number: "2-3",
                label: "Delivery Days"
              },
              ontime: {
                number: "98%",
                label: "On-Time Rate"
              },
              partners: {
                number: "200+",
                label: "Integration Partners"
              }
            },
            overview: {
              title: "Service Overview",
              description: "Our specialized e-commerce logistics solutions are designed to meet the unique challenges of online retail. From fast air delivery to seamless marketplace integration, we help grow your online business globally."
            },
            features: {
              title: "Key Features",
              express: {
                title: "Express Delivery",
                description: "Global fast shipping"
              },
              fulfillment: {
                title: "Order Fulfillment",
                description: "End-to-end solutions"
              },
              returns: {
                title: "Returns Management",
                description: "Efficient reverse logistics"
              },
              analytics: {
                title: "Data Analytics",
                description: "Performance insights"
              }
            },
            options: {
              title: "Service Options",
              basic: {
                title: "Basic E-Commerce",
                features: [
                  "Standard shipping",
                  "Order processing",
                  "Basic tracking",
                  "Returns handling"
                ]
              },
              premium: {
                title: "Premium E-Commerce",
                features: [
                  "Express delivery",
                  "Marketplace integration",
                  "Advanced analytics",
                  "Priority support"
                ]
              }
            }
          },
          quote: {
            title: "Request a Quote",
            serviceType: "Service Type",
            selectService: "Select service",
            customsBrokerage: "Customs Brokerage Services",
            cargoInsurance: "Cargo Insurance",
            warehousing: "Warehousing Services",
            ecommerce: "E-commerce Services",
            location: "Service Location",
            locationPlaceholder: "Enter location",
            cargoType: "Cargo Type",
            cargoPlaceholder: "Enter cargo type",
            submit: "Get Free Quote"
          }
        }
      },
      industries: {
        title: "Industries",
        sections: {
          mainIndustries: "Main Industries",
          specializedIndustries: "Specialized Industries"
        },
        categories: {
          foodBeverage: "Food & Beverage",
          garmentFootwear: "Garment & Footwear",
          furnitureHouseware: "Furniture & Houseware",
          metal: "Metal & Construction Materials",
          machinery: "Machinery & Equipment",
          healthcareCosmetics: "Healthcare & Cosmetics",
          dangerousGoods: "Dangerous Goods",
          automotive: "Automotive & Parts",
          electronics: "Electronics"
        },
        foodBeverage: {
          title: "Food & Beverage Industry",
          stats: {
            temperature: {
              number: "-30°C",
              label: "Cold Chain"
            },
            certification: {
              number: "HACCP",
              label: "Certified"
            }
          },
          overview: {
            title: "Industry Overview",
            description: "Specialized logistics solutions for the food and beverage industry, ensuring temperature-controlled transportation and storage with strict compliance to food safety standards."
          },
          features: {
            title: "Key Capabilities",
            temperature: {
              title: "Temperature Control",
              description: "Comprehensive cold chain"
            },
            quality: {
              title: "Quality Control",
              description: "HACCP compliance"
            },
            handling: {
              title: "Special Handling",
              description: "Food-grade equipment"
            },
            time: {
              title: "Time Critical",
              description: "Express delivery options"
            }
          }
        },
        garmentFootwear: {
          title: "Garment & Footwear Industry",
          stats: {
            dustFree: {
              number: "100%",
              label: "Dust Free"
            },
            vmi: {
              number: "VMI",
              label: "Solutions"
            },
            distribution: {
              number: "B2B",
              label: "Distribution"
            }
          },
          overview: {
            title: "Industry Overview",
            description: "Specialized logistics solutions for fashion and footwear brands, ensuring garment-on-hanger transport, careful handling and retail-ready distribution services."
          },
          features: {
            title: "Key Capabilities",
            storage: {
              title: "Garment Storage",
              description: "Specialized hanging systems"
            },
            value: {
              title: "Value Added Services",
              description: "Labeling & packaging"
            },
            retail: {
              title: "Retail Distribution",
              description: "Store-ready delivery"
            },
            quality: {
              title: "Quality Control",
              description: "Inspection services"
            }
          }
        },
        furnitureHouseware: {
          title: "Furniture & Houseware Industry",
          stats: {
            space: {
              number: "XL",
              label: "Storage Space"
            },
            handling: {
              number: "Safe",
              label: "Safe Handling"
            },
            delivery: {
              number: "D2C",
              label: "Delivery"
            }
          },
          overview: {
            title: "Industry Overview",
            description: "Comprehensive logistics solutions for furniture and houseware companies, providing specialized handling for large items and delicate housewares with premium delivery services."
          },
          features: {
            title: "Key Capabilities",
            handling: {
              title: "Large Item Handling",
              description: "Specialized equipment"
            },
            delivery: {
              title: "Home Delivery",
              description: "Premium service"
            },
            assembly: {
              title: "Assembly Services",
              description: "Professional installation"
            },
            storage: {
              title: "Storage Solutions",
              description: "Climate-controlled"
            }
          }
        },
        metalConstruction: {
          title: "Metal & Construction Materials",
          stats: {
            capacity: {
              number: "500T",
              label: "Capacity"
            },
            lifting: {
              number: "Heavy",
              label: "Lifting"
            }
          },
          overview: {
            title: "Industry Overview",
            description: "Specialized handling and transportation solutions for construction materials and metal products, with heavy-duty equipment and expertise in project cargo logistics."
          },
          features: {
            title: "Key Capabilities",
            lifting: {
              title: "Heavy Lifting",
              description: "Specialized equipment"
            },
            project: {
              title: "Project Cargo",
              description: "Custom solutions"
            },
            loading: {
              title: "Loading Operations",
              description: "Professional handling"
            },
            storage: {
              title: "Storage Facilities",
              description: "Secure facilities"
            }
          }
        },
        machinery: {
          title: "Machinery & Equipment",
          stats: {
            handling: {
              number: "OOG",
              label: "Handling"
            },
            expertise: {
              number: "Tech",
              label: "Expertise"
            }
          },
          overview: {
            title: "Industry Overview",
            description: "Professional logistics solutions for machinery and industrial equipment, including specialized handling for oversized cargo and technical installation services."
          },
          features: {
            title: "Key Capabilities",
            technical: {
              title: "Technical Handling",
              description: "Specialized expertise"
            },
            installation: {
              title: "Installation",
              description: "Professional setup"
            },
            transport: {
              title: "OOG Transport",
              description: "Oversized cargo"
            },
            insurance: {
              title: "Insurance",
              description: "Comprehensive coverage"
            }
          }
        },
        healthcare: {
          title: "Healthcare & Cosmetics",
          stats: {
            certification: {
              number: "GDP",
              label: "Certification"
            },
            temperature: {
              number: "2-8°C",
              label: "Cold Chain"
            }
          },
          overview: {
            title: "Industry Overview",
            description: "GDP-certified healthcare logistics solutions ensuring temperature-controlled transportation and storage for pharmaceuticals, medical supplies, and cosmetics."
          },
          features: {
            title: "Key Capabilities",
            temperature: {
              title: "Temperature Control",
              description: "Precise monitoring"
            },
            gdp: {
              title: "GDP Compliance",
              description: "Certified handling"
            },
            cleanroom: {
              title: "Clean Room",
              description: "Sterile environment"
            },
            transport: {
              title: "Medical Transport",
              description: "Specialized vehicles"
            }
          }
        },
        dangerous: {
          title: "Dangerous Goods",
          stats: {
            certification: {
              number: "IMDG",
              label: "Certification"
            },
            transport: {
              number: "ADR",
              label: "Transport"
            }
          },
          overview: {
            title: "Industry Overview",
            description: "Certified dangerous goods handling and transportation services, ensuring compliance with international regulations and safety standards for hazardous materials."
          },
          features: {
            title: "Key Capabilities",
            certified: {
              title: "DG Certification",
              description: "Licensed handling"
            },
            documentation: {
              title: "Documentation",
              description: "Full compliance"
            },
            storage: {
              title: "Special Storage",
              description: "Secure facilities"
            },
            routing: {
              title: "Route Planning",
              description: "Safety optimized"
            }
          }
        },
        automotive: {
          title: "Automotive Industry",
          stats: {
            delivery: {
              number: "JIT",
              label: "Delivery"
            },
            certification: {
              number: "QMS",
              label: "Certification"
            },
            integration: {
              number: "EDI",
              label: "Integration"
            }
          },
          overview: {
            title: "Industry Overview",
            description: "Specialized automotive logistics solutions supporting production supply chains with just-in-time delivery and quality management systems."
          },
          features: {
            title: "Key Capabilities",
            vehicle: {
              title: "Vehicle Logistics",
              description: "Specialized transport"
            },
            production: {
              title: "Production Support",
              description: "JIT delivery"
            },
            parts: {
              title: "Parts Management",
              description: "Inventory control"
            },
            sequencing: {
              title: "Sequencing",
              description: "Line feeding"
            }
          }
        },
        electronics: {
          title: "Electronics Industry",
          stats: {
            protection: {
              number: "ESD",
              label: "Protected"
            },
            tracking: {
              number: "IoT",
              label: "Tracking"
            }
          },
          overview: {
            title: "Industry Overview",
            description: "Specialized electronics logistics solutions ensuring safe handling and storage for sensitive electronic components and devices."
          },
          features: {
            title: "Key Capabilities",
            protection: {
              title: "ESD Protected",
              description: "Safe handling"
            },
            tracking: {
              title: "IoT Tracking",
              description: "Real-time monitoring"
            },
            security: {
              title: "Secure Storage",
              description: "Secure facilities"
            },
            storage: {
              title: "Special Storage",
              description: "Secure facilities"
            }
          }
        },
        quote: {
          title: "Request Industry Solution",
          industryType: "Industry Type",
          selectIndustry: "Select industry",
          serviceRequired: "Service Required",
          selectService: "Select service",
          specialRequirements: "Special Requirements",
          requirementsPlaceholder: "Enter any special requirements",
          submit: "Get Solution",
          industries: {
            food: "Food & Beverage",
            garment: "Garment & Footwear",
            furniture: "Furniture & Houseware",
            construction: "Construction Materials",
            machinery: "Machinery & Equipment",
            healthcare: "Healthcare & Cosmetics",
            dangerous: "Dangerous Goods",
            automotive: "Automotive",
            electronics: "Electronics"
          },
          services: {
            transport: "Transportation",
            warehouse: "Warehousing",
            customs: "Customs Clearance",
            distribution: "Distribution"
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
            "Tuyến vận chuyển quốc t",
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
            text: "LogiTrack đã chuyển đổi hoạt động chuỗi cung ng của chúng tôi. Dịch vụ hiệu quả và khả năng theo dõi thời gian thực đã cải thiện đáng kể thời gian giao hàng của chúng tôi.",
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
          subtitle: "Tìm Chúng Tôi Trên Bản Đ",
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
      copyright: "2024 LogiTrack. Đã đồng ý đăng ký bản quyền.",
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
              content: "Chúng tôi cố gắng cung cấp dịch vụ 24/7, nhưng không thể đảm bảo tính khả dụng liên tục của dịch vụ do bảo trì, cập nhật hoặc các yếu tố ngoi tầm kiểm soát của chúng tôi."
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
            content: "Tại LogiTrack, chúng tôi rất coi trọng quyền riêng tư của bạn. Chính sách Bảo mật này gii thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ thông tin của bạn."
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
              content: "Chúng tôi tự động thu thập một số thông tin về thiết bị của bạn và cách bạn tương tác với dịch v của chúng tôi.",
              items: [
                "Địa chỉ IP và thông tin thiết bị",
                "Loại trình duyệt và cài đặt",
                "Dữ liu vị trí",
                "Mẫu sử dụng và tùy chọn"
              ]
            }
          },
          dataUse: {
            title: "3. Sử Dng Thông Tin",
            content: "Chúng tôi sử dụng thông tin của bạn để:",
            items: [
              "Xử lý và theo dõi lô hàng",
              "Cung cấp hỗ trợ khách hàng",
              "Ci thiện dịch vụ",
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
            content: "Chúng tôi sử dụng cookie và các công nghệ tương tự ể nâng cao trải nghiệm của bạn. Xem Chính sách Cookie của chúng tôi để biết thêm chi tiết."
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
              "Nền tảng mng xã hội - Chia sẻ nội dung",
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
              description: "Giải pháp vận tải biển toàn diện của chúng tôi cung cấp dịch vụ vận chuyển đáng tin cậy và hiệu quả về chi phí qua các cảng lớn trên toàn thế giới. Chúng tôi chuyên về c hàng nguyên container (FCL) và hàng lẻ (LCL)."
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
            title: "Tùy Chọn Dch Vụ",
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
      },
      logistics: {
        title: "Logistics & Chuỗi Cung Ứng",
        services: {
          mainServices: "Dịch Vụ Chính",
          customs: {
            name: "Dịch Vụ Khai Báo Hải Quan",
            title: "Dịch Vụ Khai Báo Hải Quan",
            stats: {
              countries: "50+",
              countriesLabel: "Quốc Gia",
              support: "24/7",
              supportLabel: "Hỗ Trợ",
              clearance: "99%",
              clearanceLabel: "Tỷ Lệ Thông Quan"
            },
            overview: {
              title: "Tổng Quan Dịch Vụ",
              description: "Dịch vụ khai báo hải quan của chúng tôi đảm bảo hoạt động thương mại quốc tế suôn sẻ và tuân thủ. Chúng tôi xử lý tất cả các chứng từ hải quan, thuế và quy định để tạo điều kiện thuận lợi cho việc vận chuyển xuyên biên giới."
            },
            features: {
              title: "Tính Năng Chính",
              compliance: {
                title: "Quản Lý Tuân Thủ",
                description: "Xử lý chuyên nghiệp các quy định"
              },
              calculator: {
                title: "Tính Toán Thuế",
                description: "Ước tính chi phí chính xác"
              },
              documentation: {
                title: "Chứng Từ",
                description: "Xử lý đầy đủ giấy tờ"
              },
              support: {
                title: "Hỗ Trợ 24/7",
                description: "Hỗ trợ liên tục"
              }
            },
            options: {
              title: "Các Loại Dịch Vụ",
              import: {
                title: "Thủ Tục Nhập Khẩu",
                features: [
                  "Khai báo nhập khẩu",
                  "Tính toán thuế",
                  "Kiểm tra chứng từ",
                  "Kiểm tra tuân thủ"
                ]
              },
              export: {
                title: "Thủ Tục Xuất Khẩu",
                features: [
                  "Chứng từ xuất khẩu",
                  "Quản lý giấy phép",
                  "Xử lý chứng nhận",
                  "Tư vấn hải quan"
                ]
              }
            }
          },
          insurance: {
            name: "Bảo Hiểm Hàng Hóa",
            title: "Giải Pháp Bảo Hiểm Hàng Hóa",
            stats: {
              coverage: "100%",
              coverageLabel: "Phạm Vi Bảo Hiểm",
              processing: "48h",
              processingLabel: "Xử Lý Bồi Thường",
              satisfaction: "95%",
              satisfactionLabel: "Khách Hàng Hài Lòng"
            },
            overview: {
              title: "Tổng Quan Dịch Vụ",
              description: "Bảo vệ hàng hóa giá trị của bạn với các giải pháp bảo hiểm toàn diện. Chúng tôi cung cấp các tùy chọn bảo hiểm phù hợp để bảo vệ lô hàng khỏi mất mát, hư hỏng và các tình huống không lường trước trong quá trình vận chuyển."
            },
            features: {
              title: "Tính Năng Chính",
              coverage: {
                title: "Bảo Hiểm Toàn Diện",
                description: "Bảo vệ mọi rủi ro"
              },
              claims: {
                title: "Bồi Thường Nhanh Chóng",
                description: "Xử lý và giải quyết nhanh"
              },
              global: {
                title: "Phạm Vi Toàn Cầu",
                description: "Bảo vệ trên toàn thế giới"
              },
              rates: {
                title: "Phí Cạnh Tranh",
                description: "Giải pháp tiết kiệm chi phí"
              }
            },
            options: {
              title: "Các Gói Bảo Hiểm",
              standard: {
                title: "Bảo Hiểm Cơ Bản",
                features: [
                  "Bảo vệ hư hỏng cơ bản",
                  "Bảo hiểm mất mát",
                  "Bảo hiểm vận chuyển",
                  "Trách nhiệm chung"
                ]
              },
              premium: {
                title: "Bảo Hiểm Cao Cấp",
                features: [
                  "Bảo hiểm mọi rủi ro",
                  "Bảo vệ từ điểm đi đến điểm đến",
                  "Xử lý bồi thường ưu tiên",
                  "Trách nhiệm mở rộng"
                ]
              }
            }
          },
          warehousing: {
            name: "Dịch Vụ Kho Bãi",
            stats: {
              accuracy: {
                number: "99.9%",
                label: "Độ Chính Xác"
              },
              locations: {
                number: "15+",
                label: "Địa Điểm"
              }
            },
            overview: {
              title: "Tổng Quan Dịch Vụ",
              description: "Cơ sở kho bãi hiện đại của chúng tôi cung cấp giải pháp lưu trữ an toàn và phân phối hiệu quả. Với hệ thống quản lý hàng tồn kho tiên tiến và vị trí chiến lược, chúng tôi đảm bảo sản phẩm của bạn được lưu trữ an toàn và giao hàng kịp thời."
            },
            features: {
              title: "Tính Năng Chính",
              inventory: {
                title: "Quản Lý Hàng Tồn Kho",
                description: "Hệ thống theo dõi thời gian thực"
              },
              climate: {
                title: "Kiểm Soát Nhiệt Độ",
                description: "Kho lạnh chuyên dụng"
              },
              security: {
                title: "An Ninh 24/7",
                description: "Hệ thống bảo vệ tiên tiến"
              },
              crossdock: {
                title: "Trung Chuyển Hàng Hóa",
                description: "Phân phối hiệu quả"
              }
            },
            options: {
              title: "Các Dịch Vụ Kho Bãi",
              standard: {
                title: "Kho Bãi Tiêu Chuẩn",
                features: [
                  "Không gian lưu trữ chung",
                  "Quản lý hàng tồn kho cơ bản",
                  "Giám sát an ninh",
                  "Bốc xếp hàng hóa"
                ]
              },
              value: {
                title: "Dịch Vụ Giá Trị Gia Tăng",
                features: [
                  "Nhặt và đóng gói",
                  "Lắp ráp và đóng bộ",
                  "Kiểm tra chất lượng",
                  "Tối ưu hóa hàng tồn kho"
                ]
              }
            }
          },
          ecommerce: {
            name: "Thương Mại Điện Tử (Chuyển Phát Nhanh)",
            stats: {
              delivery: {
                number: "2-3",
                label: "Ngày Giao Hàng"
              },
              ontime: {
                number: "98%",
                label: "Tỷ Lệ Đúng Hẹn"
              },
              partners: {
                number: "200+",
                label: "Đối Tác Tích Hợp"
              }
            },
            overview: {
              title: "Tổng Quan Dịch Vụ",
              description: "Giải pháp logistics thương mại điện tử chuyên biệt của chúng tôi được thiết kế để đáp ứng những thách thức đặc thù của bán lẻ trực tuyến. Từ giao hàng nhanh bằng đường hàng không đến tích hợp sàn thương mại liền mạch, chúng tôi giúp phát triển kinh doanh trực tuyến của bạn trên toàn cầu."
            },
            features: {
              title: "Tính Năng Chính",
              express: {
                title: "Chuyển Phát Nhanh",
                description: "Giao hàng nhanh toàn cầu"
              },
              fulfillment: {
                title: "Hoàn Thiện Đơn Hàng",
                description: "Giải pháp trọn gói"
              },
              returns: {
                title: "Quản Lý Hoàn Trả",
                description: "Logistics hoàn trả hiệu quả"
              },
              analytics: {
                title: "Phân Tích Dữ Liệu",
                description: "Thông tin hiệu suất"
              }
            },
            options: {
              title: "Các Dịch Vụ TMĐT",
              basic: {
                title: "TMĐT Cơ Bản",
                features: [
                  "Vận chuyển tiêu chuẩn",
                  "Xử lý đơn hàng",
                  "Theo dõi cơ bản",
                  "Xử lý hoàn trả"
                ]
              },
              premium: {
                title: "TMĐT Cao Cấp",
                features: [
                  "Giao hàng nhanh",
                  "Tích hợp sàn thương mại",
                  "Phân tích nâng cao",
                  "Hỗ trợ ưu tiên"
                ]
              }
            }
          },
          quote: {
            title: "Yêu Cầu Báo Giá",
            serviceType: "Loại Dịch Vụ", 
            selectService: "Chọn dịch vụ",
            customsBrokerage: "Dịch Vụ Khai Báo Hải Quan",
            cargoInsurance: "Bảo Hiểm Hàng Hóa",
            warehousing: "Dịch Vụ Kho Bãi",
            ecommerce: "Dịch Vụ Thương Mại Điện Tử",
            location: "Địa Điểm Dịch Vụ",
            locationPlaceholder: "Nhập địa điểm",
            cargoType: "Loại Hàng Hóa",
            cargoPlaceholder: "Nhập loại hàng hóa", 
            submit: "Nhận Báo Giá Miễn Phí"
          }
        }
      },
      industries: {
        title: "Ngành Nghề",
        sections: {
          mainIndustries: "Ngành Nghề Chính",
          specializedIndustries: "Ngành Nghề Chuyên Biệt"
        },
        categories: {
          foodBeverage: "Thực Phẩm & Đồ Uống",
          garmentFootwear: "May Mặc & Giày Dép",
          furnitureHouseware: "Nội Thất & Đồ Gia Dụng",
          metalConstruction: "Kim Loại & Vật Liệu Xây Dựng",
          machineryEquipment: "Máy Móc & Thiết Bị",
          healthcareCosmetics: "Y Tế & Mỹ Phẩm",
          dangerousGoods: "Hàng Hóa Nguy Hiểm",
          automotive: "Ô Tô & Phụ Tùng",
          electronics: "Điện Tử"
        },
        foodBeverage: {
          title: "Ngành Thực Phẩm & Đồ Uống",
          stats: {
            temperature: {
              number: "-30°C",
              label: "Chuỗi Lạnh"
            },
            certification: {
              number: "HACCP",
              label: "Chứng Nhận"
            }
          },
          overview: {
            title: "Tổng Quan Ngành",
            description: "Giải pháp logistics chuyên biệt cho ngành thực phẩm và đồ uống, đảm bảo vận chuyển và lưu trữ có kiểm soát nhiệt độ với sự tuân thủ nghiêm ngặt các tiêu chuẩn an toàn thực phẩm."
          },
          features: {
            title: "Khả Năng Chính",
            temperature: {
              title: "Kiểm Soát Nhiệt Độ",
              description: "Chuỗi lạnh toàn diện"
            },
            quality: {
              title: "Kiểm Soát Chất Lượng",
              description: "Tuân thủ HACCP"
            },
            handling: {
              title: "Xử Lý Đặc Biệt",
              description: "Thiết bị cấp thực phẩm"
            },
            time: {
              title: "Thời Gian Quan Trọng",
              description: "Tùy chọn giao hàng nhanh"
            }
          }
        },
        garmentFootwear: {
          title: "Ngành May Mặc & Giày Dép",
          stats: {
            dustFree: {
              number: "100%",
              label: "Không Bụi"
            },
            vmi: {
              number: "VMI",
              label: "Giải Pháp"
            },
            distribution: {
              number: "B2B",
              label: "Phân Phối"
            }
          },
          overview: {
            title: "Tổng Quan Ngành",
            description: "Giải pháp logistics chuyên biệt cho các thương hiệu thời trang và giày dép, đảm bảo vận chuyển hàng treo, xử lý cẩn thận và dịch vụ phân phối sẵn sàng cho bán lẻ."
          },
          features: {
            title: "Khả Năng Chính",
            storage: {
              title: "Kho Hàng May Mặc",
              description: "Hệ thống treo chuyên dụng"
            },
            value: {
              title: "Dịch Vụ Giá Trị Gia Tăng",
              description: "Dán nhãn & đóng gói"
            },
            retail: {
              title: "Phân Phối Bán Lẻ",
              description: "Giao hàng sẵn sàng cho cửa hàng"
            },
            quality: {
              title: "Kiểm Soát Chất Lượng",
              description: "Dịch vụ kiểm tra"
            }
          }
        },
        furnitureHouseware: {
          title: "Ngành Nội Thất & Đồ Gia Dụng",
          stats: {
            space: {
              number: "XL",
              label: "Không Gian Hàng"
            },
            handling: {
              number: "Safe",
              label: "Xử Lý An Toàn"
            },
            delivery: {
              number: "D2C",
              label: "Giao Hàng"
            }
          },
          overview: {
            title: "Tổng Quan Ngành",
            description: "Giải pháp logistics toàn diện cho các công ty nội thất và đồ gia dụng, cung cấp dịch vụ xử lý chuyên biệt cho các mặt hàng lớn và hàng gia dụng tinh xảo với dịch vụ giao hàng cao cấp."
          },
          features: {
            title: "Khả Năng Chính",
            handling: {
              title: "Xử Lý Hàng Cỡ Lớn",
              description: "Thiết bị chuyên dụng"
            },
            delivery: {
              title: "Giao Hàng Tận Nhà",
              description: "Dịch vụ cao cấp"
            },
            assembly: {
              title: "Dịch Vụ Lắp Ráp",
              description: "Lắp đặt chuyên nghiệp"
            },
            storage: {
              title: "Giải Pháp Lưu Trữ",
              description: "Kiểm soát nhiệt độ"
            }
          }
        },
        metalConstruction: {
          title: "Kim Loại & Vật Liệu Xây Dựng",
          stats: {
            capacity: {
              number: "500T",
              label: "Sức Chứa"
            },
            lifting: {
              number: "Heavy",
              label: "Nâng Hạ"
            }
          },
          overview: {
            title: "Tổng Quan Ngành",
            description: "Giải pháp xử lý và vận chuyển chuyên biệt cho vật liệu xây dựng và sản phẩm kim loại, với thiết bị hạng nặng và chuyên môn trong logistics hàng dự án."
          },
          features: {
            title: "Khả Năng Chính",
            lifting: {
              title: "Nâng Hạ Hàng Nặng",
              description: "Thiết bị chuyên dụng"
            },
            project: {
              title: "Hàng Dự Án",
              description: "Giải pháp tùy chỉnh"
            },
            loading: {
              title: "Bốc Xếp",
              description: "Xử lý chuyên nghiệp"
            },
            storage: {
              title: "Kho Bãi",
              description: "Cơ sở an toàn"
            }
          }
        },
        machinery: {
          title: "Máy Móc & Thiết Bị",
          stats: {
            handling: {
              number: "OOG",
              label: "Xử Lý"
            },
            expertise: {
              number: "Tech",
              label: "Chuyên Môn"
            }
          },
          overview: {
            title: "Tổng Quan Ngành",
            description: "Giải pháp logistics chuyên nghiệp cho máy móc và thiết bị công nghiệp, bao gồm xử lý chuyên biệt cho hàng quá khổ và dịch vụ lắp đặt kỹ thuật."
          },
          features: {
            title: "Khả Năng Chính",
            technical: {
              title: "Xử Lý Kỹ Thuật",
              description: "Chuyên môn đặc biệt"
            },
            installation: {
              title: "Lắp Đặt",
              description: "Thiết lập chuyên nghiệp"
            },
            transport: {
              title: "Vận Chuyển OOG",
              description: "Hàng quá khổ"
            },
            insurance: {
              title: "Bảo Hiểm",
              description: "Bảo hiểm toàn diện"
            }
          }
        },
        healthcare: {
          title: "Y Tế & Mỹ Phẩm",
          stats: {
            certification: {
              number: "GDP",
              label: "Chứng Nhận"
            },
            temperature: {
              number: "2-8°C",
              label: "Chuỗi Lạnh"
            }
          },
          overview: {
            title: "Tổng Quan Ngành",
            description: "Giải pháp logistics y tế được chứng nhận GDP đảm bảo vận chuyển và lưu trữ có kiểm soát nhiệt độ cho dược phẩm, vật tư y tế và mỹ phẩm."
          },
          features: {
            title: "Khả Năng Chính",
            temperature: {
              title: "Kiểm Soát Nhiệt Độ",
              description: "Giám sát chính xác"
            },
            gdp: {
              title: "Tuân Thủ GDP",
              description: "Xử lý được chứng nhận"
            },
            cleanroom: {
              title: "Phòng Sạch",
              description: "Môi trường vô trùng"
            },
            transport: {
              title: "Vận Chuyển Y Tế",
              description: "Xe chuyên dụng"
            }
          }
        },
        dangerous: {
          title: "Hàng Hóa Nguy Hiểm",
          stats: {
            certification: {
              number: "IMDG",
              label: "Chứng Nhận"
            },
            transport: {
              number: "ADR",
              label: "Vận Chuyển"
            }
          },
          overview: {
            title: "Tổng Quan Ngành",
            description: "Dịch vụ xử lý và vận chuyển hàng hóa nguy hiểm được chứng nhận, đảm bảo tuân thủ các quy định quốc tế và tiêu chuẩn an toàn cho vật liệu nguy hiểm."
          },
          features: {
            title: "Khả Năng Chính",
            certified: {
              title: "Chứng Nhận DG",
              description: "Xử lý được cấp phép"
            },
            documentation: {
              title: "Chứng Từ",
              description: "Tuân thủ đầy đủ"
            },
            storage: {
              title: "Kho Bãi Đặc Biệt",
              description: "Cơ sở an toàn"
            },
            routing: {
              title: "Lập Tuyến",
              description: "Tối ưu an toàn"
            }
          }
        },
        automotive: {
          title: "Ngành Công Nghiệp Ô Tô",
          stats: {
            delivery: {
              number: "JIT",
              label: "Giao Hàng"
            },
            certification: {
              number: "QMS",
              label: "Chứng Nhận"
            },
            integration: {
              number: "EDI",
              label: "Tích Hợp"
            }
          },
          overview: {
            title: "Tổng Quan Ngành",
            description: "Giải pháp logistics chuyên biệt cho ngành ô tô hỗ trợ chuỗi cung ứng sản xuất với giao hàng đúng thời điểm và hệ thống quản lý chất lượng."
          },
          features: {
            title: "Khả Năng Chính",
            vehicle: {
              title: "Logistics Xe",
              description: "Vận chuyển chuyên dụng"
            },
            production: {
              title: "Hỗ Trợ Sản Xuất",
              description: "Giao hàng JIT"
            },
            parts: {
              title: "Quản Lý Phụ Tùng",
              description: "Kiểm soát tồn kho"
            },
            sequencing: {
              title: "Sắp Xếp Tuần Tự",
              description: "Cấp liệu dây chuyền"
            }
          }
        },
        electronics: {
          title: "Ngành Điện Tử",
          stats: {
            protection: {
              number: "ESD",
              label: "Bảo Vệ"
            },
            tracking: {
              number: "IoT",
              label: "Theo Dõi"
            }
          },
          overview: {
            title: "Tổng Quan Ngành",
            description: "Giải pháp logistics điện tử chuyên biệt đảm bảo xử lý và lưu trữ an toàn cho các linh kiện và thiết bị điện tử nhạy cảm."
          },
          features: {
            title: "Khả Năng Chính",
            protection: {
              title: "Bảo Vệ ESD",
              description: "Xử lý an toàn"
            },
            tracking: {
              title: "Theo Dõi IoT",
              description: "Giám sát thời gian thực"
            },
            security: {
              title: "Kho Bãi An Toàn",
              description: "Cơ sở bảo mật"
            },
            storage: {
              title: "Kho Bãi Đặc Biệt",
              description: "Cơ sở bảo mật"
            }
          }
        },
        quote: {
          title: "Yêu Cầu Giải Pháp Ngành",
          industryType: "Loại Ngành",
          selectIndustry: "Chọn ngành",
          serviceRequired: "Dịch Vụ Yêu Cầu",
          selectService: "Chọn dịch vụ",
          specialRequirements: "Yêu Cầu Đặc Biệt",
          requirementsPlaceholder: "Nhập các yêu cầu đặc biệt",
          submit: "Nhận Giải Pháp",
          industries: {
            food: "Thực Phẩm & Đồ Uống",
            garment: "May Mặc & Giày Dép",
            furniture: "Nội Thất & Đồ Gia Dụng", 
            construction: "Vật Liệu Xây Dựng",
            machinery: "Máy Móc & Thiết Bị",
            healthcare: "Y Tế & Mỹ Phẩm",
            dangerous: "Hàng Hóa Nguy Hiểm",
            automotive: "Ô Tô & Phụ Tùng",
            electronics: "Điện Tử"
          },
          services: {
            transport: "Vận Chuyển",
            warehouse: "Kho Bãi",
            customs: "Thông Quan",
            distribution: "Phân Phối"
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

      // Update elements with data-translate-placeholder attributes
      document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const translation = this.getNestedTranslation(translations[lang], key);
        if (translation) {
          element.placeholder = translation;
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