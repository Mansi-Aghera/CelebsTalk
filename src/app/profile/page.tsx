"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ProfileHeader from "@/components/section/profile/ProfileHeader";
import StatsSection from "@/components/section/profile/StatsSection";
import ServicesSection from "@/components/section/profile/ServicesSection";
import HighlightsSection from "@/components/section/profile/HighlightsSection";
import ReviewsSection from "@/components/section/profile/ReviewsSection";

const mock = {
  name: "Jasmine",
  username: "@officialjazz",
  image: "/images/hero/hero.png",
  rating: 4.1,
};

export default function ProfilePage() {
  return (
    <Section bg="gradient">
      <Container className="space-y-6">
        <ProfileHeader />
        <StatsSection />
        <ServicesSection />
        <HighlightsSection />
        <ReviewsSection />
      </Container>
    </Section>
  );
}