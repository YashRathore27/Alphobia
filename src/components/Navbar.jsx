import { ChevronDown, Menu, Search, X, Monitor, Users, Megaphone, Search as SearchIcon, Mail, BrainCircuit, Server, ShoppingCart, ThumbsUp, PenLine, Smartphone, Headphones, Watch, Footprints, Shirt, Plug, Tv } from "lucide-react";
import { useState } from "react";
import { navigate, useRoute } from "../router";
const NAV_LINKS = [
  { label: "Home", route: "home" },
  { label: "Categories", route: "category" },
  { label: "Deals", route: "deals" },
  { label: "Reviews", route: "reviews" },
  { label: "Blog", route: "blog" },
  { label: "Tools", route: "tools" }
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const { route } = useRoute();
  const go = (r, id) => {
    navigate(r, id);
    setOpen(false);
  };
  return <header className="sticky top-4 z-50 mx-4 rounded-xl border border-slate-200/80 bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-4 px-4 sm:px-8">
        {
    /* Logo */
  }
        <button onClick={() => go("home")} className="flex shrink-0 items-center gap-2">
          <span className="font-heading text-lg font-extrabold tracking-tight text-slate-900">
            Alpha<span className="gradient-text">obia</span>
          </span>
        </button>

        {
    /* Center nav */
  }
        <nav className="mx-4 hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => <button
            key={l.label}
            onClick={() => go(l.route)}
            className={`flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${route === l.route ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"}`}
          >
            {l.label}
          </button>)}
        </nav>

        {
    /* Search */
  }
        <div className="ml-auto hidden max-w-xs flex-1 items-center md:flex">
          <div className="relative w-full">
            <input
    type="text"
    placeholder="Search for tools, deals or offers..."
    onKeyDown={(e) => e.key === "Enter" && go("search")}
    className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-4 pr-11 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100"
  />
            <button
    onClick={() => go("search")}
    className="gradient-bg absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-white transition-transform hover:scale-105"
    aria-label="Search"
  >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {
    /* Hamburger */
  }
        <button
    onClick={() => setOpen(!open)}
    className="ml-2 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:ml-0 lg:hidden"
    aria-label="Toggle menu"
  >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {
    /* Mobile menu */
  }
      {open && <div className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">

          <div className="relative mb-3 md:hidden">
            <input
    type="text"
    placeholder="Search for tools, deals or offers..."
    onKeyDown={(e) => e.key === "Enter" && go("search")}
    className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-4 pr-11 text-sm outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
  />
            <button onClick={() => go("search")} aria-label="Search">
              <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </button>
          </div>
          {NAV_LINKS.map((l) => <button
            key={l.label}
            onClick={() => go(l.route)}
            className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium ${route === l.route ? "bg-indigo-50 text-indigo-600" : "text-slate-700 hover:bg-indigo-50"}`}
          >
            {l.label}
          </button>)}
        </div>}
    </header>;
}
export {
  Navbar as default
};
