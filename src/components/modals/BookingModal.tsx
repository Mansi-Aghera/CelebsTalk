"use client";

import { X, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DayType = "green" | "pink-solid" | "pink-light" | "purple-solid" | "empty";

const days: { date: number | null; type: DayType }[] = [
  { date: null, type: "empty" },
  { date: 1, type: "green" }, { date: 2, type: "green" }, { date: 3, type: "green" }, { date: 4, type: "pink-solid" }, { date: 5, type: "green" }, { date: 6, type: "green" },
  { date: 7, type: "green" }, { date: 8, type: "pink-solid" }, { date: 9, type: "pink-light" }, { date: 10, type: "green" }, { date: 11, type: "green" }, { date: 12, type: "green" }, { date: 13, type: "green" },
  { date: 14, type: "green" }, { date: 15, type: "pink-solid" }, { date: 16, type: "pink-light" }, { date: 17, type: "green" }, { date: 18, type: "green" }, { date: 19, type: "purple-solid" }, { date: 20, type: "green" },
  { date: 21, type: "green" }, { date: 22, type: "green" }, { date: 23, type: "pink-solid" }, { date: 24, type: "pink-light" }, { date: 25, type: "green" }, { date: 26, type: "green" }, { date: 27, type: "green" },
  { date: 28, type: "green" }, { date: 29, type: "green" }, { date: 30, type: "green" }, { date: 31, type: "green" },
];

const timeSlots = [
  { time: "10:00 AM", type: "pink-light" }, { time: "10:30 AM", type: "purple-solid" },
  { time: "10:00 AM", type: "pink-solid" }, { time: "11:30 AM", type: "green" },
  { time: "12:00 PM", type: "green" }, { time: "12:30 PM", type: "pink-solid" },
  { time: "01:00 PM", type: "green" }, { time: "01:30 PM", type: "green" },
  { time: "02:00 PM", type: "green" }, { time: "02:30 PM", type: "pink-light" },
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);

  // Reset to step 1 when the modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/20 backdrop-blur-sm p-4">
        {/* BACKDROP CLOSER */}
        <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

        {/* MODAL CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative bg-white rounded-[20px] shadow-[0px_8px_30px_rgba(0,0,0,0.08)] w-full max-w-[360px] overflow-hidden border border-[var(--booking-border)] flex flex-col"
        >
          {/* HEADER */}
          <div className="px-5 pt-5 pb-3">
            <div className="flex items-center justify-between">
              <h2 className="text-[18px] font-bold text-[var(--booking-text-dark)]">
                {step === 3 ? "Request sent" : "Booking a Slot"}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-[var(--booking-text-dark)] transition"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            {step < 3 && (
              <div className="mt-2 flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-[13px] text-[var(--booking-text-muted)] font-medium">
                    {step === 1 ? "Step 1 of 3: Select Date" : "Step 2 of 3: Select an available slot"}
                  </span>
                  <Info size={13} className="text-[var(--booking-text-light)]" />
                </div>
                {/* PROGRESS BAR */}
                <div className="mt-2 h-[2px] w-full bg-[var(--booking-progress-bg)] rounded-full overflow-hidden flex transition-all duration-300">
                  <div className={`h-full bg-[var(--booking-pink-solid-bg)] rounded-full relative z-10 transition-all duration-500 ${step === 1 ? 'w-1/3' : 'w-2/3'}`} />
                  <div className="h-[2px] bg-[var(--booking-progress-bg)] w-full absolute bottom-0 -z-10" />
                </div>
              </div>
            )}
          </div>

          {step < 3 && <div className="h-[1px] w-full bg-[var(--booking-border)] opacity-60" />}

          {/* DYNAMIC BODY */}
          <div className={`px-5 ${step === 3 ? "pb-5 pt-2" : "py-4"}`}>
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* MONTH SWITCHER */}
                <div className="flex items-center justify-between mb-4">
                  <button className="text-[var(--booking-text-light)] hover:text-[var(--booking-text-muted)]">
                    <ChevronLeft size={18} />
                  </button>
                  <h3 className="text-[15px] font-bold text-[var(--booking-text-dark)]">July 2026</h3>
                  <button className="text-[var(--booking-text-light)] hover:text-[var(--booking-text-muted)]">
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* WEEKDAYS */}
                <div className="grid grid-cols-7 gap-2 mb-2 text-center">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                    <div key={i} className="text-[12px] font-bold text-[var(--booking-text-dark)]">
                      {day}
                    </div>
                  ))}
                </div>

                {/* DAYS GRID */}
                <div className="grid grid-cols-7 gap-y-2 gap-x-1 sm:gap-x-2 text-center place-items-center">
                  {days.map((day, i) => {
                    if (day.type === "empty" || !day.date) {
                      return <div key={`empty-${i}`} className="w-8 h-8" />;
                    }

                    let styles = "bg-[var(--booking-green-bg)] text-[var(--booking-green-text)] hover:bg-[var(--booking-green-hover)]";
                    if (day.type === "pink-solid") styles = "bg-[var(--booking-pink-solid-bg)] text-white hover:bg-[var(--booking-pink-solid-hover)]";
                    if (day.type === "pink-light") styles = "bg-[var(--booking-pink-light-bg)] text-[var(--booking-pink-light-text)] hover:bg-[var(--booking-pink-light-hover)]";
                    if (day.type === "purple-solid") styles = "bg-[var(--booking-purple-solid-bg)] text-white hover:bg-[var(--booking-purple-solid-hover)]";

                    return (
                      <button
                        key={i}
                        className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-[13px] font-semibold transition-colors ${styles}`}
                      >
                        {day.date}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                {/* TIME SLOTS GRID */}
                <div className="grid grid-cols-2 gap-3 pb-2 pt-1">
                  {timeSlots.map((slot, i) => {
                    let styles = "bg-[var(--booking-green-bg)] text-[var(--booking-green-text)] hover:bg-[var(--booking-green-hover)]";
                    if (slot.type === "pink-solid") styles = "bg-[var(--booking-pink-solid-bg)] text-white hover:bg-[var(--booking-pink-solid-hover)]";
                    if (slot.type === "pink-light") styles = "bg-[var(--booking-pink-light-bg)] text-[var(--booking-pink-light-text)] hover:bg-[var(--booking-pink-light-hover)]";
                    if (slot.type === "purple-solid") styles = "bg-[var(--booking-purple-solid-bg)] text-white hover:bg-[var(--booking-purple-solid-hover)]";

                    return (
                      <button
                        key={i}
                        className={`w-full py-[10px] rounded-[10px] text-[13px] font-bold transition-all shadow-sm ${styles}`}
                      >
                        {slot.time}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center w-full"
              >
                {/* AVATAR & NAME */}
                <div className="mt-1 flex flex-col items-center">
                  <div className="w-[66px] h-[66px] rounded-full overflow-hidden shadow-[0px_4px_15px_rgba(0,0,0,0.06)] shrink-0 border-[3px] border-white">
                    <Image src="/images/hero/hero.png" alt="Jasmine" width={66} height={66} className="object-cover w-full h-full" />
                  </div>
                  <h3 className="text-[15px] font-bold mt-2 text-[var(--booking-text-dark)] leading-none">Jasmine</h3>
                  <p className="text-[11px] text-[var(--booking-text-light)] mt-1 tracking-wide">@jasmine_official02</p>
                </div>

                {/* PENDING CARD */}
                <div className="bg-[#fafafa] border border-[var(--booking-border)] rounded-[14px] p-5 mt-5 flex flex-col items-center text-center w-full shadow-sm">
                  <div className="bg-[var(--booking-pink-light-bg)] text-[var(--booking-pink-solid-hover)] px-[14px] py-[3px] rounded-full text-[10px] font-bold tracking-wide mb-3">
                    Pending
                  </div>
                  <h4 className="text-[15px] font-bold text-[var(--booking-text-dark)] mb-2 tracking-tight">
                    Your request is on its way!
                  </h4>
                  <p className="text-[12px] text-[var(--booking-text-muted)] leading-[18px]">
                    We sent your request to Jasmine and will notify you as soon as she responds. This may take a few moments.
                  </p>
                </div>

                {/* FOOTER BUTTONS IN STEP 3 */}
                <div className="flex items-center gap-3 mt-6 w-full">
                  <button
                    onClick={onClose}
                    className="flex-1 py-[10px] rounded-[10px] bg-[var(--booking-pink-light-bg)] text-[12px] md:text-[13px] font-bold text-[var(--booking-pink-solid-bg)] transition-colors hover:opacity-80"
                  >
                    Cancel Request
                  </button>
                  <button className="flex-1 py-[10px] rounded-[10px] border border-[var(--booking-purple-solid-bg)] bg-white text-[12px] md:text-[13px] font-bold text-[var(--booking-purple-solid-bg)] transition-colors hover:bg-[#faf5ff] shadow-sm">
                    View All Request
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {step < 3 && (
            <>
              <div className="h-[1px] w-full border-t border-dashed border-[var(--booking-border-dashed)] mt-2" />
              {/* FOOTER BUTTONS */}
              <div className="px-5 py-4 flex items-center gap-3 bg-white">
                <button
                  onClick={() => {
                    if (step > 1) {
                      setStep(step - 1);
                    } else {
                      onClose();
                    }
                  }}
                  className="flex-1 py-[10px] rounded-[12px] border border-[var(--booking-btn-border)] text-[14px] font-bold text-[var(--booking-text-muted)] transition-colors hover:bg-gray-50 bg-white"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (step < 3) {
                      setStep(step + 1);
                    }
                  }}
                  className="flex-1 py-[10px] rounded-[12px] bg-[var(--booking-pink-solid-bg)] text-[14px] font-bold text-white transition-colors hover:bg-[var(--booking-pink-solid-hover)] shadow-[0px_4px_10px_rgba(236,72,153,0.2)]"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
