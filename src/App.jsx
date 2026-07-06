import Categories from "./components/Categories";
import { BestDeals, ComparePlatforms } from "./components/Deals";
import Hero from "./components/HeroOrbit";
import Navbar from "./components/Navbar";
import { TrendingOffers } from "./components/Offers";
import { ProductOffers } from "./components/ProductOffers";
import { AdPlatforms, MarketingTools } from "./components/Platforms";
import ReviewsNews from "./components/ReviewsNews";
import { Footer, Newsletter } from "./components/NewsletterFooter";
import { useRoute } from "./router";
import AffiliateDetail from "./pages/AffiliateDetail";
import CategoryListing from "./pages/CategoryListing";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";
import DealDetail from "./pages/DealDetail";
import DealListing from "./pages/DealListing";
import NewsDetail from "./pages/NewsDetail";
import NewsListing from "./pages/NewsListing";
import Profile from "./pages/Profile";
import ReviewDetail from "./pages/ReviewDetail";
import ReviewListing from "./pages/ReviewListing";
import SearchResults from "./pages/SearchResults";
import ProductDetail from "./pages/ProductDetail";
import ToolDetail from "./pages/ToolDetail";
import ToolListing from "./pages/ToolListing";
function Home() {
  return <>
      <Hero />
      <Categories />
      <TrendingOffers />
      <ProductOffers />
      <AdPlatforms />
      <MarketingTools />
      <BestDeals />
      <ComparePlatforms />
      <ReviewsNews />
      <Newsletter />
    </>;
}
const PAGES = {
  home: Home,
  deals: DealListing,
  deal: DealDetail,
  tool: ToolDetail,
  product: ProductDetail,
  affiliate: AffiliateDetail,
  category: CategoryListing,
  compare: Compare,
  reviews: ReviewListing,
  review: ReviewDetail,
  blog: NewsListing,
  news: NewsDetail,
  tools: ToolListing,
  search: SearchResults,
  dashboard: Dashboard,
  profile: Profile
};
function App() {
  const { route, id } = useRoute();
  const Page = PAGES[route] ?? Home;
  return <div className="min-h-screen bg-primary">
      <Navbar />
      <main key={route + (id ?? "")}>
        <Page id={id} />
      </main>
      <Footer />
    </div>;
}
export {
  App as default
};
