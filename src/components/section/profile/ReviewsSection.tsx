"use client";

export default function ReviewsSection() {
  return (
    <div className="bg-white border border-[var(--neutral-200)] rounded-[12px] p-4">
      <h3 className="text-[12px] font-semibold mb-4">
        Ratings and reviews
      </h3>

      <div className="text-[18px] font-semibold">4.1 ★★★★★</div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="border border-[var(--neutral-200)] rounded-[10px] p-3 text-[11px]"
          >
            Great experience ⭐⭐⭐⭐⭐
          </div>
        ))}
      </div>
    </div>
  );
}