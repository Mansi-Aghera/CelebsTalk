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
import { Metadata } from "next";
import { getInfluencers, getCategories } from "@/services/api";
import { getFAQs } from "@/services/api";

export const metadata: Metadata = {
  title: "CelebsTalk | Connect with your Favorite Celebrities",
  description: "Book video messages, calls, and chats with trending celebrities.",
};

export default async function Page() {
  const [celebrities, categories, faqs] = await Promise.all([
  getInfluencers(),
  getCategories(),
  getFAQs(), // ✅ added
]);

  return (
    <>
      <Hero />
      <TrendingCelebrities celebrities={celebrities.slice(0, 6)} />
      <Testimonials />
      <BrowseCategory categories={categories} />
      <HowCelebsWork />
      <LatestInsights />
      <FAQSection faqs={faqs} />
      <CTASection />
    </>
  );
}
