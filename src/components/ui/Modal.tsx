"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl" };

export default function Modal({ isOpen, onClose, title, children, className, size = "md" }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
    >
      <div
        className={cn(
          "relative w-full bg-white rounded-3xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200",
          sizes[size],
          className
        )}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-[#FFE8F5] hover:text-[#E91E8C] transition-colors"
        >
          <X size={18} />
        </button>

        {/* Title */}
        {title && (
          <h3 className="text-xl font-bold text-gray-900 mb-4 pr-8" style={{ fontFamily: "Poppins, sans-serif" }}>
            {title}
          </h3>
        )}

        {children}
      </div>
    </div>
  );
}