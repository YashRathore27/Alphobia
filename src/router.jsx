import { useEffect, useState } from "react";
const VALID = [
  "home",
  "deals",
  "deal",
  "tools",
  "tool",
  "affiliate",
  "category",
  "compare",
  "reviews",
  "review",
  "blog",
  "news",
  "search",
  "dashboard",
  "profile",
  "product"
];
function getRoute() {
  const h = window.location.hash.replace(/^#\/?/, "");
  const parts = h.split("/");
  const route = parts[0];
  if (VALID.includes(route)) {
    return { route, id: parts[1] || void 0 };
  }
  return { route: "home" };
}
function navigate(r, id) {
  window.location.hash = id ? `/${r}/${id}` : `/${r}`;
}
function useRoute() {
  const [state, setState] = useState(getRoute);
  useEffect(() => {
    const onHash = () => {
      setState(getRoute());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return state;
}
export {
  navigate,
  useRoute
};
