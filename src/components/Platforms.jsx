import { navigate } from "../router";
import {
  BRANDS,
  GoogleAdsLogo,
  LogoBadge,
  Rating,
  Reveal,
  SectionHeading,
  MetaLogo,
  TikTokLogo,
  LinkedInLogo,
  MicrosoftLogo,
  PinterestLogo,
  SnapchatLogo,
  YouTubeLogo,
  CanvaLogo,
  ChatGPTLogo,
  SemrushLogo,
  AhrefsLogo,
  MailchimpLogo,
  HubSpotLogo,
  GrammarlyLogo,
  BufferLogo,
  NotionLogo
} from "./ui";
const PLATFORMS = [
  { brand: "googleads", name: "Google Ads" },
  { brand: "meta", name: "Meta Ads" },
  { brand: "tiktok", name: "TikTok Ads" },
  { brand: "linkedin", name: "LinkedIn Ads" },
  { brand: "microsoft", name: "Microsoft Ads" },
  { brand: "pinterest", name: "Pinterest Ads" },
  { brand: "snapchat", name: "Snapchat Ads" },
  { brand: "youtube", name: "YouTube Ads" }
];
function AdPlatforms() {
  const marqueeItems = [...PLATFORMS, ...PLATFORMS];
  return <section className="bg-slate-50/70">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
        <SectionHeading title="Popular Advertising Platforms" linkLabel="View All" linkRoute="tools" />
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/90 p-4 shadow-sm">
          <div className="flex w-max animate-marquee items-center gap-6 py-3">
            {marqueeItems.map((p, i) => <Reveal key={`${p.brand}-${i}`} delay={0}>
                <button onClick={() => navigate("tool", p.brand)} className="card card-hover flex min-w-[180px] flex-col items-center gap-3 p-6">
                  {p.brand === "googleads" ? <GoogleAdsLogo size={52} /> : p.brand === "meta" ? <MetaLogo size={52} /> : p.brand === "tiktok" ? <TikTokLogo size={52} /> : p.brand === "linkedin" ? <LinkedInLogo size={52} /> : p.brand === "microsoft" ? <MicrosoftLogo size={52} /> : p.brand === "pinterest" ? <PinterestLogo size={52} /> : p.brand === "snapchat" ? <SnapchatLogo size={52} /> : p.brand === "youtube" ? <YouTubeLogo size={52} /> : <LogoBadge brand={BRANDS[p.brand]} size={52} />}
                  <span className="text-center text-sm font-semibold text-slate-700">
                    {p.name}
                  </span>
                </button>
              </Reveal>)}
          </div>
        </div>
      </div>
    </section>;
}
const TOOLS = [
  {
    brand: "canva",
    name: "Canva",
    rating: 4.8,
    desc: "Create stunning social graphics, presentations, and visual content with templates.",
    highlight: "Visual Editor",
    colSpan: "col-span-2 md:col-span-2",
    theme: "from-blue-500/5 via-cyan-500/5 to-transparent"
  },
  {
    brand: "chatgpt",
    name: "ChatGPT",
    rating: 4.7,
    desc: "AI assistant for fast writing, coding, brainstorming, and reasoning.",
    highlight: "Generative AI",
    colSpan: "col-span-2 md:col-span-2",
    theme: "from-emerald-500/5 to-transparent"
  },
  {
    brand: "semrush",
    name: "Semrush",
    rating: 4.6,
    desc: "Comprehensive suite for keyword tracking, website audit, and SEO research.",
    highlight: "SEO Suite",
    colSpan: "col-span-1 md:col-span-1"
  },
  {
    brand: "ahrefs",
    name: "Ahrefs",
    rating: 4.6,
    desc: "Analyze competitor backlinks, site health, and organic search traffic.",
    highlight: "Backlink Tool",
    colSpan: "col-span-1 md:col-span-1"
  },
  {
    brand: "mailchimp",
    name: "Mailchimp",
    rating: 4.5,
    desc: "Design professional newsletters, build lists, and run automated email flows.",
    highlight: "Email Flow",
    colSpan: "col-span-1 md:col-span-1"
  },
  {
    brand: "grammarly",
    name: "Grammarly",
    rating: 4.6,
    desc: "Polishes grammar, checks tone, and suggests spelling fixes instantly.",
    highlight: "AI Writing",
    colSpan: "col-span-1 md:col-span-1"
  },
  {
    brand: "hubspot",
    name: "HubSpot",
    rating: 4.5,
    desc: "Unified customer CRM, contact pipeline, and marketing automation hub.",
    highlight: "Growth Hub",
    colSpan: "col-span-2 md:col-span-2",
    theme: "from-orange-500/5 to-transparent"
  },
  {
    brand: "buffer",
    name: "Buffer",
    rating: 4.5,
    desc: "Schedule social media updates, queue posts, and track feed metrics.",
    highlight: "Social Scheduler",
    colSpan: "col-span-1 md:col-span-1"
  },
  {
    brand: "notion",
    name: "Notion",
    rating: 4.6,
    desc: "Centralize documentation, roadmaps, notes, and team wikis dynamically.",
    highlight: "Team Wiki",
    colSpan: "col-span-1 md:col-span-1"
  }
];
function MarketingTools() {
  return <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
        <SectionHeading title="Top Marketing Tools" linkLabel="View All Tools" linkRoute="tools" />
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {TOOLS.map((t, i) => {
          const isLarge = t.colSpan && t.colSpan.includes("col-span-2");
          return <Reveal key={t.name} delay={i * 0.05} className={t.colSpan || ""}>
              <button
                onClick={() => navigate("tool", t.brand)}
                className={`card card-hover flex h-full w-full flex-col justify-between p-5 text-left relative overflow-hidden bg-gradient-to-br ${t.theme || "from-white to-white"}`}
                style={{ minHeight: isLarge ? 170 : 130 }}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    {t.brand === "canva" ? <CanvaLogo size={isLarge ? 52 : 42} /> : t.brand === "chatgpt" ? <ChatGPTLogo size={isLarge ? 52 : 42} /> : t.brand === "semrush" ? <SemrushLogo size={isLarge ? 52 : 42} /> : t.brand === "ahrefs" ? <AhrefsLogo size={isLarge ? 52 : 42} /> : t.brand === "mailchimp" ? <MailchimpLogo size={isLarge ? 52 : 42} /> : t.brand === "hubspot" ? <HubSpotLogo size={isLarge ? 52 : 42} /> : t.brand === "grammarly" ? <GrammarlyLogo size={isLarge ? 52 : 42} /> : t.brand === "buffer" ? <BufferLogo size={isLarge ? 52 : 42} /> : t.brand === "notion" ? <NotionLogo size={isLarge ? 52 : 42} /> : <LogoBadge brand={BRANDS[t.brand]} size={isLarge ? 52 : 42} />}
                    {t.highlight && <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-extrabold text-blue-600 ring-1 ring-blue-100 animate-pulse">
                      {t.highlight}
                    </span>}
                  </div>
                  <h3 className={`font-extrabold text-slate-900 ${isLarge ? "text-[18px] mt-3 leading-tight" : "text-[14px] mt-2.5"}`}>{t.name}</h3>
                  <div className="mt-1 flex items-center gap-1.5">
                    <Rating value={t.rating} size={10} />
                  </div>
                  {t.desc && <p className="text-slate-500 leading-relaxed text-[12.5px] mt-2 line-clamp-2">
                    {t.desc}
                  </p>}
                </div>
                <div className="mt-3 flex items-center justify-end text-[11px] font-bold text-blue-600">
                  View Tool →
                </div>
              </button>
            </Reveal>;
        })}
      </div>
    </section>;
}
export {
  AdPlatforms,
  MarketingTools
};
