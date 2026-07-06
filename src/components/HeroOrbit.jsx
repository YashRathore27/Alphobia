import { useEffect, useRef, useState } from "react";
import "../styles/marketeam.css";
import { navigate } from "../router";

const AVATARS = [
  ["https://polo-pecan-73837341.figma.site/_assets/v11/aa51718fb3af3637e6d666b6543fc27a175fada6.png", 1, 270, 177, "", "mk-avatar--sq", "glow-blue", 0.6],
  ["https://polo-pecan-73837341.figma.site/_assets/v11/ca755f7f93c1126fb8bdbf99ab364a33aa9ab272.png", 2, 60, 251, "", "", "glow-yellow", 0.8],
  ["https://polo-pecan-73837341.figma.site/_assets/v11/dc01064c7093dcc32674876ee3cf5e41c4a485c6.png", 2, 180, 251, "mk-avatar--md", "", "glow-pink", 1.0],
  ["https://polo-pecan-73837341.figma.site/_assets/v11/d5470a58b02388336141575048720f19a50de832.png", 2, 300, 251, "", "mk-avatar--sq", "glow-blue", 1.2],
  ["https://polo-pecan-73837341.figma.site/_assets/v11/018736aa5d0275c4ce56cfebaf2ae3007d81ca1e.png", 3, 130, 325, "mk-avatar--lg", "", "glow-pink", 1.4],
  ["https://polo-pecan-73837341.figma.site/_assets/v11/c76d8a0b99676de31c014344bfaf75bad090758d.png", 4, 30, 399, "", "", "glow-blue", 1.6],
  ["https://polo-pecan-73837341.figma.site/_assets/v11/7b1b5f039de7b54cc9913e96c1923c3b15a157fa.png", 4, 95, 399, "mk-avatar--lg", "mk-avatar--sq-lg", "glow-orange", 1.85],
  ["https://polo-pecan-73837341.figma.site/_assets/v11/9ae171d8895199349755c43fbff00e122221a027.png", 4, 220, 399, "mk-avatar--lg", "mk-avatar--sq-lg", "glow-pink", 2.1],
  ["https://polo-pecan-73837341.figma.site/_assets/v11/926c9eb7b4bc1df846fa0e39f0b0dc3fefd80671.png", 4, 320, 399, "", "", "glow-blue", 2.3],
];

const HEADING_TEXT = "Unlock Verified Deals & Marketing Talent You Thought Was Out of Reach — One Click Away!";
const DARK_CHARS = 63;

function useCountUp(target = 20, { duration = 2000, delay = 1200 } = {}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    let start;
    const timeout = setTimeout(() => {
      const tick = (now) => {
        if (start === undefined) start = now;
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(target * eased));
        if (p < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, delay]);

  return value;
}

function TypewriterHeading({ text = HEADING_TEXT, speed = 35, startDelay = 400 }) {
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  const typed = text.slice(0, count);
  const darkPart = typed.slice(0, DARK_CHARS);
  const lightPart = typed.slice(DARK_CHARS);

  return (
    <h1 className="mk-heading">
      <span className="dark">{darkPart}</span>
      <span className="light">{lightPart}</span>
      {!done && <span className="mk-caret" aria-hidden="true" />}
    </h1>
  );
}

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M6.5 3.75L11.75 9L6.5 14.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function OrbitAvatar({ url, angle, radius, sizeClass, shapeClass, glowClass, delay, uprightClass }) {
  return (
    <div
      className="mk-avatar-pos"
      style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)` }}
    >
      <div className={uprightClass}>
        <img
          src={url}
          alt="Marketing specialist"
          loading="lazy"
          className={`mk-avatar ${sizeClass} ${shapeClass} ${glowClass}`}
          style={{ animationDelay: `${delay}s` }}
        />
      </div>
    </div>
  );
}

export default function HeroOrbit() {
  const count = useCountUp(20, { duration: 2000, delay: 1200 });

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 pt-6 sm:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]" style={{ minHeight: 490 }}>
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/HeroImg.jpeg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_45%)]" />
          <div className="mk-app mk-app--section relative z-10">
            <div className="mk-hero">
              <div className="mk-hero-left">
                <TypewriterHeading />

                <div className="mk-start-wrap">
                  <div className="btn-border-wrap">
                    <button onClick={() => navigate("deals")} className="mk-btn mk-btn--start">
                      Explore Deals <ArrowIcon />
                    </button>
                  </div>
                  <div className="btn-border-wrap">
                    <button onClick={() => navigate("contact")} className="mk-btn">
                      Get Free Audit
                    </button>
                  </div>
                </div>
              </div>

              <div className="mk-hero-right" aria-hidden="true">
                <div className="mk-circles">
                  <div className="mk-orbit mk-orbit-4">
                    {AVATARS.filter((a) => a[1] === 4).map(([url, , angle, radius, size, shape, glow, delay]) => (
                      <OrbitAvatar key={url + angle} url={url} angle={angle} radius={radius} sizeClass={size} shapeClass={shape} glowClass={glow} delay={delay} uprightClass="mk-upright-4" />
                    ))}
                  </div>
                  <div className="mk-orbit mk-orbit-3">
                    {AVATARS.filter((a) => a[1] === 3).map(([url, , angle, radius, size, shape, glow, delay]) => (
                      <OrbitAvatar key={url + angle} url={url} angle={angle} radius={radius} sizeClass={size} shapeClass={shape} glowClass={glow} delay={delay} uprightClass="mk-upright-3" />
                    ))}
                  </div>
                  <div className="mk-orbit mk-orbit-2">
                    {AVATARS.filter((a) => a[1] === 2).map(([url, , angle, radius, size, shape, glow, delay]) => (
                      <OrbitAvatar key={url + angle} url={url} angle={angle} radius={radius} sizeClass={size} shapeClass={shape} glowClass={glow} delay={delay} uprightClass="mk-upright-2" />
                    ))}
                  </div>
                  <div className="mk-orbit mk-orbit-1">
                    {AVATARS.filter((a) => a[1] === 1).map(([url, , angle, radius, size, shape, glow, delay]) => (
                      <OrbitAvatar key={url + angle} url={url} angle={angle} radius={radius} sizeClass={size} shapeClass={shape} glowClass={glow} delay={delay} uprightClass="mk-upright-1" />
                    ))}
                  </div>

                  <div className="mk-center">
                    <div className="mk-count">{count}k+</div>
                    <div className="mk-count-label">Specialists</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
