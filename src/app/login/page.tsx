"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--pink-50)] relative overflow-hidden px-4">

      {/* Background */}
      <div className="absolute w-40 h-40 bg-pink-200 rounded-full opacity-40 top-20 left-10 blur-2xl" />
      <div className="absolute w-56 h-56 bg-pink-300 rounded-full opacity-30 bottom-20 right-10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-[var(--neutral-200)] p-6 sm:p-8 relative"
      >
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-pink-500 to-purple-500" />

        {/* Logo */}
        <h1 className="text-center text-3xl font-semibold text-[var(--primary-300)]">
          Celebstalk
        </h1>

        {/* Heading */}
        <h2 className="text-center text-xl font-semibold mt-2">
          Welcome Back ✨
        </h2>

        <p className="text-center text-sm text-[var(--neutral-600)] mt-1">
          Sign in to connect with your favourite celebrities
        </p>

        {/* Google */}
        <button className="w-full mt-5 flex items-center justify-center gap-2 h-11 rounded-xl border border-[var(--neutral-200)] bg-white hover:bg-gray-50 transition text-sm">
          <FcGoogle size={18} />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-[1px] bg-[var(--neutral-200)]" />
          <span className="text-xs text-[var(--neutral-500)]">
            or sign in with
          </span>
          <div className="flex-1 h-[1px] bg-[var(--neutral-200)]" />
        </div>

        {/* Email */}
        <div>
          <label className="text-xs font-semibold text-[var(--primary-300)]">
            EMAIL ADDRESS
          </label>
          <input
            type="email"
            placeholder="yourname@gmail.com"
            className="w-full mt-1 h-11 px-3 rounded-xl border border-[var(--neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-300)] text-sm"
          />
        </div>

        {/* Password */}
        <div className="mt-4 relative">
          <label className="text-xs font-semibold text-[var(--primary-300)]">
            PASSWORD
          </label>
          <input
            type={show ? "text" : "password"}
            placeholder="********"
            className="w-full mt-1 h-11 px-3 rounded-xl border border-[var(--neutral-200)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-300)] text-sm"
          />
          <Eye
            size={18}
            onClick={() => setShow(!show)}
            className="absolute right-3 top-[36px] cursor-pointer text-[var(--neutral-500)]"
          />
        </div>

        {/* Remember */}
        <div className="flex items-center justify-between mt-3 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[var(--primary-300)]" />
            <span className="text-[var(--neutral-600)]">Remember me</span>
          </label>

          <button className="text-[var(--primary-300)] hover:underline">
            Forgot password?
          </button>
        </div>

        {/* Button */}
        <button className="w-full mt-5 py-2.5 rounded-xl bg-[var(--neutral-900)] text-white font-medium hover:opacity-90 transition">
          Sign in to Celebstalk
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-[var(--neutral-600)] mt-5">
          New to Celebstalk?{" "}
          <span className="text-[var(--primary-300)] cursor-pointer hover:underline">
            Create Account
          </span>
        </p>
      </motion.div>
    </div>
  );
}