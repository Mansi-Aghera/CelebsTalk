"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Video, ArrowLeft, Send } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { getMessages, sendMessage } from "@/lib/chatService";
import { startCall } from "@/lib/callService";

// 🔁 Replace with your real logged-in user ID
const MY_USER_ID = 13;

export default function ChatDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<any>(null);

  useEffect(() => {
    fetchMessages();
    pollRef.current = setInterval(fetchMessages, 3000);
    return () => clearInterval(pollRef.current);
  }, [id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const data = await getMessages(String(MY_USER_ID));
      const filtered = Array.isArray(data)
        ? data.filter(
            (m: any) =>
              (m.sender_id == MY_USER_ID && m.receiver_id == id) ||
              (m.sender_id == id && m.receiver_id == MY_USER_ID)
          )
        : [];
      setMessages(filtered);
    } catch (err) {
      console.error("Failed to load messages:", err);
    }
  };

  const handleSend = async () => {
    if (!newMessage.trim() || sending) return;
    setSending(true);
    try {
      await sendMessage(MY_USER_ID, Number(id), newMessage.trim());
      setNewMessage("");
      await fetchMessages();
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
    const { channelName } = await startCall(MY_USER_ID, Number(id), "audio");
    router.push(`/call?channel=${channelName}&mode=caller&type=audio`);
  };

  const handleVideoCall = async () => {
    const { channelName } = await startCall(MY_USER_ID, Number(id), "video");
    router.push(`/call?channel=${channelName}&mode=caller&type=video`);
  };

  return (
    <div className="flex flex-col h-[100dvh] w-full bg-white overflow-hidden">

      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-white flex-shrink-0 shadow-sm">
        <button onClick={() => router.back()} className="mr-1">
          <ArrowLeft size={22} className="text-gray-600" />
        </button>
        <img
          src={`https://i.pravatar.cc/150?u=${id}`}
          alt="User"
          className="w-10 h-10 rounded-full object-cover bg-gray-200"
        />
        <div className="flex-1">
          <h2 className="font-semibold text-[16px] text-gray-900">User {id}</h2>
          <p className="text-[12px] text-green-500">Online</p>
        </div>
        <button
          onClick={handleAudioCall}
          className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors"
        >
          <Phone size={18} />
        </button>
        <button
          onClick={handleVideoCall}
          className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors"
        >
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

      {/* Input */}
      <div className="px-5 py-4 border-t border-gray-100 bg-white flex-shrink-0">
        <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2.5 border border-gray-200">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 bg-transparent border-none outline-none text-[15px] text-gray-800 placeholder:text-gray-400"
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
  );
}