import { Check, ChevronDown, ChevronRight, Copy, ThumbsDown, ThumbsUp, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { navigate } from "../router";
import { LogoBadge, Rating } from "./ui";
const EXTRA_BRANDS = {
  moz: { bg: "#1B58C8", label: "M" },
  ubersuggest: { bg: "linear-gradient(135deg,#F97316,#FB923C)", label: "U" },
  screamingfrog: { bg: "linear-gradient(135deg,#65A30D,#84CC16)", label: "\u{1F438}" },
  kwfinder: { bg: "linear-gradient(135deg,#E11D48,#FB7185)", label: "KW" },
  mangools: { bg: "linear-gradient(135deg,#FF7043,#FFA270)", label: "M" },
  surfer: { bg: "linear-gradient(135deg,#FF5B49,#FF8A75)", label: "S" },
  spyfu: { bg: "linear-gradient(135deg,#312E81,#4F46E5)", label: "Sp" },
  figma: { bg: "linear-gradient(135deg,#0ACF83,#1ABCFE)", label: "F" },
  "adobe-express": { bg: "linear-gradient(135deg,#DA1F26,#FF6B6B)", label: "A" },
  visme: { bg: "linear-gradient(135deg,#6C3EBF,#8B5CF6)", label: "V" },
  snappa: { bg: "linear-gradient(135deg,#E74C3C,#F1948A)", label: "S" },
  /* ──── Extra product brands ──── */
  razer: { bg: "linear-gradient(135deg,#00FF00,#44FF88)", label: "R" },
  logitech: { bg: "linear-gradient(135deg,#00A3E0,#0081BC)", label: "L" },
  jbl: { bg: "linear-gradient(135deg,#FF6600,#E65C00)", label: "JBL" },
  beats: { bg: "linear-gradient(135deg,#E11D48,#BE123C)", label: "b" },
  bose: { bg: "linear-gradient(135deg,#000,#222)", label: "B" },
  fossil: { bg: "linear-gradient(135deg,#8B7355,#A0896C)", label: "F" },
  timberland: { bg: "linear-gradient(135deg,#8B4513,#A0522D)", label: "T" },
  "new-balance": { bg: "linear-gradient(135deg,#CF142B,#A00F20)", label: "NB" },
  underarmour: { bg: "linear-gradient(135deg,#000,#333)", label: "UA" },
  levis: { bg: "linear-gradient(135deg,#0033A0,#00207C)", label: "L" },
  calvinklein: { bg: "linear-gradient(135deg,#000,#222)", label: "CK" },
  tommys: { bg: "linear-gradient(135deg,#0033A0,#00227B)", label: "TH" },
  samsung_appliances: { bg: "linear-gradient(135deg,#1428A0,#4477DD)", label: "S" },
  kitchenaid: { bg: "linear-gradient(135deg,#CC3333,#AA2222)", label: "K" },
  instantpot: { bg: "linear-gradient(135deg,#E85D26,#CC4A1C)", label: "IP" },
  roomba: { bg: "linear-gradient(135deg,#00A4E4,#0085C7)", label: "R" }
};
function Breadcrumbs({ items }) {
  return <nav className="flex flex-wrap items-center gap-1.5 text-[13px] text-slate-400">
      {items.map((it, i) => <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-300" />}
          {it.route ? <button
    onClick={() => navigate(it.route)}
    className="font-medium transition-colors hover:text-blue-600"
  >
              {it.label}
            </button> : <span className="font-semibold text-slate-700">{it.label}</span>}
        </span>)}
    </nav>;
}
function Tabs({
  tabs,
  active,
  onChange
}) {
  return <div className="scrollbar-none flex gap-1 overflow-x-auto border-b border-slate-100">
      {tabs.map((t) => <button
    key={t}
    onClick={() => onChange(t)}
    className={cn(
      "relative shrink-0 px-3 py-2.5 text-[13.5px] font-semibold transition-colors",
      active === t ? "text-blue-600" : "text-slate-500 hover:text-slate-800"
    )}
  >
          {t}
          {active === t && <span className="gradient-bg absolute inset-x-3 -bottom-px h-[3px] rounded-full" />}
        </button>)}
    </div>;
}
function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return <div className="space-y-3">
      {items.map((f, i) => <div key={i} className="card overflow-hidden">
          <button
    onClick={() => setOpen(open === i ? -1 : i)}
    className="flex w-full items-center justify-between gap-4 px-3 py-2.5 text-left"
  >
            <span className="text-[14px] font-bold text-slate-800">{f.q}</span>
            <ChevronDown
    className={cn(
      "h-4 w-4 shrink-0 text-slate-400 transition-transform",
      open === i && "rotate-180 text-blue-600"
    )}
  />
          </button>
          {open === i && <p className="px-4 pb-4 text-[13.5px] leading-relaxed text-slate-500">{f.a}</p>}
        </div>)}
    </div>;
}
function Pagination({ total = 10 }) {
  const [page, setPage] = useState(1);
  const pages = [1, 2, 3, 4, 5];
  return <div className="flex items-center justify-center gap-2">
      {pages.map((p) => <button
    key={p}
    onClick={() => setPage(p)}
    className={cn(
      "h-10 w-10 rounded-xl text-[13px] font-bold transition-all",
      page === p ? "gradient-bg text-white shadow-lg shadow-blue-500/30" : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
    )}
  >
          {p}
        </button>)}
      <span className="px-1 text-slate-400">…</span>
      <button className="h-10 w-10 rounded-xl border border-slate-200 bg-white text-[13px] font-bold text-slate-600 hover:border-blue-300 hover:text-blue-600">
        {total}
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600">
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>;
}
function ProsCons({ pros, cons }) {
  return <div className="grid gap-6 sm:grid-cols-2">
      <div className="card p-5">
        <p className="font-heading mb-3 flex items-center gap-2 text-[14px] font-extrabold text-emerald-600">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50">
            <ThumbsUp className="h-4 w-4" />
          </span>
          Pros
        </p>
        <ul className="space-y-2.5">
          {pros.map((p) => <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
              {p}
            </li>)}
        </ul>
      </div>
      <div className="card p-5">
        <p className="font-heading mb-3 flex items-center gap-2 text-[14px] font-extrabold text-rose-500">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-50">
            <ThumbsDown className="h-4 w-4" />
          </span>
          Cons
        </p>
        <ul className="space-y-2.5">
          {cons.map((c) => <li key={c} className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
              {c}
            </li>)}
        </ul>
      </div>
    </div>;
}
function ScoreBar({ label, value }) {
  return <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[13px] font-semibold text-slate-600">{label}</span>
        <span className="text-[13px] font-extrabold text-slate-900">{value.toFixed(1)}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div className="gradient-bg h-full rounded-full" style={{ width: `${value / 5 * 100}%` }} />
      </div>
    </div>;
}
function Countdown({ seconds }) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    const id = setInterval(() => setLeft((s) => s > 0 ? s - 1 : 24 * 3600), 1e3);
    return () => clearInterval(id);
  }, []);
  const parts = [
    { v: Math.floor(left / 3600), l: "Hrs" },
    { v: Math.floor(left % 3600 / 60), l: "Mins" },
    { v: left % 60, l: "Secs" }
  ];
  return <div className="grid grid-cols-3 gap-2">
      {parts.map((p) => <div key={p.l} className="rounded-xl bg-blue-50/80 py-2.5 text-center">
          <p className="text-lg font-extrabold tabular-nums text-blue-700">
            {String(p.v).padStart(2, "0")}
          </p>
          <p className="text-[10px] font-semibold text-blue-400">{p.l}</p>
        </div>)}
    </div>;
}
function CouponCode({ code }) {
  const [copied, setCopied] = useState(false);
  return <button
    onClick={() => {
      navigator.clipboard?.writeText(code).catch(() => {
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }}
    className="flex w-full items-center justify-between rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/60 px-4 py-3 transition-colors hover:bg-blue-50"
  >
      <span className="text-[15px] font-extrabold tracking-widest text-blue-700">{code}</span>
      <span className="flex items-center gap-1.5 text-[12px] font-bold text-blue-500">
        {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
        {copied ? "Copied!" : "Copy"}
      </span>
    </button>;
}
function FilterGroup({
  title,
  options
}) {
  return <div className="border-b border-slate-100 py-[14px] first:pt-0 last:border-0 last:pb-0">
      <p className="font-heading mb-4 text-[13px] font-extrabold text-slate-900">{title}</p>
      <div className="space-y-3">
        {options.map((o) => <label
    key={o.label}
    className="flex cursor-pointer items-center gap-2.5 text-[13px] text-slate-600 hover:text-slate-900"
  >
            <input
    type="checkbox"
    className="h-4 w-4 rounded border-slate-300 accent-blue-600"
  />
            <span className="flex-1">{o.label}</span>
            {o.count && <span className="text-[11px] text-slate-400">{o.count}</span>}
          </label>)}
      </div>
    </div>;
}
function RatingFilterGroup() {
  return <div className="border-b border-slate-100 py-[14px]">
      <p className="font-heading mb-4 text-[13px] font-extrabold text-slate-900">Rating</p>
      <div className="space-y-3">
        {[4.5, 4, 3.5].map((r) => <label key={r} className="flex cursor-pointer items-center gap-2.5">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-blue-600" />
            <Rating value={r} size={12} />
            <span className="text-[12px] text-slate-400">& up</span>
          </label>)}
      </div>
    </div>;
}
function ToolRowCard({ t }) {
  return <div className="card card-hover flex min-h-[112px] items-center gap-5 p-6 sm:gap-6">
      <LogoBadge brand={t.brand} size={60} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-[18px] font-bold text-slate-900">{t.name}</h3>
          {t.badge && <span
    className={cn(
      "rounded-full px-2.5 py-0.5 text-[11px] font-extrabold",
      t.badgeClass ?? "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
    )}
  >
              {t.badge}
            </span>}
        </div>
        <p className="mt-0.5 text-[14px] text-slate-500">{t.desc}</p>
        <Rating value={t.rating} className="mt-1.5" size={14} />
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="whitespace-nowrap text-[13px] font-semibold text-slate-500">{t.meta}</p>
        <button
    onClick={() => navigate(t.route ?? "tool", t.id)}
    className="btn-ripple rounded-xl border-2 border-blue-500 bg-white px-5 py-2 text-[13px] font-bold text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
    style={{ width: 90 }}
  >
          Visit
        </button>
      </div>
    </div>;
}
function PageHeader({
  crumbs,
  children
}) {
  return <div className="mx-auto max-w-[1440px] px-4 pt-6 sm:px-8">
      <Breadcrumbs items={crumbs} />
      {children}
    </div>;
}
function CheckItem({ children }) {
  return <li className="flex items-start gap-2.5 text-[13.5px] text-slate-600">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50">
        <Check className="h-3 w-3 text-emerald-500" />
      </span>
      {children}
    </li>;
}
export {
  Breadcrumbs,
  CheckItem,
  Countdown,
  CouponCode,
  EXTRA_BRANDS,
  FAQAccordion,
  FilterGroup,
  PageHeader,
  Pagination,
  ProsCons,
  RatingFilterGroup,
  ScoreBar,
  Tabs,
  ToolRowCard
};
