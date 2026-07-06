import { Award, Check, Minus, Trophy } from "lucide-react";
import { PageHeader } from "../components/shared";
import { BRANDS, LogoBadge, Reveal } from "../components/ui";
const ROWS = [
  { feature: "Pricing", a: "$119.95 / month", b: "$99 / month" },
  { feature: "Free Trial", a: "7 Days", b: "7 Days" },
  { feature: "Keyword Research", a: true, b: true },
  { feature: "Backlink Analysis", a: true, b: true },
  { feature: "Site Audit", a: true, b: true },
  { feature: "Rank Tracking", a: true, b: true },
  { feature: "Competitor Analysis", a: true, b: true },
  { feature: "Content Marketing", a: true, b: false },
  { feature: "PPC Research", a: true, b: false },
  { feature: "Reporting", a: "Advanced", b: "Advanced" },
  { feature: "API Access", a: true, b: true },
  { feature: "Ease of Use", a: "4.7/5", b: "4.6/5" },
  { feature: "Customer Support", a: "24/7", b: "24/7" }
];
function CellValue({ v }) {
  if (v === true)
    return <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
        <Check className="h-3.5 w-3.5 text-emerald-500" />
      </span>;
  if (v === false)
    return <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
        <Minus className="h-3.5 w-3.5 text-slate-400" />
      </span>;
  return <span className="text-[13px] font-semibold text-slate-700">{v}</span>;
}
function Compare() {
  return <div className="pb-4">
      <PageHeader
    crumbs={[
      { label: "Home", route: "home" },
      { label: "Compare", route: "compare" },
      { label: "Semrush vs Ahrefs" }
    ]}
  />

      <div className="mx-auto max-w-[1100px] space-y-8 px-4 py-8 sm:px-8">
        {
    /* VS header */
  }
        <Reveal>
          <div className="card relative overflow-hidden p-6 sm:p-8">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl" />
            <div className="relative grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
              <div className="flex flex-col items-center gap-3 text-center">
                <LogoBadge brand={BRANDS.semrush} size={72} />
                <div>
                  <p className="text-[22px] font-extrabold text-slate-900">Semrush</p>
                  <p className="text-[12.5px] text-slate-400">All-in-one Marketing Toolkit</p>
                </div>
              </div>
              <span className="gradient-bg mx-auto flex h-14 w-14 items-center justify-center rounded-full text-[14px] font-extrabold text-white shadow-xl shadow-blue-500/30 ring-8 ring-blue-50">
                VS
              </span>
              <div className="flex flex-col items-center gap-3 text-center">
                <LogoBadge brand={BRANDS.ahrefs} size={72} />
                <div>
                  <p className="text-[22px] font-extrabold text-slate-900">Ahrefs</p>
                  <p className="text-[12.5px] text-slate-400">Backlink & SEO Analysis Suite</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {
    /* Comparison table */
  }
        <Reveal>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left">
                <thead>
                  <tr className="bg-slate-50 text-[12px] uppercase tracking-wide text-slate-400">
                    <th className="px-6 py-4 font-bold">Features</th>
                    <th className="px-6 py-4 text-center font-bold text-blue-600">Semrush</th>
                    <th className="px-6 py-4 text-center font-bold text-blue-600">Ahrefs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ROWS.map((r) => <tr key={r.feature} className="transition-colors hover:bg-blue-50/30">
                      <td className="px-6 py-3.5 text-[13px] font-semibold text-slate-700">
                        {r.feature}
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        <CellValue v={r.a} />
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        <CellValue v={r.b} />
                      </td>
                      </tr>)}
                  <tr className="bg-gradient-to-r from-blue-50/60 to-blue-50/60">
                    <td className="px-6 py-4 text-[13.5px] font-extrabold text-slate-900">
                      Overall Rating
                    </td>
                    <td className="px-6 py-4 text-center text-[18px] font-extrabold text-blue-600">
                      4.8/5
                    </td>
                    <td className="px-6 py-4 text-center text-[18px] font-extrabold text-blue-600">
                      4.7/5
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {
    /* Winner highlight */
  }
        <Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card flex items-start gap-4 border-blue-200 bg-gradient-to-br from-blue-50/70 to-white p-5 ring-1 ring-blue-100">
              <span className="gradient-bg flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg shadow-blue-500/30">
                <Trophy className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[15px] font-extrabold text-slate-900">Best For: All-in-one SEO</p>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                  Semrush wins for teams that need SEO, PPC, content and social tools in a single
                  platform.
                </p>
              </div>
            </div>
            <div className="card flex items-start gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[15px] font-extrabold text-slate-900">Best Value: Great for Backlinks</p>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                  Ahrefs offers the industry's best backlink index at a lower entry price — ideal
                  for link builders.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {
    /* Summary + CTAs */
  }
        <Reveal>
          <div className="card p-6 sm:p-8 text-center">
            <h2 className="text-[20px] font-extrabold text-slate-900">Comparison Summary</h2>
            <p className="mx-auto mt-2 max-w-2xl text-[13.5px] leading-relaxed text-slate-500">
              Both tools are exceptional. Choose <b className="text-slate-800">Semrush</b> if you want
              the broadest all-in-one marketing suite, or <b className="text-slate-800">Ahrefs</b> if
              backlink data quality and simplicity matter most to your workflow.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button className="btn-ripple gradient-bg h-12 rounded-xl px-7 text-[14px] font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50">
                Visit Semrush
              </button>
              <button className="btn-ripple h-12 rounded-xl border border-blue-200 px-7 text-[14px] font-bold text-blue-600 transition-all hover:bg-blue-50">
                Visit Ahrefs
              </button>
            </div>
            <button className="mt-3 text-[13px] font-bold text-blue-600 hover:text-blue-500">
              View Full Comparison →
            </button>
          </div>
        </Reveal>
      </div>
    </div>;
}
export {
  Compare as default
};
