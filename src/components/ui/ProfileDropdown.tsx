"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Wallet, Briefcase, LogOut } from "lucide-react";

export default function ProfileDropdown({ user }: any) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getInitial = () => {
    return (
      user?.full_name?.charAt(0) ||
      user?.email?.charAt(0) ||
      user?.mobile?.charAt(0) ||
      "U"
    ).toUpperCase();
  };

  // ✅ CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("celebstalk_access_token");
    localStorage.removeItem("celebstalk_refresh_token");
    localStorage.removeItem("celebstalk_user");

    router.push("/");
    window.location.reload();
  };

  return (
    <div ref={dropdownRef} className="relative z-50">
      {/* AVATAR */}
      <div
        onClick={() => setOpen(!open)}
        className="w-10 h-10 md:w-11 md:h-11 rounded-full cursor-pointer overflow-hidden shadow-md border-2 border-white hover:scale-105 transition"
        style={{ background: "var(--gradient-primary)" }}
      >
        {user?.image ? (
          <img src={user.image} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full text-white font-semibold text-sm md:text-base">
            {getInitial()}
          </div>
        )}
      </div>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute right-0 mt-3
            w-[90vw] max-w-[280px]
            sm:w-[280px]
            rounded-2xl p-[1px]
            shadow-2xl animate-in fade-in zoom-in-95 duration-200
          "
          style={{ background: "var(--gradient-accent)" }}
        >
          <div className="bg-white rounded-2xl overflow-hidden">

            {/* USER INFO */}
            <div className="px-4 py-4 flex items-center gap-3 border-b">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold"
                style={{ background: "var(--gradient-primary)" }}
              >
                {user?.image ? (
                  <img src={user.image} className="w-full h-full rounded-full object-cover" />
                ) : (
                  getInitial()
                )}
              </div>

              <div className="overflow-hidden">
                <p className="text-sm font-semibold text-[var(--neutral-900)] truncate">
                  {user?.full_name || "User"}
                </p>
                <p className="text-xs text-[var(--neutral-600)] truncate">
                  {user?.email || user?.mobile}
                </p>
              </div>
            </div>

            {/* MENU */}
            <div className="py-2">

              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-[var(--neutral-100)] transition"
              >
                <div className="p-2 rounded-lg bg-[var(--primary-100)]/10 text-[var(--primary-300)]">
                  <User size={16} />
                </div>
                Profile
              </Link>

              <Link
                href="/how-it-works"
                className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-[var(--neutral-100)] transition"
              >
                <div className="p-2 rounded-lg bg-[var(--secondary-100)]/10 text-[var(--secondary-200)]">
                  <Wallet size={16} />
                </div>
                Transaction History
              </Link>

              <Link
                href="/my-services"
                className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-[var(--neutral-100)] transition"
              >
                <div className="p-2 rounded-lg bg-[var(--green-100)]/20 text-[var(--green-200)]">
                  <Briefcase size={16} />
                </div>
                My Services
              </Link>

            </div>

            {/* DIVIDER */}
            <div className="border-t" />

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 text-sm text-[var(--red-200)] hover:bg-red-50 transition"
            >
              <div className="p-2 rounded-lg bg-red-100 text-[var(--red-200)]">
                <LogOut size={16} />
              </div>
              Logout
            </button>

          </div>
        </div>
      )}
    </div>
  );
}