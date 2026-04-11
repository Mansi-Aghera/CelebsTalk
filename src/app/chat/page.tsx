// "use client";

// import { useState } from "react";
// import { 
//   MessageSquare, 
//   Phone, 
//   Video, 
//   Search, 
//   MoreVertical,
//   FileSearch,
//   Home
// } from "lucide-react";
// import { motion } from "framer-motion";
// import { slideRight, staggerContainer, fadeUp } from "@/lib/animations";
// import Link from "next/link";

// // Mock Data representing the image provided
// const CHAT_DATA = [
//   { id: 1, name: "Elena Rodriguez", statusText: "5-min Video call", statusType: "Pending", color: "text-[var(--secondary-200)]" },
//   { id: 2, name: "Elena Rodriguez", statusText: "5-min Video call", statusType: "Pending", color: "text-[var(--secondary-200)]" },
//   { id: 3, name: "Elena Rodriguez", statusText: "5-min Video call", statusType: "Pending", color: "text-[var(--secondary-200)]" },
//   { id: 4, name: "Marcus Thorne", statusText: "Chat : Tomorrow 8:AM", statusType: "Awaiting Response", color: "text-[var(--secondary-200)]" },
//   { id: 5, name: "Chloe Addison", statusText: "10-min Video call", statusType: "Pending", color: "text-[var(--secondary-200)]" },
//   { id: 6, name: "Javier Santos", statusText: "2-min chat", statusType: "Awaiting Response", color: "text-[var(--secondary-200)]" },
//   { id: 7, name: "Javier Santos", statusText: "2-min chat", statusType: "Awaiting Response", color: "text-[var(--secondary-200)]" },
//   { id: 8, name: "Javier Santos", statusText: "2-min chat", statusType: "Awaiting Response", color: "text-[var(--secondary-200)]" },
// ];

// export default function ChatPage() {
//   return (
//     <div className="flex flex-col md:flex-row h-[100dvh] w-full -mt-[72px] bg-white overflow-hidden text-[var(--neutral-800)] relative z-[60]">
      
//       {/* Container for Sidebars */}
//       <div className="flex flex-col md:flex-row h-full w-full md:w-[420px] flex-shrink-0 border-r border-[var(--neutral-200)] shadow-sm bg-white z-10 relative">
        
//         {/* Navigation Sidebar / Bottom Nav on Mobile */}
//         <motion.div 
//           variants={slideRight}
//           initial="hidden"
//           animate="visible"
//           className="w-full h-[72px] md:h-full md:w-[72px] flex-shrink-0 flex flex-row md:flex-col items-center justify-around md:justify-start md:py-8 gap-0 md:gap-8 bg-white border-t md:border-t-0 md:border-r border-gray-100/50 order-last md:order-first pb-[env(safe-area-inset-bottom)] md:pb-0 z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] md:shadow-none"
//         >
//           {/* Mobile Home Navigation */}
//           <Link href="/" className="md:hidden">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100 transition-all"
//             >
//               <Home size={22} strokeWidth={1.5} />
//             </motion.div>
//           </Link>

//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-[42px] h-[42px] bg-[var(--primary-300)] rounded-[14px] flex items-center justify-center text-white shadow-sm cursor-pointer hover:bg-opacity-90 transition-all"
//           >
//             <MessageSquare size={20} fill="currentColor" />
//           </motion.div>

//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100 transition-all"
//           >
//             <Phone size={22} strokeWidth={1.5} />
//           </motion.div>

//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100 transition-all"
//           >
//             <Video size={22} strokeWidth={1.5} />
//           </motion.div>

//           {/* Mobile Explore Navigation */}
//           <Link href="/explore" className="md:hidden">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100 transition-all"
//             >
//               <Search size={22} strokeWidth={1.5} />
//             </motion.div>
//           </Link>
//         </motion.div>

//         {/* Chats List Area */}
//         <motion.div 
//           variants={slideRight}
//           initial="hidden"
//           animate="visible"
//           className="flex-1 flex flex-col bg-white h-full overflow-hidden pt-[env(safe-area-inset-top)] md:pt-0"
//         >
//           <div className="px-5 pt-8 pb-4 flex-shrink-0">
//              <h1 className="text-[22px] font-semibold mb-5">Chats</h1>
//              <div className="flex items-center gap-2 bg-[var(--booking-pink-light-bg)] rounded-full px-4 py-2.5">
//                <Search size={18} className="text-gray-500" />
//                <input 
//                  type="text"
//                  placeholder="Search or start a new chat"
//                  className="bg-transparent border-none outline-none text-[15px] w-full placeholder:text-gray-500 text-gray-800"
//                />
//              </div>
//           </div>

//           {/* List content */}
//           <motion.div 
//             className="flex-1 overflow-y-auto no-scrollbar pb-4 md:pb-20"
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//           >
//             {CHAT_DATA.map((chat, i) => (
//               <motion.div 
//                 key={chat.id + "-" + i}
//                 variants={fadeUp}
//                 className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 transition-colors group"
//               >
//                 {/* Profile Image representation */}
//                 <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
//                   <img 
//                     src={`https://i.pravatar.cc/150?u=${chat.id}`} 
//                     alt={chat.name}
//                     className="w-full h-full object-cover"
//                     onError={(e) => { e.currentTarget.style.display = 'none'; }}
//                   />
//                 </div>

//                 {/* Chat Details */}
//                 <div className="flex-1 min-w-0">
//                   <h3 className="font-semibold text-[15px] text-gray-900 truncate">{chat.name}</h3>
//                   <p className="text-[13px] text-gray-500 mt-0.5 truncate">{chat.statusText}</p>
//                   <p className={`text-[12px] font-medium mt-1 ${chat.color}`}>{chat.statusType}</p>
//                 </div>

//                 {/* More Options */}
//                 <button className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 opacity-0 md:group-hover:opacity-100 transition-opacity">
//                   <MoreVertical size={18} />
//                 </button>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Main Content Area (Hidden on mobile) */}
//       <motion.div 
//         className="flex-1 hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-[var(--booking-pink-light-bg)] to-white relative"
//         variants={fadeUp}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          
//           {/* Explore Button Placeholder */}
//           <Link href="/explore">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex flex-col items-center cursor-pointer group"
//             >
//               <div className="w-[120px] h-[120px] bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-pink-50 flex items-center justify-center mb-5 transition-all group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
//                 <FileSearch size={36} className="text-[var(--primary-300)]" strokeWidth={1.5} />
//               </div>
//               <span className="font-medium text-gray-600 group-hover:text-[var(--primary-300)] transition-colors">Explore</span>
//             </motion.div>
//           </Link>

//           {/* Home Button Placeholder */}
//           <Link href="/">
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex flex-col items-center cursor-pointer group"
//             >
//               <div className="w-[120px] h-[120px] bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-pink-50 flex items-center justify-center mb-5 transition-all group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
//                 <Home size={36} className="text-[var(--primary-300)]" strokeWidth={1.5} />
//               </div>
//               <span className="font-medium text-gray-600 group-hover:text-[var(--primary-300)] transition-colors">Home</span>
//             </motion.div>
//           </Link>

//         </div>
//       </motion.div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  Phone,
  Video,
  Search,
  MoreVertical,
  FileSearch,
  Home,
  Send,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { slideRight, staggerContainer, fadeUp } from "@/lib/animations";
import Link from "next/link";
import { getChats, getMessages, sendMessage } from "@/lib/chatService";
import { startCall } from "@/lib/callService";
import { useRouter } from "next/navigation";

// 🔁 Replace with your real logged-in user ID from auth/context
const MY_USER_ID = 13;

export default function ChatPage() {
  const router = useRouter();
  const [chats, setChats] = useState<any[]>([]);
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<any>(null);

  // Load chat list
  useEffect(() => {
    fetchChats();
  }, []);

  // Poll messages every 3 seconds when chat is open
  useEffect(() => {
    if (selectedChat) {
      fetchMessages(selectedChat);
      pollRef.current = setInterval(() => fetchMessages(selectedChat), 3000);
    }
    return () => clearInterval(pollRef.current);
  }, [selectedChat]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchChats = async () => {
    try {
      const data = await getChats(MY_USER_ID);
      setChats(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to load chats:", err);
      setChats([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (chat: any) => {
    try {
      const data = await getMessages(String(MY_USER_ID));
      // Filter messages between this user and selected chat partner
      const filtered = Array.isArray(data)
        ? data.filter(
            (m: any) =>
              (m.sender_id == MY_USER_ID && m.receiver_id == chat.id) ||
              (m.sender_id == chat.id && m.receiver_id == MY_USER_ID)
          )
        : [];
      setMessages(filtered);
    } catch (err) {
      console.error("Failed to load messages:", err);
    }
  };

  const handleSend = async () => {
    if (!newMessage.trim() || !selectedChat || sending) return;
    setSending(true);
    try {
      await sendMessage(MY_USER_ID, selectedChat.id, newMessage.trim());
      setNewMessage("");
      await fetchMessages(selectedChat);
    } catch (err) {
      console.error("Send failed:", err);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAudioCall = async () => {
    if (!selectedChat) return;
    const { channelName } = await startCall(MY_USER_ID, selectedChat.id, "audio");
    router.push(`/call?channel=${channelName}&mode=caller&type=audio`);
  };

  const handleVideoCall = async () => {
    if (!selectedChat) return;
    const { channelName } = await startCall(MY_USER_ID, selectedChat.id, "video");
    router.push(`/call?channel=${channelName}&mode=caller&type=video`);
  };

  // Get display name from chat object (adjust keys based on actual API response)
  const getChatName = (chat: any) =>
    chat.name || chat.influencer_name || chat.user_name || `User ${chat.id}`;

  const getChatAvatar = (chat: any) =>
    chat.avatar || chat.profile_image || `https://i.pravatar.cc/150?u=${chat.id}`;

  const getLastMessage = (chat: any) =>
    chat.last_message || chat.statusText || "No messages yet";

  return (
    <div className="flex flex-col md:flex-row h-[100dvh] w-full -mt-[72px] bg-white overflow-hidden text-[var(--neutral-800)] relative z-[60]">

      {/* LEFT SIDEBAR */}
      <div className="flex flex-col md:flex-row h-full w-full md:w-[420px] flex-shrink-0 border-r border-[var(--neutral-200)] shadow-sm bg-white z-10 relative">

        {/* Nav Icons */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="w-full h-[72px] md:h-full md:w-[72px] flex-shrink-0 flex flex-row md:flex-col items-center justify-around md:justify-start md:py-8 gap-0 md:gap-8 bg-white border-t md:border-t-0 md:border-r border-gray-100/50 order-last md:order-first pb-[env(safe-area-inset-bottom)] md:pb-0 z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] md:shadow-none"
        >
          <Link href="/" className="md:hidden">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100 transition-all">
              <Home size={22} strokeWidth={1.5} />
            </motion.div>
          </Link>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="w-[42px] h-[42px] bg-[var(--primary-300)] rounded-[14px] flex items-center justify-center text-white shadow-sm cursor-pointer">
            <MessageSquare size={20} fill="currentColor" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={handleAudioCall}
            className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100 transition-all">
            <Phone size={22} strokeWidth={1.5} />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={handleVideoCall}
            className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100 transition-all">
            <Video size={22} strokeWidth={1.5} />
          </motion.div>

          <Link href="/explore" className="md:hidden">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="w-[42px] h-[42px] rounded-[14px] flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-100 transition-all">
              <Search size={22} strokeWidth={1.5} />
            </motion.div>
          </Link>
        </motion.div>

        {/* Chat List */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className={`flex-1 flex flex-col bg-white h-full overflow-hidden pt-[env(safe-area-inset-top)] md:pt-0 ${selectedChat ? "hidden md:flex" : "flex"}`}
        >
          <div className="px-5 pt-8 pb-4 flex-shrink-0">
            <h1 className="text-[22px] font-semibold mb-5">Chats</h1>
            <div className="flex items-center gap-2 bg-[var(--booking-pink-light-bg)] rounded-full px-4 py-2.5">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search or start a new chat"
                className="bg-transparent border-none outline-none text-[15px] w-full placeholder:text-gray-500 text-gray-800"
                suppressHydrationWarning
           />
            </div>
          </div>

          <motion.div
            className="flex-1 overflow-y-auto no-scrollbar pb-4 md:pb-20"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {loading ? (
              <div className="flex items-center justify-center h-40 text-gray-400 text-sm">
                Loading chats...
              </div>
            ) : chats.length === 0 ? (
              <div className="flex items-center justify-center h-40 text-gray-400 text-sm">
                No chats yet
              </div>
            ) : (
              chats.map((chat, i) => (
                <motion.div
                  key={chat.id || i}
                  variants={fadeUp}
                  onClick={() => setSelectedChat(chat)}
                  className={`flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 transition-colors group ${selectedChat?.id === chat.id ? "bg-gray-50" : ""}`}
                >
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                    <img
                      src={getChatAvatar(chat)}
                      alt={getChatName(chat)}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[15px] text-gray-900 truncate">{getChatName(chat)}</h3>
                    <p className="text-[13px] text-gray-500 mt-0.5 truncate">{getLastMessage(chat)}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <MoreVertical size={18} />
                  </button>
                </motion.div>
              ))
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* MAIN CHAT AREA */}
      {selectedChat ? (
        <div className="flex-1 flex flex-col bg-white h-full overflow-hidden">

          {/* Chat Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-white flex-shrink-0 shadow-sm">
            <button onClick={() => setSelectedChat(null)} className="md:hidden mr-1">
              <ArrowLeft size={22} className="text-gray-600" />
            </button>
            <img
              src={getChatAvatar(selectedChat)}
              alt={getChatName(selectedChat)}
              className="w-10 h-10 rounded-full object-cover bg-gray-200"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <div className="flex-1">
              <h2 className="font-semibold text-[16px] text-gray-900">{getChatName(selectedChat)}</h2>
              <p className="text-[12px] text-green-500">Online</p>
            </div>
            {/* Call buttons in header */}
            <button onClick={handleAudioCall} className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors">
              <Phone size={18} />
            </button>
            <button onClick={handleVideoCall} className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors">
              <Video size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 no-scrollbar">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                No messages yet. Say hello! 👋
              </div>
            ) : (
              messages.map((msg: any, i: number) => {
                const isMine = msg.sender_id == MY_USER_ID;
                return (
                  <div key={msg.id || i} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-[14px] ${
                      isMine
                        ? "bg-[var(--primary-300)] text-white rounded-br-sm"
                        : "bg-gray-100 text-gray-800 rounded-bl-sm"
                    }`}>
                      <p>{msg.message || msg.text || msg.content}</p>
                      <p className={`text-[10px] mt-1 ${isMine ? "text-white/70" : "text-gray-400"}`}>
                        {msg.created_at
                          ? new Date(msg.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                          : ""}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="px-5 py-4 border-t border-gray-100 bg-white flex-shrink-0">
            <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2.5 border border-gray-200">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 bg-transparent border-none outline-none text-[15px] text-gray-800 placeholder:text-gray-400"
              suppressHydrationWarning
              />
              <button
                onClick={handleSend}
                disabled={!newMessage.trim() || sending}
                className="w-9 h-9 bg-[var(--primary-300)] rounded-full flex items-center justify-center text-white disabled:opacity-50 transition-opacity flex-shrink-0"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Empty State — desktop only */
        <motion.div
          className="flex-1 hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-[var(--booking-pink-light-bg)] to-white relative"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
            <Link href="/explore">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center cursor-pointer group">
                <div className="w-[120px] h-[120px] bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-pink-50 flex items-center justify-center mb-5 transition-all group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <FileSearch size={36} className="text-[var(--primary-300)]" strokeWidth={1.5} />
                </div>
                <span className="font-medium text-gray-600 group-hover:text-[var(--primary-300)] transition-colors">Explore</span>
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center cursor-pointer group">
                <div className="w-[120px] h-[120px] bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-pink-50 flex items-center justify-center mb-5 transition-all group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                  <Home size={36} className="text-[var(--primary-300)]" strokeWidth={1.5} />
                </div>
                <span className="font-medium text-gray-600 group-hover:text-[var(--primary-300)] transition-colors">Home</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}