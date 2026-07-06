const TOOLS_DATA = {
  canva: {
    brandKey: "canva",
    name: "Canva Pro",
    rating: 4.8,
    userCount: "500K+ Users",
    description: "Design anything and bring your ideas to life with Canva's powerful visual suite \u2014 templates, AI tools, brand kits and team collaboration in one place.",
    image: "/images/canva-seeklogo.png",
    gallery: ["https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop"],
    tags: ["Design", "AI", "Templates", "Collaboration"],
    strengths: ["Intuitive drag-and-drop interface", "610K+ premium templates", "AI-powered Magic Design", "Real-time team collaboration"],
    considerations: ["Some features require Pro plan", "Limited offline functionality", "Basic video editor compared to dedicated tools"],
    overview: [
      "Canva Pro gives you premium content, powerful design tools, and AI features to create stunning designs faster. From social posts and presentations to videos and websites \u2014 everything lives in one intuitive editor that your whole team can use without a learning curve.",
      "With over 610,000 templates, 100M+ stock assets and Magic Studio AI, Canva Pro is the fastest way for marketers, creators and businesses to produce on-brand content at scale."
    ],
    meta: [
      { label: "Pricing", value: "$12.99 / month" },
      { label: "Free Trial", value: "30 Days" },
      { label: "Platforms", value: "Web, iOS, Android" },
      { label: "Category", value: "Design" },
      { label: "Best For", value: "Designers, Teams" },
      { label: "Support", value: "24/7" }
    ],
    features: [
      { iconName: "LayoutTemplate", name: "Templates", desc: "610K+ premium templates" },
      { iconName: "Wand2", name: "AI Magic Design", desc: "Generate designs with AI" },
      { iconName: "Sparkles", name: "Magic Resize", desc: "Resize to any format instantly" },
      { iconName: "Palette", name: "Brand Kit", desc: "Fonts, colors and logos" },
      { iconName: "Eraser", name: "Background Remover", desc: "One-click background removal" },
      { iconName: "Video", name: "Video Editing", desc: "Timeline video editor" },
      { iconName: "Presentation", name: "Presentations", desc: "Beautiful animated decks" },
      { iconName: "Layers", name: "Animations", desc: "Animate any element" }
    ],
    plans: [
      { name: "Free", price: "$0", desc: "For individuals getting started with design.", cta: "Try Free", popular: false },
      { name: "Pro", price: "$12.99", desc: "Everything you need to elevate your design.", cta: "Try Free", popular: true },
      { name: "Teams", price: "$29.99", desc: "Grow your together with your team.", cta: "Try Free", popular: false },
      { name: "Enterprise", price: "Custom", desc: "For organizations with advanced needs.", cta: "Contact Us", popular: false }
    ],
    alternatives: [
      { brandKey: "figma", name: "Figma", rating: 4.7 },
      { brandKey: "adobe-express", name: "Adobe Express", rating: 4.5 },
      { brandKey: "visme", name: "Visme", rating: 4.4 },
      { brandKey: "snappa", name: "Snappa", rating: 4.3 }
    ],
    faqs: [
      { q: "Is Canva Pro worth it in 2024?", a: "Yes \u2014 for $12.99/month you unlock premium templates, brand kits, magic resize, background remover and 1TB of cloud storage, making it one of the best value design tools available." },
      { q: "Does Canva Pro have a free trial?", a: "Canva Pro includes a 30-day free trial. You can cancel anytime during the trial and you won't be charged." },
      { q: "Can I use Canva Pro for commercial projects?", a: "Yes, all Pro content can be used in commercial projects under Canva's content license." }
    ],
    reviews: [
      { n: "Emily R.", role: "Content Creator", r: 5, t: "Canva Pro is the single best investment I've made for my brand. Magic Resize saves me hours every week." },
      { n: "James T.", role: "Marketing Manager", r: 4.5, t: "Our whole team designs on-brand assets now without waiting for designers. Brand Kit is a game changer." },
      { n: "Priya S.", role: "Founder", r: 4.5, t: "From pitch decks to Instagram posts \u2014 one tool does it all. Support is genuinely 24/7." }
    ]
  },
  semrush: {
    brandKey: "semrush",
    name: "Semrush",
    rating: 4.8,
    userCount: "10M+ Marketers",
    description: "Semrush is an award-winning SEO platform trusted by marketers worldwide. It offers a complete suite of tools for SEO, content marketing, competitor research, PPC and social media marketing.",
    image: "/images/semrush.png",
    gallery: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1543286386-7a39501fdfdb?w=800&h=500&fit=crop"],
    tags: ["SEO", "SEM", "Content", "Analytics"],
    strengths: ["Largest keyword database in industry", "Comprehensive competitor analysis", "All-in-one marketing platform", "Excellent API support"],
    considerations: ["Premium pricing for advanced features", "Steep learning curve for beginners", "Some reports limited on Pro plan"],
    overview: [
      "Semrush is the all-in-one SEO toolkit that helps you improve your online visibility and discover marketing insights. Trusted by over 10 million marketers worldwide.",
      "From keyword research and competitor analysis to content marketing and PPC, Semrush provides over 55 tools in a single subscription."
    ],
    meta: [
      { label: "Pricing", value: "$119.95 / month" },
      { label: "Free Trial", value: "7 Days" },
      { label: "Platforms", value: "Web, Chrome Extension" },
      { label: "Category", value: "SEO" },
      { label: "Best For", value: "Marketers, Agencies" },
      { label: "Support", value: "24/7" }
    ],
    features: [
      { iconName: "Search", name: "Keyword Research", desc: "25B+ keyword database" },
      { iconName: "LineChart", name: "Competitor Analysis", desc: "Deep competitive insights" },
      { iconName: "ShieldCheck", name: "Site Audit", desc: "Technical SEO audits" },
      { iconName: "Link2", name: "Backlink Analysis", desc: "Comprehensive backlink data" },
      { iconName: "TrendingUp", name: "Rank Tracking", desc: "Daily position tracking" },
      { iconName: "FileText", name: "Content Marketing", desc: "SEO content templates" },
      { iconName: "BarChart3", name: "PPC Research", desc: "Ad strategy toolkit" },
      { iconName: "Globe", name: "Social Media", desc: "Publish & track posts" }
    ],
    plans: [
      { name: "Pro", price: "$119.95", desc: "For freelancers and small teams.", cta: "Try Free", popular: false },
      { name: "Guru", price: "$229.95", desc: "For growing agencies and mid-size businesses.", cta: "Try Free", popular: true },
      { name: "Business", price: "$449.95", desc: "For large agencies and enterprises.", cta: "Try Free", popular: false }
    ],
    alternatives: [
      { brandKey: "ahrefs", name: "Ahrefs", rating: 4.7 },
      { brandKey: "moz", name: "Moz Pro", rating: 4.6 },
      { brandKey: "ubersuggest", name: "Ubersuggest", rating: 4.5 },
      { brandKey: "kwfinder", name: "KWFinder", rating: 4.6 }
    ],
    faqs: [
      { q: "Is Semrush good for beginners?", a: "Semrush has a learning curve but offers excellent onboarding resources, including Semrush Academy courses." },
      { q: "Does Semrush offer a free trial?", a: "Yes, the Pro plan includes a 7-day free trial." },
      { q: "Can I cancel anytime?", a: "Yes, subscriptions can be cancelled anytime with no fees." }
    ],
    reviews: [
      { n: "Sarah M.", role: "SEO Specialist", r: 5, t: "Semrush completely changed how we run SEO. The data is unmatched." },
      { n: "David K.", role: "Marketing Manager", r: 4.5, t: "Great toolkit \u2014 the site audit alone is worth the price." }
    ]
  },
  ahrefs: {
    brandKey: "ahrefs",
    name: "Ahrefs",
    rating: 4.7,
    userCount: "500K+ Users",
    description: "Ahrefs is a powerful SEO toolset renowned for its extensive backlink index and intuitive interface. Perfect for link building, keyword research, and competitor analysis.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&h=600&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1543286386-7a39501fdfdb?w=800&h=500&fit=crop"],
    tags: ["SEO", "Backlinks", "Research"],
    strengths: ["Largest backlink index", "Excellent competitor intel", "Accurate keyword difficulty", "Content explorer tool"],
    considerations: ["Premium pricing tier", "Limited results on lower plans", "Steeper learning curve"],
    overview: [
      "Ahrefs is a powerhouse SEO toolset built around the industry's largest backlink index. It's the tool of choice for link builders, content marketers, and SEO professionals who need reliable, fast data.",
      "With over 10 billion keywords across 200+ countries and the most up-to-date backlink database, Ahrefs delivers precisely what serious SEOs need."
    ],
    meta: [
      { label: "Pricing", value: "$99 / month" },
      { label: "Free Trial", value: "7 Days" },
      { label: "Platforms", value: "Web" },
      { label: "Category", value: "SEO" },
      { label: "Best For", value: "Link Builders, SEOs" },
      { label: "Support", value: "Email, Chat" }
    ],
    features: [
      { iconName: "Link2", name: "Backlink Checker", desc: "Industry's largest index" },
      { iconName: "Search", name: "Keyword Explorer", desc: "10B+ keyword database" },
      { iconName: "ShieldCheck", name: "Site Audit", desc: "Crawl any website" },
      { iconName: "TrendingUp", name: "Rank Tracker", desc: "Monitor daily positions" },
      { iconName: "FileText", name: "Content Explorer", desc: "Find top content" },
      { iconName: "Globe", name: "Web Explorer", desc: "See any page's top pages" }
    ],
    plans: [
      { name: "Lite", price: "$99", desc: "For freelancers and solo SEOs.", cta: "Try Free", popular: false },
      { name: "Standard", price: "$199", desc: "For in-house marketers.", cta: "Try Free", popular: true },
      { name: "Advanced", price: "$399", desc: "For marketing agencies.", cta: "Try Free", popular: false }
    ],
    alternatives: [
      { brandKey: "semrush", name: "Semrush", rating: 4.8 },
      { brandKey: "moz", name: "Moz Pro", rating: 4.6 },
      { brandKey: "ubersuggest", name: "Ubersuggest", rating: 4.5 },
      { brandKey: "kwfinder", name: "KWFinder", rating: 4.6 }
    ],
    faqs: [
      { q: "Is Ahrefs better than Semrush?", a: "Ahrefs has the best backlink index; Semrush offers more features overall. It depends on your primary need." },
      { q: "Does Ahrefs have a free trial?", a: "Yes, Ahrefs offers a 7-day trial for $7." },
      { q: "Can I track unlimited keywords?", a: "Keyword limits depend on your plan. Lite tracks 500 keywords." }
    ],
    reviews: [
      { n: "Mike L.", role: "SEO Consultant", r: 5, t: "Ahrefs backlink data is second to none. Essential for any link builder." },
      { n: "Julia K.", role: "Content Marketer", r: 4.5, t: "Content Explorer is fantastic for finding linkable assets." }
    ]
  },
  chatgpt: {
    brandKey: "chatgpt",
    name: "ChatGPT",
    rating: 4.7,
    userCount: "100M+ Users",
    description: "ChatGPT is the world's most popular AI writing assistant. Generate content, brainstorm ideas, write code, and get instant answers with the power of GPT-4.",
    image: "/images/chatgpt-icon.png",
    gallery: ["https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop"],
    tags: ["AI", "Chat", "Content"],
    strengths: ["Advanced language understanding", "Versatile use cases", "Continuous improvement", "API availability"],
    considerations: ["Subscription required for advanced features", "Occasional inaccuracies", "Limited context window"],
    overview: [
      "ChatGPT by OpenAI has revolutionized how marketers, creators, and businesses approach content creation. From blog posts and social media captions to email campaigns and ad copy \u2014 ChatGPT handles it all with human-like quality.",
      "The GPT-4 model delivers significantly improved accuracy, creativity, and context understanding compared to previous versions, making it an indispensable tool for marketing teams."
    ],
    meta: [
      { label: "Pricing", value: "$20 / month" },
      { label: "Free Trial", value: "Free tier available" },
      { label: "Platforms", value: "Web, iOS, Android" },
      { label: "Category", value: "AI Writing" },
      { label: "Best For", value: "Content Creators" },
      { label: "Support", value: "Help Center" }
    ],
    features: [
      { iconName: "FileText", name: "Content Generation", desc: "Blogs, emails, ads & more" },
      { iconName: "Wand2", name: "GPT-4 Model", desc: "Advanced language understanding" },
      { iconName: "Search", name: "Web Browsing", desc: "Browse the internet for answers" },
      { iconName: "BarChart3", name: "Data Analysis", desc: "Analyze charts & data" },
      { iconName: "Image", name: "Image Generation", desc: "DALL\xB7E integration" },
      { iconName: "Code", name: "Code Assistant", desc: "Write & debug code" },
      { iconName: "Globe", name: "Multi-language", desc: "Supports 95+ languages" },
      { iconName: "Layers", name: "Custom GPTs", desc: "Tailored AI assistants" }
    ],
    plans: [
      { name: "Free", price: "$0", desc: "Access to GPT-3.5 model.", cta: "Get Started", popular: false },
      { name: "Plus", price: "$20", desc: "GPT-4 access, faster responses.", cta: "Upgrade to Plus", popular: true },
      { name: "Team", price: "$25", desc: "Higher limits per user.", cta: "Try Teams", popular: false },
      { name: "Enterprise", price: "Custom", desc: "For large organizations.", cta: "Contact Sales", popular: false }
    ],
    alternatives: [
      { brandKey: "grammarly", name: "Grammarly", rating: 4.6 },
      { brandKey: "canva", name: "Canva AI", rating: 4.8 },
      { brandKey: "semrush", name: "Semrush AI", rating: 4.8 },
      { brandKey: "notion", name: "Notion AI", rating: 4.6 }
    ],
    faqs: [
      { q: "What is the difference between Free and Plus?", a: "Plus gives you GPT-4 access, faster response times, and priority access during peak hours for $20/month." },
      { q: "Can ChatGPT generate marketing content?", a: "Yes \u2014 it excels at blog posts, social media content, email campaigns, ad copy, and more." },
      { q: "Is my data private?", a: "OpenAI does not train on API data. Conversations can be deleted from your chat history." }
    ],
    reviews: [
      { n: "Tom H.", role: "Content Strategist", r: 5, t: "ChatGPT has cut our content production time by 60%. An essential tool for any marketing team." },
      { n: "Emma W.", role: "Freelance Writer", r: 4.5, t: "The quality of GPT-4 output is remarkable. It's like having a junior writer available 24/7." }
    ]
  },
  mailchimp: {
    brandKey: "mailchimp",
    name: "Mailchimp",
    rating: 4.5,
    userCount: "14M+ Users",
    description: "Mailchimp is an all-in-one marketing platform that helps you manage and talk to your contacts, build customer journeys, and analyze your results.",
    image: "/images/mailchimp-icon.png",
    gallery: ["https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop"],
    tags: ["Email", "Automation", "CRM"],
    strengths: ["Intuitive email builder", "Advanced automation workflows", "Built-in CRM tools", "Excellent A/B testing"],
    considerations: ["Expensive at higher tiers", "Limited template customization", "Deliverability issues for some senders"],
    overview: [
      "Mailchimp is the world's leading email marketing platform, trusted by millions of businesses to send targeted campaigns, automate customer journeys, and grow their audience.",
      "With powerful segmentation, A/B testing, and detailed analytics, Mailchimp makes it easy to create personalized email experiences that drive engagement and sales."
    ],
    meta: [
      { label: "Pricing", value: "$13 / month" },
      { label: "Free Trial", value: "Free plan available" },
      { label: "Platforms", value: "Web, iOS, Android" },
      { label: "Category", value: "Email Marketing" },
      { label: "Best For", value: "SMBs, Ecommerce" },
      { label: "Support", value: "24/7 Chat" }
    ],
    features: [
      { iconName: "Mail", name: "Email Campaigns", desc: "Drag-and-drop email builder" },
      { iconName: "TrendingUp", name: "Automation", desc: "Customer journey builder" },
      { iconName: "BarChart3", name: "Analytics", desc: "Detailed performance reports" },
      { iconName: "Users", name: "Segmentation", desc: "Smart audience targeting" },
      { iconName: "LayoutTemplate", name: "Templates", desc: "100+ email templates" },
      { iconName: "Globe", name: "A/B Testing", desc: "Subject line & content tests" },
      { iconName: "ShoppingCart", name: "Ecommerce", desc: "Product recommendations" },
      { iconName: "CalendarDays", name: "Scheduling", desc: "Send at optimal times" }
    ],
    plans: [
      { name: "Free", price: "$0", desc: "Up to 500 contacts, 1K sends/mo.", cta: "Sign Up Free", popular: false },
      { name: "Essentials", price: "$13", desc: "Up to 5K contacts, 3 seats.", cta: "Start Free", popular: true },
      { name: "Standard", price: "$20", desc: "Up to 5K contacts, automation.", cta: "Start Free", popular: false },
      { name: "Premium", price: "$350", desc: "Unlimited seats, advanced tools.", cta: "Start Free", popular: false }
    ],
    alternatives: [
      { brandKey: "hubspot", name: "HubSpot", rating: 4.5 },
      { brandKey: "semrush", name: "Semrush", rating: 4.8 },
      { brandKey: "canva", name: "Canva Pro", rating: 4.8 },
      { brandKey: "notion", name: "Notion", rating: 4.6 }
    ],
    faqs: [
      { q: "Is Mailchimp free?", a: "Yes \u2014 the Free plan supports up to 500 contacts and 1,000 sends per month." },
      { q: "Can I send automated emails?", a: "Yes, Mailchimp offers powerful automation workflows for welcome series, abandoned carts, and more." },
      { q: "Does Mailchimp integrate with Shopify?", a: "Yes, Mailchimp has a deep integration with Shopify and other major ecommerce platforms." }
    ],
    reviews: [
      { n: "Lisa M.", role: "Ecommerce Owner", r: 4.5, t: "Mailchimp's automation workflows saved us hours every week. The segmentation is fantastic." },
      { n: "Carlos R.", role: "Marketing Manager", r: 4, t: "Great for small to medium businesses. The free plan is very generous." }
    ]
  },
  hubspot: {
    brandKey: "hubspot",
    name: "HubSpot",
    rating: 4.5,
    userCount: "150K+ Customers",
    description: "HubSpot is the leading CRM platform that brings your marketing, sales, and service together in one powerful, easy-to-use system.",
    image: "/images/hubspot-icon.png",
    gallery: ["https://images.unsplash.com/photo-1557200139-903e4c04e60e?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"],
    tags: ["CRM", "Marketing", "Sales"],
    strengths: ["Free forever CRM with unlimited users", "All-in-one marketing, sales & service platform", "1,000+ app integrations", "Excellent onboarding & educational resources"],
    considerations: ["Premium tiers are expensive", "Can be complex to set up initially", "Some features locked behind higher plans"],
    overview: [
      "HubSpot is an all-in-one CRM platform that unifies marketing, sales, content management, and customer service. Its free CRM is one of the most popular business tools globally.",
      "With integrated email marketing, automation, analytics, and a powerful content management system, HubSpot helps businesses attract visitors, engage leads, and close customers."
    ],
    meta: [
      { label: "Pricing", value: "$45 / month" },
      { label: "Free Trial", value: "Free CRM forever" },
      { label: "Platforms", value: "Web, iOS, Android" },
      { label: "Category", value: "CRM" },
      { label: "Best For", value: "Sales & Marketing" },
      { label: "Support", value: "24/7" }
    ],
    features: [
      { iconName: "Users", name: "CRM", desc: "Free contact management" },
      { iconName: "Mail", name: "Marketing Hub", desc: "Email & automation tools" },
      { iconName: "ShoppingCart", name: "Sales Hub", desc: "Pipeline & deal tracking" },
      { iconName: "FileText", name: "CMS Hub", desc: "Content management system" },
      { iconName: "BarChart3", name: "Analytics", desc: "Custom dashboards & reports" },
      { iconName: "Globe", name: "Live Chat", desc: "Website chat & chatbots" },
      { iconName: "CalendarDays", name: "Meetings", desc: "Scheduling automation" },
      { iconName: "ShieldCheck", name: "Security", desc: "Enterprise-grade security" }
    ],
    plans: [
      { name: "Free", price: "$0", desc: "Free CRM with core tools.", cta: "Get Free CRM", popular: false },
      { name: "Starter", price: "$45", desc: "For growing businesses.", cta: "Start Free", popular: true },
      { name: "Professional", price: "$800", desc: "For scaling businesses.", cta: "Start Free", popular: false },
      { name: "Enterprise", price: "$3,600", desc: "For large organizations.", cta: "Contact Sales", popular: false }
    ],
    alternatives: [
      { brandKey: "mailchimp", name: "Mailchimp", rating: 4.5 },
      { brandKey: "semrush", name: "Semrush", rating: 4.8 },
      { brandKey: "canva", name: "Canva Pro", rating: 4.8 },
      { brandKey: "notion", name: "Notion", rating: 4.6 }
    ],
    faqs: [
      { q: "Is HubSpot CRM really free?", a: "Yes \u2014 the free CRM includes contact management, deal tracking, email integration, and live chat with no time limit." },
      { q: "Can I use HubSpot for email marketing?", a: "Yes, Marketing Hub provides powerful email campaign tools, automation, and analytics." },
      { q: "Does HubSpot integrate with other tools?", a: "HubSpot has an extensive app marketplace with 1,000+ integrations." }
    ],
    reviews: [
      { n: "Daniel P.", role: "Sales Director", r: 5, t: "HubSpot transformed our sales process. The free CRM is incredibly generous for what you get." },
      { n: "Sophie A.", role: "Marketing Lead", r: 4.5, t: "The all-in-one platform eliminates the need for multiple tools. Great ROI." }
    ]
  },
  grammarly: {
    brandKey: "grammarly",
    name: "Grammarly",
    rating: 4.6,
    userCount: "30M+ Users",
    description: "Grammarly is an AI-powered writing assistant that helps you write clearly, confidently, and mistake-free across all your apps and browser.",
    image: "/images/grammarly-icon.png",
    gallery: ["https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop"],
    tags: ["Writing", "AI", "Grammar"],
    strengths: ["Real-time grammar correction", "AI-powered writing suggestions", "Cross-platform support", "Tone detection"],
    considerations: ["Premium features are pricey", "Not ideal for creative writing", "Some false positives"],
    overview: [
      "Grammarly is the most popular writing assistant tool, helping over 30 million people and 50,000 teams write more effectively every day. It checks grammar, tone, clarity, and engagement in real-time.",
      "With AI-powered suggestions that adapt to your writing style and goals, Grammarly Premium is an essential tool for marketers who produce a high volume of written content."
    ],
    meta: [
      { label: "Pricing", value: "$12 / month" },
      { label: "Free Trial", value: "Free tier available" },
      { label: "Platforms", value: "Web, Desktop, iOS, Android" },
      { label: "Category", value: "Writing Assistant" },
      { label: "Best For", value: "Writers, Teams" },
      { label: "Support", value: "Email, Chat" }
    ],
    features: [
      { iconName: "FileText", name: "Grammar Check", desc: "Real-time corrections" },
      { iconName: "Sparkles", name: "Tone Detection", desc: "Understand how you sound" },
      { iconName: "Wand2", name: "AI Writing", desc: "Rewrite & generate text" },
      { iconName: "ShieldCheck", name: "Plagiarism Check", desc: "Detect copied content" },
      { iconName: "Globe", name: "Multi-platform", desc: "Works everywhere you write" },
      { iconName: "BarChart3", name: "Goals & Analytics", desc: "Track writing quality" },
      { iconName: "Users", name: "Team Features", desc: "Style guide & analytics" },
      { iconName: "CalendarDays", name: "Snippets", desc: "Save reusable templates" }
    ],
    plans: [
      { name: "Free", price: "$0", desc: "Basic grammar & spelling.", cta: "Get Started", popular: false },
      { name: "Premium", price: "$12", desc: "Full writing suggestions & tone.", cta: "Try Premium", popular: true },
      { name: "Business", price: "$15", desc: "Team admin & style guide.", cta: "Try Business", popular: false }
    ],
    alternatives: [
      { brandKey: "chatgpt", name: "ChatGPT", rating: 4.7 },
      { brandKey: "canva", name: "Canva Pro", rating: 4.8 },
      { brandKey: "semrush", name: "Semrush", rating: 4.8 },
      { brandKey: "notion", name: "Notion", rating: 4.6 }
    ],
    faqs: [
      { q: "Is Grammarly free?", a: "Yes \u2014 the Free version checks spelling, grammar, and punctuation. Premium adds tone, clarity, and full-sentence rewrites." },
      { q: "Does Grammarly work with Google Docs?", a: "Yes, Grammarly has a Chrome extension that works with Google Docs, Gmail, and most web apps." },
      { q: "Can teams use Grammarly?", a: "Yes, Grammarly Business includes a style guide, analytics dashboard, and admin controls." }
    ],
    reviews: [
      { n: "Kate B.", role: "Content Writer", r: 5, t: "Grammarly Premium is worth every penny. My writing quality improved dramatically." },
      { n: "Mark T.", role: "Marketing Director", r: 4.5, t: "Team analytics help us maintain consistent brand voice across all content." }
    ]
  },
  buffer: {
    brandKey: "buffer",
    name: "Buffer",
    rating: 4.5,
    userCount: "140K+ Users",
    description: "Buffer is the simplest way to schedule, publish, and analyze your social media posts across all major platforms from one dashboard.",
    image: "/images/buffer.png",
    gallery: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=500&fit=crop"],
    tags: ["Social", "Scheduling", "Analytics"],
    strengths: ["Easy scheduling across platforms", "Clean analytics dashboard", "Team collaboration", "Affordable pricing"],
    considerations: ["Limited features on free plan", "No TikTok integration", "Basic reporting tools"],
    overview: [
      "Buffer is a social media management platform designed for simplicity and collaboration. Schedule posts, engage with your audience, and measure performance across Instagram, Twitter, Facebook, LinkedIn, and TikTok.",
      "Buffer's clean interface and affordable pricing make it a favorite among small businesses, startups, and solo creators who need straightforward social media scheduling without the complexity of enterprise tools."
    ],
    meta: [
      { label: "Pricing", value: "$6 / month" },
      { label: "Free Trial", value: "Free plan available" },
      { label: "Platforms", value: "Web, iOS, Android" },
      { label: "Category", value: "Social Media" },
      { label: "Best For", value: "SMBs, Creators" },
      { label: "Support", value: "Email, Chat" }
    ],
    features: [
      { iconName: "CalendarDays", name: "Scheduling", desc: "Plan & queue posts" },
      { iconName: "BarChart3", name: "Analytics", desc: "Track engagement metrics" },
      { iconName: "Users", name: "Collaboration", desc: "Team approval workflows" },
      { iconName: "Globe", name: "Multi-platform", desc: "Instagram, X, FB, LI, TikTok" },
      { iconName: "Sparkles", name: "AI Assistant", desc: "AI-generated post ideas" },
      { iconName: "Image", name: "Image Editing", desc: "Basic photo editor" }
    ],
    plans: [
      { name: "Free", price: "$0", desc: "3 channels, 10 scheduled posts.", cta: "Get Started", popular: false },
      { name: "Essentials", price: "$6", desc: "Up to 8 channels, unlimited posts.", cta: "Try Free", popular: true },
      { name: "Team", price: "$12", desc: "Up to 150 channels, collaboration.", cta: "Try Free", popular: false }
    ],
    alternatives: [
      { brandKey: "canva", name: "Canva Pro", rating: 4.8 },
      { brandKey: "semrush", name: "Semrush", rating: 4.8 },
      { brandKey: "notion", name: "Notion", rating: 4.6 },
      { brandKey: "mailchimp", name: "Mailchimp", rating: 4.5 }
    ],
    faqs: [
      { q: "Is Buffer free?", a: "Yes \u2014 the Free plan includes 3 social channels and 10 scheduled posts per channel." },
      { q: "Which platforms does Buffer support?", a: "Buffer supports Instagram, X/Twitter, Facebook, LinkedIn, and TikTok." },
      { q: "Can I collaborate with my team?", a: "Yes, Buffer offers collaboration features including approval workflows on paid plans." }
    ],
    reviews: [
      { n: "Amy L.", role: "Social Media Manager", r: 4.5, t: "Buffer is the simplest scheduler I've used. The queue system is brilliant." },
      { n: "Jake R.", role: "Startup Founder", r: 4, t: "Perfect for small teams. Affordable and does everything we need." }
    ]
  },
  notion: {
    brandKey: "notion",
    name: "Notion",
    rating: 4.6,
    userCount: "100M+ Users",
    description: "Notion is the connected workspace where better, faster work happens. Docs, projects, wikis \u2014 bring everything together in one place.",
    image: "/images/notion-icon.png",
    gallery: ["https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=500&fit=crop"],
    tags: ["Productivity", "Docs", "Collaboration"],
    strengths: ["Extremely flexible workspace", "Powerful database features", "Great team collaboration", "Rich integration ecosystem"],
    considerations: ["No offline mode on web", "Can be overwhelming for simple needs", "Limited spreadsheet functionality"],
    overview: [
      "Notion combines notes, docs, wikis, databases, and project management into one beautifully designed workspace. It's become the go-to tool for teams that want to replace multiple tools with a single, flexible platform.",
      "For marketers, Notion is invaluable for content calendars, campaign planning, editorial workflows, and knowledge management. Its database functionality makes it powerful enough for complex projects while remaining simple enough for personal use."
    ],
    meta: [
      { label: "Pricing", value: "$10 / month" },
      { label: "Free Trial", value: "Free plan available" },
      { label: "Platforms", value: "Web, Desktop, iOS, Android" },
      { label: "Category", value: "Productivity" },
      { label: "Best For", value: "Teams, Creators" },
      { label: "Support", value: "Help Center" }
    ],
    features: [
      { iconName: "FileText", name: "Docs & Notes", desc: "Rich-text editor with blocks" },
      { iconName: "LayoutTemplate", name: "Databases", desc: "Tables, boards & calendars" },
      { iconName: "Users", name: "Collaboration", desc: "Real-time team editing" },
      { iconName: "Globe", name: "Wikis", desc: "Company knowledge base" },
      { iconName: "CalendarDays", name: "Project Management", desc: "Tasks & sprints" },
      { iconName: "Wand2", name: "Notion AI", desc: "AI-powered writing & Q&A" },
      { iconName: "BarChart3", name: "Dashboards", desc: "Custom team dashboards" },
      { iconName: "Link2", name: "Integrations", desc: "100+ app connections" }
    ],
    plans: [
      { name: "Free", price: "$0", desc: "For personal use. Unlimited pages.", cta: "Get Started", popular: false },
      { name: "Plus", price: "$10", desc: "For small teams. Unlimited blocks.", cta: "Try Free", popular: true },
      { name: "Business", price: "$18", desc: "For companies. Advanced features.", cta: "Try Free", popular: false },
      { name: "Enterprise", price: "Custom", desc: "For large organizations.", cta: "Contact Sales", popular: false }
    ],
    alternatives: [
      { brandKey: "canva", name: "Canva Pro", rating: 4.8 },
      { brandKey: "semrush", name: "Semrush", rating: 4.8 },
      { brandKey: "chatgpt", name: "ChatGPT", rating: 4.7 },
      { brandKey: "grammarly", name: "Grammarly", rating: 4.6 }
    ],
    faqs: [
      { q: "Is Notion free?", a: "Yes, the Free plan includes unlimited pages and blocks for personal use." },
      { q: "Can Notion replace project management tools?", a: "Yes \u2014 Notion's databases can function as project management boards with tasks, sprints, and timelines." },
      { q: "Does Notion have AI features?", a: "Yes, Notion AI provides writing assistance, summarization, and Q&A from your workspace content." }
    ],
    reviews: [
      { n: "Chris D.", role: "Content Manager", r: 5, t: "Notion replaced 5 different tools for our team. The flexibility is unmatched." },
      { n: "Rachel N.", role: "Project Manager", r: 4.5, t: "Our content calendar runs entirely on Notion. The database views are genius." }
    ]
  }
};
export {
  TOOLS_DATA
};
