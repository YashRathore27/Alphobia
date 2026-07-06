import { BRANDS } from "../components/ui";
import { EXTRA_BRANDS } from "../components/shared";
function getBrand(key) {
  return BRANDS[key] || EXTRA_BRANDS[key] || { bg: "#64748b", label: "?" };
}
export {
  getBrand
};
