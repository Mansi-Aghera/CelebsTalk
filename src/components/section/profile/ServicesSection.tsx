"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Instagram, Youtube, Video } from "lucide-react";

type ServiceType = "pink" | "purple";

const services: { name: string; icon: React.ReactNode; type: ServiceType }[] = [
  { name: "Birthday Wises", icon: <Video size={24} strokeWidth={1.5} />, type: "pink" },
  { name: "Instagram Story", icon: <Instagram size={24} strokeWidth={1.5} />, type: "purple" },
  { name: "Birthday Wises", icon: <Youtube size={24} strokeWidth={1.5} />, type: "pink" },
  { name: "Instagram Story", icon: <Instagram size={24} strokeWidth={1.5} />, type: "purple" },
  { name: "Birthday Wises", icon: <Video size={24} strokeWidth={1.5} />, type: "pink" },
  
  { name: "Birthday Wises", icon: <Video size={24} strokeWidth={1.5} />, type: "pink" },
  { name: "Instagram Story", icon: <Instagram size={24} strokeWidth={1.5} />, type: "purple" },
  { name: "Birthday Wises", icon: <Youtube size={24} strokeWidth={1.5} />, type: "pink" },
  { name: "Instagram Story", icon: <Instagram size={24} strokeWidth={1.5} />, type: "purple" },
  { name: "Birthday Wises", icon: <Video size={24} strokeWidth={1.5} />, type: "pink" },
];

export default function ServicesSection() {
  return (
    <motion.div 
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="h-full flex flex-col"
    >
      <h3 className="text-[16px] font-bold mb-3 text-[#1e1e1e]">
        Services
      </h3>

      <div className="bg-white border border-[#eaeaea] rounded-[16px] md:rounded-[24px] p-4 md:p-5 lg:p-6 shadow-[0px_2px_15px_rgba(0,0,0,0.02)] flex-1">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-y-5 md:gap-y-7 gap-x-2">
          {services.map((item, i) => {
            const isPink = item.type === "pink";
            
            const circleBg = isPink ? "bg-[#ffe8f0]" : "bg-[#f2e8ff]";
            const circleText = isPink ? "text-[#ff4b82]" : "text-[#9d4edd]";
            
            const pillBg = isPink ? "bg-[#f2e8ff]" : "bg-[#ffe8f0]";
            const pillText = isPink ? "text-[#873ec8]" : "text-[#eb4279]";

            return (
              <div
                key={i}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* ICON CIRCLE */}
                <div className={`w-[64px] h-[64px] rounded-full flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:shadow-[0px_8px_16px_rgba(0,0,0,0.06)] z-10 ${circleBg} ${circleText}`}>
                  {item.icon}
                </div>

                {/* TEXT PILL */}
                <div className={`-mt-4 z-20 px-2 py-[4px] rounded-[10px] text-[10px] sm:text-[11px] font-semibold leading-[12px] text-center w-[74px] flex items-center justify-center min-h-[32px] transition-all duration-300 ease-out group-hover:translate-y-1 group-hover:shadow-sm ${pillBg} ${pillText}`}>
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}