"use client";

import { useParams, useRouter } from "next/navigation";
import useSWR from "swr";
import { useState } from "react";

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

import { getInfluencerById } from "@/services/api";

type BookingType = "chat" | "audio_call" | "video_call";

const FLOATING_BUTTONS: {
  Icon: typeof MessageSquare;
  bookingType: BookingType;
  label: string;
}[] = [
  { Icon: MessageSquare, bookingType: "chat", label: "Chat" },
  { Icon: Phone, bookingType: "audio_call", label: "Audio Call" },
  { Icon: Video, bookingType: "video_call", label: "Video Call" },
];

export default function Profile() {
  const params = useParams();
  const router = useRouter();

  const influencerId = String(params.id);
  const influencerDbId = Number(params.id);

  const { data: influencer, isLoading } = useSWR(
    influencerDbId ? ["influencer", influencerDbId] : null,
    () => getInfluencerById(influencerDbId)
  );

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<BookingType>("video_call");

  const [userBookings, setUserBookings] = useState<any[]>([]);
  const [influencerSlots, setInfluencerSlots] = useState<any[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600" />
      </div>
    );
  }

  const handleBookingClick = async (type: BookingType) => {
    if (!influencer) return;

    setBookingType(type);
    setLoadingSlots(true);

    try {
      const stored = localStorage.getItem("celebstalk_user");
      const user = stored ? JSON.parse(stored) : null;
      const email = user?.email || "";

      const [userRes, slotRes] = await Promise.all([
        fetch(
          `https://celebstalks.pythonanywhere.com/slot_booking/user/${email}/`
        ),
        fetch(
          `https://celebstalks.pythonanywhere.com/influencer_slot/influencer/${influencerId}/`
        ),
      ]);

      const userJson = await userRes.json();
      const slotJson = await slotRes.json();

      setUserBookings(userJson?.data || []);
      setInfluencerSlots(slotJson?.data || []);
    } catch (error) {
      console.error("Booking fetch error:", error);
      setUserBookings([]);
      setInfluencerSlots([]);
    } finally {
      setLoadingSlots(false);
      setIsBookingOpen(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        influencer={influencer}
        userBookings={userBookings}
        influencerSlots={influencerSlots}
        loadingSlots={loadingSlots}
        bookingType={bookingType}
      />

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4 z-50">
        {FLOATING_BUTTONS.map(({ Icon, bookingType: type, label }) => (
          <div
            key={type}
            onClick={() => handleBookingClick(type)}
            title={label}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#dcfce7]/70 backdrop-blur-sm border border-[#22c55e] flex items-center justify-center cursor-pointer hover:-translate-x-1 hover:bg-[#dcfce7] transition-all duration-300 shadow-sm"
          >
            <Icon
              size={20}
              className="text-[#16a34a] md:w-[22px] md:h-[22px]"
              strokeWidth={2}
            />
          </div>
        ))}
      </div>

      <Section bg="gradient" className="flex-1">
        <Container className="space-y-6 lg:space-y-8">
          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-[12px] font-medium text-[#888] pt-2">
            <span
              onClick={() => router.push("/")}
              className="cursor-pointer hover:text-[#111] transition-colors"
            >
              Home
            </span>
            <span>{">"}</span>
            <span
              onClick={() => router.push("/explore")}
              className="cursor-pointer hover:text-[#111] transition-colors"
            >
              {influencer?.categories?.[0]?.name || "Category"}
            </span>
            <span>{">"}</span>
            <span className="text-[#111] cursor-pointer">
              {influencer?.full_name || "Name"}
            </span>
          </div>

          <ProfileHeader influencer={influencer} />
          <StatsSection influencer={influencer} />
          <ExpertiseSection influencer={influencer} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <ServicesSection influencer={influencer} />
            <HighlightsSection influencerId={influencerId} />
          </div>

          <ReviewsSection
            influencerId={influencer?.influencer_id || ""}
            avgRating={influencer?.avg_rating || 0}
            totalReviews={influencer?.total_reviews || 0}
          />
        </Container>
      </Section>
    </div>
  );
}