"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ProfileHeader from "@/components/section/profile/ProfileHeader";
import StatsSection from "@/components/section/profile/StatsSection";
import ServicesSection from "@/components/section/profile/ServicesSection";
import HighlightsSection from "@/components/section/profile/HighlightsSection";
import ReviewsSection from "@/components/section/profile/ReviewsSection";
import ExpertiseSection from "@/components/section/profile/ExpertiseSection";
import BookingModal from "@/components/modals/BookingModal";
import { MessageSquare, Phone, Video } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed right-0 sm:right-0 md:right-0 lg:right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4 z-50">
        {[MessageSquare, Phone, Video].map((Icon, i) => (
          <div
            key={i}
            onClick={i === 1 ? () => setIsBookingOpen(true) : undefined}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#dcfce7]/70 backdrop-blur-sm border border-[#22c55e] flex items-center justify-center cursor-pointer hover:-translate-x-1 hover:bg-[#dcfce7] transition-all duration-300 shadow-sm"
          >
            <Icon size={20} className="text-[#16a34a] md:w-[22px] md:h-[22px]" strokeWidth={2} />
          </div>
        ))}
      </div>

      <Section bg="gradient" className="flex-1">
        <Container className="space-y-6 lg:space-y-8">
          {/* BREADCRUMBS */}
          <div className="flex items-center gap-2 text-[12px] font-medium text-[#888] pt-2">
            <span className="cursor-pointer hover:text-[#111] transition-colors">Home</span>
            <span>{'>'}</span>
            <span className="cursor-pointer hover:text-[#111] transition-colors">Creators</span>
            <span>{'>'}</span>
            <span className="cursor-pointer hover:text-[#111] transition-colors">Youtubers</span>
            <span>{'>'}</span>
            <span className="text-[#111] cursor-pointer">Jasmine</span>
          </div>

          <ProfileHeader />
          <StatsSection />
          <ExpertiseSection />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <ServicesSection />
            <HighlightsSection />
          </div>
          <ReviewsSection />
        </Container>
      </Section>
    </div>
  );
}