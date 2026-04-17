"use client";

import { X, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { createInfluencerSlot } from "@/services/api";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  influencer?: any;
}

export default function BookingModal({ isOpen, onClose, influencer }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("celebstalk_user");
      if (stored) {
        try {
          setCurrentUser(JSON.parse(stored));
        } catch (e) {
          console.error("Invalid user data");
        }
      }
    }
  }, []);

  // Reset to step 1 when the modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSelectedDate(null);
      setStartTime("");
      setEndTime("");
      setErrorMsg("");
      setLoading(false);
      setCurrentDate(new Date());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Calendar Helpers
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Convert "13:30" -> "01:30 PM"
  const formatTimeTo12Hour = (time24: string) => {
    if (!time24) return "";
    let [hours, minutes] = time24.split(":");
    let h = parseInt(hours, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    const formatH = h < 10 ? `0${h}` : h;
    return `${formatH}:${minutes} ${ampm}`;
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!selectedDate) {
        setErrorMsg("Please select a date first.");
        return;
      }
      setErrorMsg("");
      setStep(2);
    } else if (step === 2) {
      submitBooking();
    }
  };

  const submitBooking = async () => {
    if (!startTime || !endTime) {
      setErrorMsg("Please select both start and end time.");
      return;
    }

    if (startTime >= endTime) {
      setErrorMsg("End time must be later than start time.");
      return;
    }

    if (!selectedDate) {
      setErrorMsg("Please select a date.");
      return;
    }

    if (!currentUser) {
      setErrorMsg("You must be logged in to book.");
      return;
    }

    if (!influencer) {
      setErrorMsg("Influencer data is missing.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    const dayName = selectedDate.toLocaleDateString("en-US", { weekday: "long" });

    const payload = {
      influencer: influencer.influencer_id || influencer.email,
      booked_by: currentUser.email || currentUser.id || currentUser.user_id,
      day: dayName,
      start_time: formatTimeTo12Hour(startTime),
      end_time: formatTimeTo12Hour(endTime),
    };

    try {
      await createInfluencerSlot(payload);
      setStep(3); // Success!
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "This time is already taken — please choose another available slot.");
    } finally {
      setLoading(false);
    }
  };

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
                    {step === 1 ? "Step 1 of 3: Select Date" : "Step 2 of 3: Select Duration"}
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
                  <button onClick={handlePrevMonth} className="text-[var(--booking-text-light)] hover:text-[var(--booking-text-muted)]">
                    <ChevronLeft size={18} />
                  </button>
                  <h3 className="text-[15px] font-bold text-[var(--booking-text-dark)]">
                    {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </h3>
                  <button onClick={handleNextMonth} className="text-[var(--booking-text-light)] hover:text-[var(--booking-text-muted)]">
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
                  {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                    <div key={`empty-${i}`} className="w-8 h-8" />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const d = i + 1;
                    const dateObj = new Date(year, month, d);
                    const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                    const isSelected = selectedDate?.getDate() === d && selectedDate?.getMonth() === month && selectedDate?.getFullYear() === year;
                    
                    let styles = isPast 
                      ? "text-gray-300 cursor-not-allowed" 
                      : isSelected 
                      ? "bg-[var(--booking-pink-solid-bg)] text-white shadow-md font-bold" 
                      : "bg-[var(--booking-green-bg)] text-[var(--booking-green-text)] hover:bg-[var(--booking-green-hover)]";

                    return (
                      <button
                        key={d}
                        disabled={isPast}
                        onClick={() => setSelectedDate(dateObj)}
                        className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-[13px] transition-colors ${styles}`}
                      >
                        {d}
                      </button>
                    );
                  })}
                </div>
                {errorMsg && (
                   <p className="text-red-500 text-xs mt-3 text-center">{errorMsg}</p>
                )}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col gap-4"
              >
                <div className="text-sm text-[var(--booking-text-dark)] font-medium text-center">
                  Selected Date: <span className="font-bold text-[var(--booking-pink-solid-bg)]">{selectedDate?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</span>
                </div>

                <div className="flex flex-col gap-3 pb-2 pt-1">
                  <div className="flex flex-col">
                    <label className="text-xs font-semibold text-[var(--booking-text-muted)] mb-1 uppercase tracking-wide">Start Time</label>
                    <input 
                      type="time" 
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-full py-2 px-3 rounded-lg border border-[var(--booking-border)] text-sm font-medium focus:outline-none focus:border-[var(--booking-pink-solid-bg)] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs font-semibold text-[var(--booking-text-muted)] mb-1 uppercase tracking-wide">End Time</label>
                    <input 
                      type="time" 
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-full py-2 px-3 rounded-lg border border-[var(--booking-border)] text-sm font-medium focus:outline-none focus:border-[var(--booking-pink-solid-bg)] transition-colors"
                    />
                  </div>
                </div>

                {errorMsg && (
                  <p className="text-red-500 text-xs font-medium text-center bg-red-50 p-2 rounded-lg border border-red-100">{errorMsg}</p>
                )}
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
                    {influencer?.image ? (
                        <img src={influencer.image} alt={influencer.full_name} className="object-cover w-full h-full" />
                    ) : (
                        <div className="w-full h-full bg-gray-200"></div>
                    )}
                  </div>
                  <h3 className="text-[15px] font-bold mt-2 text-[var(--booking-text-dark)] leading-none">{influencer?.full_name || "Influencer"}</h3>
                  <p className="text-[11px] text-[var(--booking-text-light)] mt-1 tracking-wide">@{influencer?.influencer_id || "username"}</p>
                </div>

                {/* PENDING CARD */}
                <div className="bg-[#fafafa] border border-[var(--booking-border)] rounded-[14px] p-5 mt-5 flex flex-col items-center text-center w-full shadow-sm">
                  <div className="bg-[var(--booking-pink-light-bg)] text-[var(--booking-pink-solid-hover)] px-[14px] py-[3px] rounded-full text-[10px] font-bold tracking-wide mb-3">
                    Success
                  </div>
                  <h4 className="text-[15px] font-bold text-[var(--booking-text-dark)] mb-2 tracking-tight">
                    Your slot is created!
                  </h4>
                  <p className="text-[12px] text-[var(--booking-text-muted)] leading-[18px]">
                    We successfully registered your slot with {influencer?.full_name || "them"}. You will be notified of any updates.
                  </p>
                </div>

                {/* FOOTER BUTTONS IN STEP 3 */}
                <div className="flex items-center gap-3 mt-6 w-full">
                  <button
                    onClick={onClose}
                    className="flex-1 py-[10px] rounded-[10px] bg-[var(--booking-pink-solid-bg)] text-[12px] md:text-[13px] font-bold text-white transition-colors hover:bg-[var(--booking-pink-solid-hover)] shadow-sm"
                  >
                    Done
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
                      setErrorMsg("");
                    } else {
                      onClose();
                    }
                  }}
                  className="flex-1 py-[10px] rounded-[12px] border border-[var(--booking-btn-border)] text-[14px] font-bold text-[var(--booking-text-muted)] transition-colors hover:bg-gray-50 bg-white"
                >
                  {step === 1 ? "Cancel" : "Back"}
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={loading}
                  className="flex-1 py-[10px] rounded-[12px] bg-[var(--booking-pink-solid-bg)] text-[14px] font-bold text-white transition-colors hover:bg-[var(--booking-pink-solid-hover)] shadow-[0px_4px_10px_rgba(236,72,153,0.2)] disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : null}
                  {step === 2 ? "Book Slot" : "Next"}
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
