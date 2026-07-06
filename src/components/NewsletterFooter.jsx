import { Zap } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./ui";
function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return <section className="mx-auto max-w-[1440px] px-4 pb-14 pt-4 sm:px-8 lg:pb-16">
      <Reveal>
        <div className="gradient-bg relative overflow-hidden rounded-[28px] px-6 py-10 shadow-2xl shadow-indigo-500/30 sm:px-12">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-violet-400/30 blur-3xl" />
          <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:gap-8">
            <img
    src="/images/newsletter-woman-removebg-preview.png"
    alt="Newsletter"
    loading="lazy"
    className="h-32 w-32 shrink-0 object-contain sm:h-36 sm:w-36"
  />
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-[26px] font-extrabold tracking-tight text-white sm:text-[32px]">
                Never Miss New Marketing Deals!
              </h2>
              <p className="mt-2 max-w-md text-[15px] leading-relaxed text-indigo-100">
                Subscribe to get the best marketing deals, offers and news straight to your inbox.
              </p>
            </div>
            <form
    className="w-full max-w-md lg:w-[380px]"
    onSubmit={(e) => {
      e.preventDefault();
      if (email.trim()) setSent(true);
    }}
  >
              {sent ? <p className="rounded-2xl bg-white/15 px-6 py-4 text-center text-sm font-bold text-white backdrop-blur">
                  🎉 You're subscribed! Watch your inbox for deals.
                </p> : <div className="flex flex-col gap-3 sm:flex-row">
                  <input
    type="email"
    required
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email address"
    className="h-[52px] flex-1 rounded-xl border border-white/25 bg-white/15 px-5 text-sm text-white outline-none backdrop-blur placeholder:text-indigo-200 focus:border-white/60 focus:ring-4 focus:ring-white/20"
  />
                  <button
    type="submit"
    className="btn-ripple h-[52px] shrink-0 rounded-xl bg-white px-6 text-sm font-extrabold text-indigo-600 shadow-lg transition-transform hover:scale-[1.03]"
  >
                    Subscribe Now
                  </button>
                </div>}
              <p className="mt-2 text-center text-[12px] text-indigo-200 sm:text-left">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </Reveal>
    </section>;
}
const SOCIAL_LINKS = [
  {
    label: "Instagram",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25Zm0 2A2.75 2.75 0 1 0 14.75 12 2.75 2.75 0 0 0 12 9.25Zm5.5-3.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.5 5.75Z",
    viewBox: "0 0 24 24"
  },
  {
    label: "X",
    path: "M18.9 2H22l-6.7 7.7L23.5 22h-5.8l-4.5-5.9L7.5 22H4.4l7.2-8.2L.5 2h5.9l4.1 5.4L18.9 2Z",
    viewBox: "0 0 24 24"
  },
  {
    label: "LinkedIn",
    path: "M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38a1.56 1.56 0 0 1 0 3.12ZM5.5 9.75h2.88V19H5.5V9.75Zm4.8 0h2.76v1.25h.04c.38-.72 1.31-1.48 2.7-1.48 2.88 0 3.41 1.89 3.41 4.35V19H16.7v-8.06c0-1.92-.03-4.39-2.67-4.39-2.68 0-3.09 2.09-3.09 4.25V19H10.3V9.75Z",
    viewBox: "0 0 24 24"
  }
];
function Footer() {
  return <footer className="border-t border-slate-200/70 bg-transparent">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-4 py-[60px] text-center sm:px-8">
        <div className="flex items-center gap-8 text-slate-700 sm:gap-9">
          {SOCIAL_LINKS.map((social) => <a key={social.label} href="#" aria-label={social.label} className="transition-all duration-300 hover:opacity-70">
              <svg viewBox={social.viewBox} className="h-5 w-5" fill="currentColor">
                <path d={social.path} />
              </svg>
            </a>)}
        </div>

        <p className="mt-9 max-w-[620px] text-[13px] leading-[1.7] text-slate-500 sm:text-[14px]">
          Alphobia is a curated platform for discovering premium marketing deals, affiliate opportunities, and modern growth tools — thoughtfully presented for brands and creators.
          <span className="mt-2 block">© 2024 Alphobia. All rights reserved.</span>
        </p>

        <div className="mt-[52px] text-center">
          <span className="font-heading text-[24px] font-extrabold tracking-[0.12em] text-slate-900 sm:text-[28px]">
            ALPHOBIA
          </span>
        </div>

        <p className="mt-9 text-[13px] uppercase tracking-[0.24em] text-slate-400 sm:text-[14px]">
          Curated deals for modern growth
        </p>
      </div>
    </footer>;
}
export {
  Footer,
  Newsletter
};
