import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/section/home/Hero";
import Footer from "@/components/layout/Footer";
import TrendingCelebrities from "@/components/section/home/TrendingCelebrities";
import Testimonials from "@/components/section/home/Testimonials";
import BrowseCategory from "@/components/section/home/BrowseCategory";
import HowCelebsWork from "@/components/section/home/HowCelebsWork";
import LatestInsights from "@/components/section/home/LatestInsights";
import FAQSection from "@/components/section/home/FAQSection";
import CTASection from "@/components/section/home/CTASection";

export default function Page() {
  return (
    <>
      <Hero />
   <TrendingCelebrities />
   <Testimonials />
   <BrowseCategory />
   <HowCelebsWork />
   <LatestInsights />
   <FAQSection />
   <CTASection />
    </>
  );
}
