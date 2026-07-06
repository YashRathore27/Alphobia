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
  { brand: "canva", name: "Canva", rating: 4.8 },
  { brand: "chatgpt", name: "ChatGPT", rating: 4.7 },
  { brand: "semrush", name: "Semrush", rating: 4.6 },
  { brand: "ahrefs", name: "Ahrefs", rating: 4.6 },
  { brand: "mailchimp", name: "Mailchimp", rating: 4.5 },
  { brand: "hubspot", name: "HubSpot", rating: 4.5 },
  { brand: "grammarly", name: "Grammarly", rating: 4.6 },
  { brand: "buffer", name: "Buffer", rating: 4.5 },
  { brand: "notion", name: "Notion", rating: 4.6 }
];
function MarketingTools() {
  return <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
        <SectionHeading title="Top Marketing Tools" linkLabel="View All Tools" linkRoute="tools" />
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-5">
        {TOOLS.map((t, i) => <Reveal key={t.name} delay={i * 0.05}>
            <button onClick={() => navigate("tool", t.brand)} className="card card-hover flex min-h-[180px] w-full flex-col items-center justify-center gap-4 p-6 text-center">
              {t.brand === "canva" ? <CanvaLogo size={52} /> : t.brand === "chatgpt" ? <ChatGPTLogo size={52} /> : t.brand === "semrush" ? <SemrushLogo size={52} /> : t.brand === "ahrefs" ? <AhrefsLogo size={52} /> : t.brand === "mailchimp" ? <MailchimpLogo size={52} /> : t.brand === "hubspot" ? <HubSpotLogo size={52} /> : t.brand === "grammarly" ? <GrammarlyLogo size={52} /> : t.brand === "buffer" ? <BufferLogo size={52} /> : t.brand === "notion" ? <NotionLogo size={52} /> : <LogoBadge brand={BRANDS[t.brand]} size={52} />}
              <span className="text-sm font-semibold text-slate-800">{t.name}</span>
              <Rating value={t.rating} size={12} />
            </button>
          </Reveal>)}
      </div>
    </section>;
}
export {
  AdPlatforms,
  MarketingTools
};
