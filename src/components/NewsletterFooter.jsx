import { useState } from "react";
import { navigate } from "../router";
import { Modal, Reveal } from "./ui/index";
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
    href: "https://www.instagram.com/accounts/login/",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25Zm0 2A2.75 2.75 0 1 0 14.75 12 2.75 2.75 0 0 0 12 9.25Zm5.5-3.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.5 5.75Z",
    viewBox: "0 0 24 24"
  },
  {
    label: "X",
    href: "https://x.com/i/flow/login",
    path: "M18.9 2H22l-6.7 7.7L23.5 22h-5.8l-4.5-5.9L7.5 22H4.4l7.2-8.2L.5 2h5.9l4.1 5.4L18.9 2Z",
    viewBox: "0 0 24 24"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/login",
    path: "M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38a1.56 1.56 0 0 1 0 3.12ZM5.5 9.75h2.88V19H5.5V9.75Zm4.8 0h2.76v1.25h.04c.38-.72 1.31-1.48 2.7-1.48 2.88 0 3.41 1.89 3.41 4.35V19H16.7v-8.06c0-1.92-.03-4.39-2.67-4.39-2.68 0-3.09 2.09-3.09 4.25V19H10.3V9.75Z",
    viewBox: "0 0 24 24"
  }
];
const MODAL_CONTENT = {
  about: {
    title: "About Alphobia",
    intro: "Alphobia is a curated growth platform for verified deals, honest reviews, and modern marketing tools.",
    points: ["Independent research and product testing", "Transparent affiliate and advertising disclosures", "Built for brands, creators, and modern teams"]
  },
  advertise: {
    title: "Advertise with Alphobia",
    intro: "Reach high-intent readers with premium placements, sponsored content, and audience-first campaigns.",
    points: ["Targeted brand visibility across key categories", "Performance reporting and creative support", "Flexible packages for growing teams"]
  },
  contact: {
    title: "Contact Alphobia",
    intro: "We’re here for partnerships, media inquiries, and product support.",
    points: ["Email: hello@alphobia.media", "Response time: usually within one business day", "HQ: Built for modern performance marketing"]
  }
};
function Footer() {
  const [activeModal, setActiveModal] = useState(null);
  const modalData = activeModal ? MODAL_CONTENT[activeModal] : null;
  return <>
      <footer className="border-t border-slate-200 bg-slate-50/80">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 py-12 sm:px-8 lg:flex-row lg:justify-between lg:gap-12">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="font-heading text-[24px] font-black tracking-[0.22em] text-slate-900 sm:text-[28px]">
                ALPHOBIA
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Discover premium deals, modern growth tools, and honest reviews in one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 text-sm text-slate-600">
            <div>
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Explore
              </h3>
              <ul className="space-y-2">
                <li><button type="button" onClick={() => navigate("deals")} className="text-left transition-colors hover:text-slate-900">Deals</button></li>
                <li><button type="button" onClick={() => navigate("product")} className="text-left transition-colors hover:text-slate-900">Products</button></li>
                <li><button type="button" onClick={() => navigate("reviews")} className="text-left transition-colors hover:text-slate-900">Reviews</button></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Company
              </h3>
              <ul className="space-y-2">
                <li><button type="button" onClick={() => setActiveModal("about")} className="text-left transition-colors hover:text-slate-900">About</button></li>
                <li><button type="button" onClick={() => setActiveModal("advertise")} className="text-left transition-colors hover:text-slate-900">Advertise</button></li>
                <li><button type="button" onClick={() => setActiveModal("contact")} className="text-left transition-colors hover:text-slate-900">Contact</button></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Follow
              </h3>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="transition-all duration-300 hover:text-slate-900">
                    <svg viewBox={social.viewBox} className="h-4 w-4" fill="currentColor">
                      <path d={social.path} />
                    </svg>
                  </a>)}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200/80">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-5 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
            <p>© 2024 Alphobia. All rights reserved.</p>
            <p>Curated deals for modern growth</p>
          </div>
        </div>
      </footer>

      <Modal open={Boolean(modalData)} onClose={() => setActiveModal(null)} title={modalData?.title ?? ""}>
        {modalData ? <div className="space-y-4">
            <p className="text-sm leading-7 text-slate-600">{modalData.intro}</p>
            <div className="rounded-2xl bg-slate-50 p-4">
              <ul className="space-y-2 text-sm text-slate-600">
                {modalData.points.map((point) => <li key={point} className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-900" />{point}</li>)}
              </ul>
            </div>
          </div> : null}
      </Modal>
    </>;
}
export {
  Footer,
  Newsletter
};
