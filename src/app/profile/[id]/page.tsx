// "use client";

// import Section from "@/components/layout/Section";
// import Container from "@/components/layout/Container";
// import ProfileHeader from "@/components/section/profile/ProfileHeader";
// import StatsSection from "@/components/section/profile/StatsSection";
// import ServicesSection from "@/components/section/profile/ServicesSection";
// import HighlightsSection from "@/components/section/profile/HighlightsSection";
// import ReviewsSection from "@/components/section/profile/ReviewsSection";
// import ExpertiseSection from "@/components/section/profile/ExpertiseSection";
// import BookingModal from "@/components/modals/BookingModal";
// import { MessageSquare, Phone, Video } from "lucide-react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { startCall } from "@/lib/callService";

// // 🔁 Replace with real logged-in user ID + celebrity ID from your auth/context
// const MY_USER_ID = 13;
// const CELEBRITY_ID = 12;

// export default function ProfilePage() {
//   const [isBookingOpen, setIsBookingOpen] = useState(false);
//   const [calling, setCalling] = useState(false);
//   const router = useRouter();

// const handleAudioCall = async () => {
//   if (calling) return;
//   setCalling(true);
//   try {
//     const { channelName } = await startCall(MY_USER_ID, CELEBRITY_ID, "audio"); // ← "audio"
//     router.push(`/call?channel=${channelName}&mode=caller&type=audio`);
//   } catch (err) {
//     console.error("Call failed:", err);
//     setCalling(false);
//   }
// };

// const handleVideoCall = async () => {
//   if (calling) return;
//   setCalling(true);
//   try {
//     const { channelName } = await startCall(MY_USER_ID, CELEBRITY_ID, "video"); // ← "video"
//     router.push(`/call?channel=${channelName}&mode=caller&type=video`);
//   } catch (err) {
//     console.error("Video call failed:", err);
//     setCalling(false);
//   }
// };

//   const handleChat = () => {
//     router.push(`/chat/${CELEBRITY_ID}`);
//   };

//   const buttonActions = [
//     { Icon: MessageSquare, onClick: handleChat,      label: "Chat"       },
//     { Icon: Phone,         onClick: handleAudioCall, label: "Audio Call" },
//     { Icon: Video,         onClick: handleVideoCall, label: "Video Call" },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen relative overflow-hidden">

//       <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

//       {/* FLOATING ACTION BUTTONS */}
//       <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4 z-50">
//         {buttonActions.map(({ Icon, onClick, label }, i) => (
//           <div
//             key={i}
//             onClick={onClick}
//             title={label}
//             className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#dcfce7]/70 backdrop-blur-sm border border-[#22c55e] flex items-center justify-center cursor-pointer hover:-translate-x-1 hover:bg-[#dcfce7] transition-all duration-300 shadow-sm"
//           >
//             <Icon size={20} className="text-[#16a34a] md:w-[22px] md:h-[22px]" strokeWidth={2} />
//           </div>
//         ))}
//       </div>

//       <Section bg="gradient" className="flex-1">
//         <Container className="space-y-6 lg:space-y-8">
//           <div className="flex items-center gap-2 text-[12px] font-medium text-[#888] pt-2">
//             <span className="cursor-pointer hover:text-[#111] transition-colors">Home</span>
//             <span>{'>'}</span>
//             <span className="cursor-pointer hover:text-[#111] transition-colors">Creators</span>
//             <span>{'>'}</span>
//             <span className="cursor-pointer hover:text-[#111] transition-colors">Youtubers</span>
//             <span>{'>'}</span>
//             <span className="text-[#111] cursor-pointer">Jasmine</span>
//           </div>

//           <ProfileHeader />
//           <StatsSection />
//           <ExpertiseSection />
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
//             <ServicesSection />
//             <HighlightsSection />
//           </div>
//           <ReviewsSection />
//         </Container>
//       </Section>
//     </div>
//   );
// }

// "use client";

// import { useParams } from "next/navigation";

// import Section from "@/components/layout/Section";
// import Container from "@/components/layout/Container";
// import ProfileHeader from "@/components/section/profile/ProfileHeader";
// import StatsSection from "@/components/section/profile/StatsSection";
// import ServicesSection from "@/components/section/profile/ServicesSection";
// import HighlightsSection from "@/components/section/profile/HighlightsSection";
// import ReviewsSection from "@/components/section/profile/ReviewsSection";
// import ExpertiseSection from "@/components/section/profile/ExpertiseSection";

// export default function ProfilePage() {
//   const params = useParams();
//   const id = params.id;

//   return (
//     <div className="flex flex-col min-h-screen">

//       <Section bg="gradient" className="flex-1">
//         <Container className="space-y-6 lg:space-y-8">

//           {/* DEBUG (remove later) */}
//           <div className="text-xs text-[var(--neutral-600)]">
//             Profile ID: {id}
//           </div>

//           <ProfileHeader />
//           <StatsSection />
//           <ExpertiseSection />

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
//             <ServicesSection />
//             <HighlightsSection />
//           </div>

//           <ReviewsSection />

//         </Container>
//       </Section>
//     </div>
//   );
// }

// "use client";

// import { useParams } from "next/navigation";
// import useSWR from "swr";
// import { useRouter } from "next/navigation";

// import Section from "@/components/layout/Section";
// import Container from "@/components/layout/Container";
// import ProfileHeader from "@/components/section/profile/ProfileHeader";
// import StatsSection from "@/components/section/profile/StatsSection";
// import ServicesSection from "@/components/section/profile/ServicesSection";
// import HighlightsSection from "@/components/section/profile/HighlightsSection";
// import ReviewsSection from "@/components/section/profile/ReviewsSection";
// import ExpertiseSection from "@/components/section/profile/ExpertiseSection";

// import { getInfluencers } from "@/services/api";
// import { Influencer } from "@/types";

// export default function ProfilePage() {
//   const params = useParams();
//   const id = Number(params.id);
// const router = useRouter();
//   const { data } = useSWR("influencers", getInfluencers);

//   const influencer: Influencer | undefined = data?.find((inf) => inf.id === id);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Section bg="gradient" className="flex-1">
//         <Container className="space-y-6 lg:space-y-8">
//           <div className="flex items-center gap-2 text-[12px] font-medium text-[#888] pt-2">
//   <span
//     onClick={() => router.push("/")}
//     className="cursor-pointer hover:text-[#111] transition-colors"
//   >
//     Home
//   </span>

//   <span>{">"}</span>

//   <span
//     onClick={() => router.push("/explore")}
//     className="cursor-pointer hover:text-[#111] transition-colors"
//   >
//     {influencer?.categories?.[0]?.name || "Category"}
//   </span>

//   <span>{">"}</span>

//   <span className="text-[#111] cursor-pointer">
//     {influencer?.full_name || "Name"}
//   </span>
// </div>

//           {/* ONLY add props */}
//           <ProfileHeader influencer={influencer} />
//           <StatsSection influencer={influencer} />
//           <ExpertiseSection />

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
//             <ServicesSection />
//             <HighlightsSection />
//           </div>

//           <ReviewsSection />
//         </Container>
//       </Section>
//     </div>
//   );
// }

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

import { getInfluencers } from "@/services/api";
import { Influencer } from "@/types";

export default function ProfilePage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);

  const { data } = useSWR("influencers", getInfluencers);
  const influencer: Influencer | undefined = data?.find(
    (inf) => inf.id === id
  );

  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // 🔥 HANDLERS (DYNAMIC)
  const handleChat = () => {
    if (!influencer) return;
    router.push(`/chat/${influencer.id}`);
  };

  const handleCallClick = () => {
    if (!influencer) return;
    setIsBookingOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">

      {/* ✅ MODAL */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
    // 🔥 PASS DATA
      />

      {/* FLOATING BUTTONS (UI SAME) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4 z-50">
        {[MessageSquare, Phone, Video].map((Icon, i) => (
          <div
            key={i}
            onClick={
              i === 0
                ? handleChat
                : handleCallClick
            }
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

          {/* SECTIONS */}
          <ProfileHeader influencer={influencer} />
          <StatsSection influencer={influencer} />
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