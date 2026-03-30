"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ExploreSidebar from "@/components/section/explore/ExploreSidebar";
import CelebrityGrid from "@/components/section/explore/CelebrityGrid";

const data = Array.from({ length: 16 }).map((_, i) => ({
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
        <div className="flex flex-col lg:flex-row gap-6">
          <ExploreSidebar />
          <CelebrityGrid data={data} />
        </div>
      </Container>
    </Section>
  );
}