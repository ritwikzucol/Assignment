const BANNER_IMAGES =
    [
        '/image 6.png',
        '/Client2.png',
        '/Client3.png',
        '/image 4.png',
        '/image 5.png'
    ];

const HEADING_NAME = "Lets Fight Piracy Together";

const UNDERHEADING_1 = "We enable our customers to sleep in peace, knowing that the threat of infringing";

const UNDERHEADING_2 = "content is under control. What are you waiting for?";

const UNDERHEADING_CLASS = "fs-5 darkColor";

const FEATURES_HEADING = 'Why Bytescare?';

const FEATURES_DESC = 'We are an AI/ML-enabled company with the aim of protecting all types of content and brands from online infringements and thefts. Our solutions provide 24*7 protection to your organization at every stage of content development from pre-piracy to post-piracy damage control';

const FEATURES =
    [
        {
            "id": 1,
            "path": "/Fast & Economical.png",
            "heading": "Fast & Economical",
            "description": "Our automated crawlers and deep learning solutions are quicker and cheaper.",
        },
        {
            "id": 2,
            "path": "/Robust & Accurate.png",
            "heading": "Robust & Accurate",
            "description": "Verify infringements to ensure they are not from your official channel partners.",
        },
        {
            "id": 3,
            "path": "/Scalable.png",
            "heading": "Scalable",
            "description": "Regardless of the type, length or number of your content, our technology is designed to handle it.",
        },
        {
            "id": 4,
            "path": "/Transparent.png",
            "heading": "Transparent",
            "description": "Our automated crawlers and deep learning solutions are quicker and cheaper.",
        },
        {
            "id": 5,
            "path": "/Enforcement & Investigations.png",
            "heading": "Enforcement & Investigations",
            "description": "Our automated crawlers and deep learning solutions are quicker and cheaper.",
        },
    ];

const INDUSTRIES = ['Press & Publishing', 'E-Learning', 'Media & Entertainment', 'Software & Apps', 'Consumer Brands'];

const BENEFITS_HEADING = 'Benefits to Clients';

const BENEFITS =
    [
        {
            "id": 1,
            "path": "/image 7.png",
            "heading": "Improve your ROI",
            "description": "On average, content creators (Publishers, OTT Platform etc.) lose around 10-30% of their revenues to piracy. With our anti-piracy solutions, prevent piracy and ensure your money goes directly into your pocket.",
        },
        {
            "id": 2,
            "path": "/12391904081595602086 1.png",
            "heading": "Improve your website ranking",
            "description": "Bytescare protects client content, improving Google and Alexa rankings for your legal websites as they are no longer competing with pirated sites, which provide the same content for free.",
        },
        {
            "id": 3,
            "path": "/14247902841582962149 1.png",
            "heading": "Reach out to Potential customers",
            "description": "On average, content creators (Publishers, OTT Platform etc.) lose around 10-30% of their revenues to piracy. With our anti-piracy solutions, prevent piracy and ensure your money goes directly into your pocket.",
        },
        {
            "id": 4,
            "path": "/189762304716276578043768 1.png",
            "heading": "Profitability",
            "description": "Bytescare protects client content, improving Google and Alexa rankings for your legal websites as they are no longer competing with pirated sites, which provide the same content for free.",
        },
    ];

const BENEFITS_SLIDER_SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const PRODUCTS_SERVICES_HEADING = 'Products & Services';

const PRODUCTS_SERVICES =
    [
        {
            "id": 1,
            "leftImage": true,
            "path": "/PSImage1.png",
            "heading": "Pre-Piracy Solutions",
            "desc": "This is the prevention phase. It is the first step after you have created your content. In this phase, our goal is to protect your content from getting leaked online. The following technologies are included: watermarking and digital rights management, evaluating existing technologies for loopholes, implementing extra measures to stop leakages within the team, etc.",
            "linkName": "Read more",
        },
        {
            "id": 2,
            "leftImage": false,
            "path": "/PSImage2.png",
            "heading": "Post-Piracy Solutions",
            "desc": "This is the prevention phase. It is the first step after you have created your content. In this phase, our goal is to protect your content from getting leaked online. The following technologies are included: watermarking and digital rights management, evaluating existing technologies for loopholes, implementing extra measures to stop leakages within the team, etc.",
            "linkName": "Read more",
        },
        {
            "id": 1,
            "leftImage": true,
            "path": "/PSImage3.png",
            "heading": "Brand & Reputation Management",
            "desc": "This is the prevention phase. It is the first step after you have created your content. In this phase, our goal is to protect your content from getting leaked online. The following technologies are included: watermarking and digital rights management, evaluating existing technologies for loopholes, implementing extra measures to stop leakages within the team, etc.",
            "linkName": "Read more",
        },
    ];

const PLATFORMS_HEADING = 'Platforms We Serve';

const PLATFORMS =
    [
        {
            "id": 1,
            "path": '/Search Engines-icon.png',
            "name": 'Marketplaces',
        },
        {
            "id": 2,
            "path": '/Social Media.png',
            "name": 'Social Media',
        },
        {
            "id": 3,
            "path": '/Video.png',
            "name": 'Websites',
        },
        {
            "id": 4,
            "path": '/Cyber Locker.png',
            "name": 'Domains',
        },
        {
            "id": 5,
            "path": '/Marketplace.png',
            "name": 'Search Engines',
        },
        {
            "id": 6,
            "path": '/Mobile-Apps.png',
            "name": 'Mobile Apps',
        },
        {
            "id": 7,
            "path": '/Websites-icon.png',
            "name": 'Video Platforms',
        },
        {
            "id": 8,
            "path": '/Websites-icon2.png',
            "name": 'Cyberlockers',
        },
    ];

const TESTIMONIALS_HEADING = 'Testimonials';

const TESTIMONIALS =
    [
        {
            "id": 1,
            "name": "Mike Taylor",
            "path": "/TestiomonialImage1.png",
            "position": "Co-founder, Claas",
            "desc": "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
        },
        {
            "id": 2,
            "name": "Mike Taylor",
            "path": "/TestiomonialImage2.png",
            "position": "Co-founder, Claas",
            "desc": "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
        },
        {
            "id": 3,
            "name": "Mike Taylor",
            "path": "/TestiomonialImage3.png",
            "position": "Co-founder, Claas",
            "desc": "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
        },
        {
            "id": 4,
            "name": "Mike Taylor",
            "path": "/TestiomonialImage1.png",
            "position": "Co-founder, Claas",
            "desc": "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
        },
    ];

const TESTIMONIALS_SLIDER_SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const CONTACTUS_HEADING = 'Contact Us';

const ADDRESS = {
    "email": "contact@bytescare.com",
    "emailImg": "/Email.png",
    "contact": "+91 8756-621035",
    "whatsapp": "+91 8756-621035",
    "contactImg": "/Call.png",
    "whatsappImg": "/whatsapp.png",
    "address1": {
        "id": 1,
        "name": "Bytescare Inc.",
        "address": "2055 Limestone Rd, STE 200-C, Wilmington, New Castle, DE 19808",
    },
    "address2":
    {
        "id": 2,
        "name": "NAXAP TECHNOLOGY PVT. LTD",
        "address": "55, 2nd Floor, Lane-2, Westland Marg, Saidullajab, Near Saket Metro Station, New Delhi, Delhi, 110030",
    },
    "addressImg": "/Address.png",
};

const USEFUL_LINKS_HEADING = 'Useful Links';

const USEFUL_LINKS = [
    "Home",
    "About Us",
    "Product & Services",
    "Blog",
    "FAQ’s",
    "Contact",
];

const KEY_SERVICES_HEADING = 'Key Services';

const KEY_SERVICES = [
    "Web Monitoring",
    "E-Commerce Monitoring",
    "Content Security Audit",
    "Text Maker",
    "Image Identifier",
];

const COPYRIGHT = '© Copyright 2022 Bytescare Inc. All rights reserved';

const CONSTANTS = {
    BANNER_IMAGES,
    HEADING_NAME,
    UNDERHEADING_1,
    UNDERHEADING_2,
    UNDERHEADING_CLASS,
    FEATURES_HEADING,
    FEATURES_DESC,
    FEATURES,
    INDUSTRIES,
    BENEFITS_HEADING,
    BENEFITS,
    BENEFITS_SLIDER_SETTINGS,
    PRODUCTS_SERVICES_HEADING,
    PRODUCTS_SERVICES,
    PLATFORMS_HEADING,
    PLATFORMS,
    TESTIMONIALS_HEADING,
    TESTIMONIALS,
    TESTIMONIALS_SLIDER_SETTINGS,
    CONTACTUS_HEADING,
    ADDRESS,
    USEFUL_LINKS_HEADING,
    USEFUL_LINKS,
    KEY_SERVICES_HEADING,
    KEY_SERVICES,
    COPYRIGHT,
}

export default CONSTANTS;