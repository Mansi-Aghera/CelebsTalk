"use client";

import { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Phone,
  Video,
  CheckCircle2,
  CalendarDays,
  Clock,
} from "lucide-react";

import { createSlotBooking } from "@/services/api";

type BookingType = "chat" | "audio_call" | "video_call";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  influencer?: any;
  userBookings?: any[];
  influencerSlots?: any[];
  loadingSlots?: boolean;
  bookingType?: BookingType;
}

const BOOKING_META: Record<
  BookingType,
  { label: string; Icon: typeof MessageSquare; color: string; bg: string }
> = {
  chat: {
    label: "Chat",
    Icon: MessageSquare,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200",
  },
  audio_call: {
    label: "Audio Call",
    Icon: Phone,
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-200",
  },
  video_call: {
    label: "Video Call",
    Icon: Video,
    color: "text-pink-600",
    bg: "bg-pink-50 border-pink-200",
  },
};

const DAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function formatDateKey(date: Date): string {
  return `${String(date.getDate()).padStart(2, "0")}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${date.getFullYear()}`;
}

export default function BookingModal({
  isOpen,
  onClose,
  influencer,
  userBookings = [],
  influencerSlots = [],
  loadingSlots = false,
  bookingType = "video_call",
}: Props) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSelectedDate(null);
      setSelectedSlot(null);
      setCurrentDate(new Date());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const meta = BOOKING_META[bookingType];
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Dates the user already booked (any type) — show in pink
  const bookedDateKeys = new Set(
    userBookings.map((b) => b.booked_date as string)
  );

  // Slot IDs the user already booked on the selected date
  const bookedSlotIdsOnSelectedDate = new Set(
    userBookings
      .filter(
        (b) => selectedDate && b.booked_date === formatDateKey(selectedDate)
      )
      .map((b) => Number(b.slot_data))
  );

  const selectedDay = selectedDate?.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const slotsForDay =
    influencerSlots
      ?.filter(
        (item: any) =>
          item?.day?.toLowerCase() === selectedDay?.toLowerCase()
      )
      ?.flatMap((item: any) => item?.slots || [])
      ?.filter(
        (slot: any) => slot?.is_booked === false && slot?.is_pause === false
      ) || [];

  const isPast = (date: Date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d < today;
  };

  const submitBooking = async () => {
    if (!selectedDate || !selectedSlot) return;

    const stored = localStorage.getItem("celebstalk_user");
    const user = stored ? JSON.parse(stored) : null;

    const payload = {
      influencer_data: String(influencer?.influencer_id || ""),
      user_data: String(user?.email || ""),
      slot_data: Number(selectedSlot?.id),
      booking_type: bookingType,
      booking_status: "confirmed",
      service_data: [1],
      service_charge: 2000,
      booked_date: formatDateKey(selectedDate),
    };

    try {
      setLoading(true);
      await createSlotBooking(payload);
      setStep(3);
    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-end sm:items-center p-0 sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-2xl w-full max-w-md shadow-xl overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border ${meta.bg}`}
            >
              <meta.Icon size={15} className={meta.color} strokeWidth={2} />
            </div>
            <div>
              <h2 className="font-semibold text-[15px] text-gray-900 leading-none">
                Book {meta.label}
              </h2>
              {influencer?.full_name && (
                <p className="text-[12px] text-gray-400 mt-0.5">
                  with {influencer.full_name}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X size={16} className="text-gray-500" />
          </button>
        </div>

        {/* STEP INDICATOR */}
        {step < 3 && (
          <div className="flex items-center gap-1.5 px-5 py-3 bg-gray-50 border-b border-gray-100">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-1.5">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold transition-colors
                  ${
                    step >= s
                      ? "bg-pink-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s}
                </div>
                <span
                  className={`text-[12px] font-medium ${
                    step >= s ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {s === 1 ? "Pick Date" : "Pick Slot"}
                </span>
                {s < 2 && (
                  <div
                    className={`w-8 h-px mx-1 ${
                      step > s ? "bg-pink-400" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        <div className="p-5">
          {/* ───────── STEP 1 – CALENDAR ───────── */}
          {step === 1 && (
            <>
              {loadingSlots ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500" />
                  <p className="text-sm text-gray-400">Loading slots…</p>
                </div>
              ) : (
                <>
                  {/* MONTH NAV */}
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={() =>
                        setCurrentDate(new Date(year, month - 1, 1))
                      }
                      className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <ChevronLeft size={18} className="text-gray-600" />
                    </button>
                    <h3 className="font-semibold text-[15px] text-gray-800">
                      {currentDate.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </h3>
                    <button
                      onClick={() =>
                        setCurrentDate(new Date(year, month + 1, 1))
                      }
                      className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <ChevronRight size={18} className="text-gray-600" />
                    </button>
                  </div>

                  {/* DAY HEADERS */}
                  <div className="grid grid-cols-7 mb-2">
                    {DAYS_SHORT.map((d) => (
                      <div
                        key={d}
                        className="text-center text-[11px] font-semibold text-gray-400 py-1"
                      >
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* LEGEND */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-pink-500" />
                      <span className="text-[11px] text-gray-500">
                        Already booked
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-green-200" />
                      <span className="text-[11px] text-gray-500">
                        Available
                      </span>
                    </div>
                  </div>

                  {/* DATES GRID */}
                  <div className="grid grid-cols-7 gap-y-1.5">
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}

                    {Array.from({ length: totalDays }).map((_, i) => {
                      const d = i + 1;
                      const date = new Date(year, month, d);
                      const dateKey = formatDateKey(date);
                      const past = isPast(date);
                      const alreadyBooked = bookedDateKeys.has(dateKey);
                      const isSelected =
                        selectedDate?.getDate() === d &&
                        selectedDate?.getMonth() === month &&
                        selectedDate?.getFullYear() === year;

                      return (
                        <button
                          key={d}
                          disabled={past}
                          onClick={() => {
                            setSelectedDate(date);
                            setSelectedSlot(null);
                          }}
                          className={`
                            relative mx-auto w-9 h-9 rounded-full text-[13px] font-medium
                            flex items-center justify-center transition-all duration-150
                            ${past ? "opacity-30 cursor-not-allowed text-gray-400" : ""}
                            ${
                              !past && alreadyBooked
                                ? "bg-pink-500 text-white"
                                : !past
                                ? "bg-green-100 text-green-800 hover:bg-green-200"
                                : ""
                            }
                            ${
                              isSelected
                                ? "ring-2 ring-offset-1 ring-pink-500 scale-110"
                                : ""
                            }
                          `}
                        >
                          {d}
                        </button>
                      );
                    })}
                  </div>

                  {/* SELECTED DATE SUMMARY */}
                  {selectedDate && (
                    <div className="mt-4 flex items-center gap-2 bg-pink-50 border border-pink-100 rounded-xl px-3 py-2">
                      <CalendarDays size={14} className="text-pink-500 shrink-0" />
                      <p className="text-[13px] text-pink-700 font-medium">
                        {selectedDate.toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => setStep(2)}
                    disabled={!selectedDate}
                    className="mt-4 w-full bg-pink-500 disabled:bg-gray-200 disabled:text-gray-400 text-white py-3 rounded-xl font-semibold text-[14px] transition-colors"
                  >
                    View Available Slots
                  </button>
                </>
              )}
            </>
          )}

          {/* ───────── STEP 2 – SLOTS ───────── */}
          {step === 2 && (
            <>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={15} className="text-gray-400 shrink-0" />
                <h3 className="font-semibold text-[14px] text-gray-700">
                  {selectedDay},{" "}
                  {selectedDate?.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </h3>
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {slotsForDay.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 gap-2 text-gray-400">
                    <Clock size={28} strokeWidth={1.5} />
                    <p className="text-sm">No available slots on this day</p>
                    <button
                      onClick={() => setStep(1)}
                      className="mt-1 text-[13px] text-pink-500 underline underline-offset-2"
                    >
                      Pick another date
                    </button>
                  </div>
                ) : (
                  slotsForDay.map((slot: any) => {
                    const alreadyBooked = bookedSlotIdsOnSelectedDate.has(
                      Number(slot.id)
                    );
                    const isSelected = selectedSlot?.id === slot.id;

                    return (
                      <button
                        key={slot.id}
                        disabled={alreadyBooked}
                        onClick={() => setSelectedSlot(slot)}
                        className={`
                          w-full border rounded-xl px-4 py-3 text-left transition-all duration-150
                          ${
                            alreadyBooked
                              ? "bg-gray-50 border-gray-200 opacity-60 cursor-not-allowed"
                              : isSelected
                              ? "bg-pink-500 border-pink-500 text-white shadow-sm"
                              : "bg-white border-gray-200 hover:border-pink-300 hover:bg-pink-50"
                          }
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`font-semibold text-[13px] ${
                              isSelected
                                ? "text-white"
                                : alreadyBooked
                                ? "text-gray-400"
                                : "text-gray-800"
                            }`}
                          >
                            {slot.start_time} – {slot.end_time}
                          </span>
                          {alreadyBooked && (
                            <span className="text-[11px] bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
                              Already booked
                            </span>
                          )}
                          {isSelected && !alreadyBooked && (
                            <CheckCircle2
                              size={16}
                              className="text-white shrink-0"
                            />
                          )}
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* BOOKING TYPE BADGE */}
              <div
                className={`mt-4 flex items-center gap-2 rounded-xl px-3 py-2 border ${meta.bg}`}
              >
                <meta.Icon size={13} className={meta.color} strokeWidth={2} />
                <span className={`text-[12px] font-medium ${meta.color}`}>
                  Booking as: {meta.label}
                </span>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-gray-200 py-3 rounded-xl text-[14px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={submitBooking}
                  disabled={!selectedSlot || loading}
                  className="flex-1 bg-pink-500 disabled:bg-gray-200 disabled:text-gray-400 text-white py-3 rounded-xl text-[14px] font-semibold transition-colors"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      Booking…
                    </span>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </div>
            </>
          )}

          {/* ───────── STEP 3 – SUCCESS ───────── */}
          {step === 3 && (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Booked Successfully!
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Your {meta.label.toLowerCase()} with {influencer?.full_name}{" "}
                  is confirmed.
                </p>
              </div>

              {/* Summary card */}
              <div className="w-full bg-gray-50 rounded-xl border border-gray-100 divide-y divide-gray-100 text-left">
                <div className="flex items-center gap-2.5 px-4 py-3">
                  <CalendarDays size={14} className="text-gray-400 shrink-0" />
                  <span className="text-[13px] text-gray-700">
                    {selectedDate?.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-3">
                  <Clock size={14} className="text-gray-400 shrink-0" />
                  <span className="text-[13px] text-gray-700">
                    {selectedSlot?.start_time} – {selectedSlot?.end_time}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-3">
                  <meta.Icon
                    size={14}
                    className={`${meta.color} shrink-0`}
                    strokeWidth={2}
                  />
                  <span className={`text-[13px] font-medium ${meta.color}`}>
                    {meta.label}
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-pink-500 text-white py-3 rounded-xl font-semibold text-[14px] mt-2"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}