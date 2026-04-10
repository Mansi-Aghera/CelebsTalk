

"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CelebrityGrid from "@/components/section/explore/CelebrityGrid";
import ExploreSidebar from "@/components/section/explore/ExploreSidebar";


const data = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  name: "John Beb",
  image: "/images/hero/img2.jpg",
  category: "Singer, Actor",
  languages: "English, Hindi",
  location: "Mumbai, India",
  orders: 120,
  subscribers: "1.2M",
  rating: 4.8,
  videoPrice: "₹500",
  callPrice: "₹800",
  chatPrice: "₹300",
}));

export default function ExplorePage() {
  return (
    <Section bg="gradient">
      <Container>

        {/* 🔥 HEADER (always top) */}
        <CelebrityGrid.Header />

        {/* 🔥 MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Sidebar */}
          <div className="order-2 lg:order-1">
            <ExploreSidebar />
          </div>

          {/* Grid */}
          <div className="order-3 lg:order-2 flex-1">
            <CelebrityGrid data={data} hideHeader />
          </div>

        </div>

      </Container>
    </Section>
  );
}