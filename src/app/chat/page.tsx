"use client";

import { useState } from "react";
import { 
  MessageSquare, 
  Phone, 
  Video, 
  Search, 
  MoreVertical,
  FileSearch,
  Home
} from "lucide-react";
import { motion } from "framer-motion";
import { slideRight, staggerContainer, fadeUp } from "@/lib/animations";
import Link from "next/link";

// Mock Data representing the image provided
const CHAT_DATA = [
  { id: 1, name: "Elena Rodriguez", statusText: "5-min Video call", statusType: "Pending", color: "text-[var(--secondary-200)]" },
  { id: 2, name: "Elena Rodriguez", statusText: "5-min Video call", statusType: "Pending", color: "text-[var(--secondary-200)]" },
  { id: 3, name: "Elena Rodriguez", statusText: "5-min Video call", statusType: "Pending", color: "text-[var(--secondary-200)]" },
  { id: 4, name: "Marcus Thorne", statusText: "Chat : Tomorrow 8:AM", statusType: "Awaiting Response", color: "text-[var(--secondary-200)]" },
  { id: 5, name: "Chloe Addison", statusText: "10-min Video call", statusType: "Pending", color: "text-[var(--secondary-200)]" },
  { id: 6, name: "Javier Santos", statusText: "2-min chat", statusType: "Awaiting Response", color: "text-[var(--secondary-200)]" },
  { id: 7, name: "Javier Santos", statusText: "2-min chat", statusType: "Awaiting Response", color: "text-[var(--secondary-200)]" },
  { id: 8, name: "Javier Santos", statusText: "2-min chat", statusType: "Awaiting Response", color: "text-[var(--secondary-200)]" },
];

export default function ChatPage() {
  return (
    <div className="flex flex-col md:flex-row h-[100dvh] w-full -mt-[72px] bg-white overflow-hidden text-[var(--neutral-800)] relative z-[60]">
      
      {/* Container for Sidebars */}
      <div className="flex flex-col md:flex-row h-full w-full md:w-[420px] flex-shrink-0 border-r border-[var(--neutral-200)] shadow-sm bg-white z-10 relative">
        
        {/* Navigation Sidebar / Bottom Nav on Mobile */}
        <motion.div 
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="w-full h-[72px] md:h-full md:w-[72px] flex-shrink-0 flex flex-row md:flex-col items-center justify-around md:justify-start md:py-8 gap-0 md:gap-8 bg-white border-t md:border-t-0 md:border-r border-gray-100/50 order-last md:order-first pb-[env(safe-area-inset-bottom)] md:pb-0 z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] md:shadow-none"
        >
          {/* Mobile Home Navigation */}
          <Link href="/" className="md:hidden">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100 transition-all"
            >
              <Home size={22} strokeWidth={1.5} />
            </motion.div>
          </Link>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[42px] h-[42px] bg-[var(--primary-300)] rounded-[14px] flex items-center justify-center text-white shadow-sm cursor-pointer hover:bg-opacity-90 transition-all"
          >
            <MessageSquare size={20} fill="currentColor" />
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100 transition-all"
          >
            <Phone size={22} strokeWidth={1.5} />
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100 transition-all"
          >
            <Video size={22} strokeWidth={1.5} />
          </motion.div>

          {/* Mobile Explore Navigation */}
          <Link href="/explore" className="md:hidden">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100 transition-all"
            >
              <Search size={22} strokeWidth={1.5} />
            </motion.div>
          </Link>
        </motion.div>

        {/* Chats List Area */}
        <motion.div 
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col bg-white h-full overflow-hidden pt-[env(safe-area-inset-top)] md:pt-0"
        >
          <div className="px-5 pt-8 pb-4 flex-shrink-0">
             <h1 className="text-[22px] font-semibold mb-5">Chats</h1>
             <div className="flex items-center gap-2 bg-[var(--booking-pink-light-bg)] rounded-full px-4 py-2.5">
               <Search size={18} className="text-gray-500" />
               <input 
                 type="text"
                 placeholder="Search or start a new chat"
                 className="bg-transparent border-none outline-none text-[15px] w-full placeholder:text-gray-500 text-gray-800"
               />
             </div>
          </div>

          {/* List content */}
          <motion.div 
            className="flex-1 overflow-y-auto no-scrollbar pb-4 md:pb-20"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {CHAT_DATA.map((chat, i) => (
              <motion.div 
                key={chat.id + "-" + i}
                variants={fadeUp}
                className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 transition-colors group"
              >
                {/* Profile Image representation */}
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                  <img 
                    src={`https://i.pravatar.cc/150?u=${chat.id}`} 
                    alt={chat.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                {/* Chat Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[15px] text-gray-900 truncate">{chat.name}</h3>
                  <p className="text-[13px] text-gray-500 mt-0.5 truncate">{chat.statusText}</p>
                  <p className={`text-[12px] font-medium mt-1 ${chat.color}`}>{chat.statusType}</p>
                </div>

                {/* More Options */}
                <button className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <MoreVertical size={18} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content Area (Hidden on mobile) */}
      <motion.div 
        className="flex-1 hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-[var(--booking-pink-light-bg)] to-white relative"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          
          {/* Explore Button Placeholder */}
          <Link href="/explore">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-[120px] h-[120px] bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-pink-50 flex items-center justify-center mb-5 transition-all group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <FileSearch size={36} className="text-[var(--primary-300)]" strokeWidth={1.5} />
              </div>
              <span className="font-medium text-gray-600 group-hover:text-[var(--primary-300)] transition-colors">Explore</span>
            </motion.div>
          </Link>

          {/* Home Button Placeholder */}
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-[120px] h-[120px] bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-pink-50 flex items-center justify-center mb-5 transition-all group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <Home size={36} className="text-[var(--primary-300)]" strokeWidth={1.5} />
              </div>
              <span className="font-medium text-gray-600 group-hover:text-[var(--primary-300)] transition-colors">Home</span>
            </motion.div>
          </Link>

        </div>
      </motion.div>
    </div>
  );
}
