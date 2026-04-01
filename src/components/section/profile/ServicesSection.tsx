"use client";

export default function ServicesSection() {
  return (
    <div className="bg-white border border-[var(--neutral-200)] rounded-[12px] p-4">
      <h3 className="text-[12px] font-semibold mb-4">Services</h3>

      <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-[50px] rounded-[10px] flex items-center justify-center text-[11px] text-white"
            style={{ background: "var(--gradient-primary)" }}
          >
            Service
          </div>
        ))}
      </div>
    </div>
  );
}