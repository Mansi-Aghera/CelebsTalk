"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, heroReveal } from "@/lib/animations";
import {
  ChevronRight,
  TrendingUp,
  Star,
  Award,
  ShoppingBag,
  Banknote,
  Utensils,
  Plane,
} from "lucide-react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import useSWR from "swr";
import { getUserTransactions } from "@/services/api";

export default function HowItWorksPage() {
  const userId = "YOUR_USER_ID"; // 🔥 dynamic kar later (auth thi)
  

const { data } = useSWR(
  ["transactions", userId],
  () => getUserTransactions(userId)
);

const txList = data?.transactions ?? [];
const walletAmount = data?.walletAmount ?? 0;

  return (
    <div className="py-8 min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center text-[12px] md:text-[13px] text-gray-500 mb-8 gap-x-2 gap-y-1 font-medium"
        >
          <Link
            href="/"
            className="hover:text-[var(--primary-300)] transition-colors"
          >
            Home
          </Link>
          <ChevronRight size={14} />
          <span>Creators</span>
          <ChevronRight size={14} />
          <span>Youtubers</span>
          <ChevronRight size={14} />
          <span className="text-gray-900">Jasmine</span>
        </motion.div>

        {/* Top Dashboard Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 md:mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Main Purple Card */}
          <motion.div
            variants={heroReveal}
            className="lg:col-span-7 bg-[var(--dashboard-card-purple)] rounded-[32px] p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden shadow-2xl shadow-purple-500/20 w-full"
          >
            {/* Soft decorative blur background effect */}
            <div className="absolute top-[-40%] right-[-10%] w-[80%] h-[150%] bg-[var(--dashboard-card-purple-blur)] rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>

            <div className="relative z-10 font-bold tracking-wider text-purple-200 text-[11px] mb-4 uppercase">
              Total Available Balance
            </div>

            <div className="relative z-10 flex items-end gap-2 mb-10 md:mb-16">
              <span className="text-4xl font-semibold mb-1">₹</span>
              <span className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                 {walletAmount}
              </span>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full">
              <button className="flex-1 py-4 px-6 rounded-full border border-purple-400 bg-purple-500/10 hover:bg-purple-500/30 transition-colors text-sm font-medium text-white shadow-sm whitespace-nowrap text-center">
                Manage payment method
              </button>
              <button className="flex-1 py-4 px-6 rounded-full bg-white text-[var(--dashboard-card-purple)] hover:bg-gray-50 transition-colors text-sm font-semibold shadow-md whitespace-nowrap text-center">
                Add Amount
              </button>
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="flex flex-col sm:flex-row lg:grid lg:grid-cols-2 gap-6 flex-1 h-full">
              {/* Card: Monthly Growth */}
              <div className="flex-1 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] p-6 border border-gray-100 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50/30 to-transparent pointer-events-none"></div>
                <div className="w-10 h-10 rounded-full bg-[var(--dashboard-green-light-bg)] flex items-center justify-center mb-5 z-10 text-[var(--green-200)] shadow-sm">
                  <TrendingUp size={18} strokeWidth={2.5} />
                </div>
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 z-10">
                  Monthly Growth
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 z-10">
                  +12.4%
                </div>
              </div>

              {/* Card: Total Savings */}
              <div className="flex-1 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] p-6 border border-gray-100 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/30 to-transparent pointer-events-none"></div>
                <div className="w-10 h-10 rounded-full bg-[var(--dashboard-purple-icon-bg-4)] flex items-center justify-center mb-5 z-10 text-[var(--dashboard-purple-icon-1)] shadow-sm">
                  <Star size={18} strokeWidth={2.5} />
                </div>
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 z-10">
                  Total Savings
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 z-10">
                  $8,240
                </div>
              </div>
            </div>

            {/* Dark Card */}
            <div className="bg-[var(--dashboard-card-dark)] rounded-[24px] p-6 py-7 flex items-center justify-between shadow-xl">
              <div>
                <h3 className="text-white font-medium text-[15px] mb-1">
                  Unlock 500₹ on next payment
                </h3>
                <p className="text-gray-400 text-sm">
                  Add min amount on your wallet
                </p>
              </div>
              <div className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center text-[var(--green-200)] bg-[var(--dashboard-green-dark-bg)] ml-4">
                <Award size={20} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Transaction History Section */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4 px-2">
            <div>
              <h2 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-1">
                Transaction History
              </h2>
              <p className="text-[13px] text-gray-500 font-medium">
                Your financial activity across all linked accounts
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2 min-w-[80px] bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-full text-xs font-semibold transition-colors flex items-center justify-center">
                Filter
              </button>
              <button className="px-5 py-2 min-w-[100px] bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-full text-xs font-semibold transition-colors flex items-center justify-center">
                Export CSV
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[24px] md:rounded-[32px] p-4 md:p-8 md:px-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-100 overflow-x-auto no-scrollbar">
            <div className="min-w-[700px]">
              {/* Table Header */}
              <div className="grid grid-cols-12 text-[10px] font-bold text-gray-400 uppercase tracking-[0.10em] mb-4 md:mb-6 px-4">
                <div className="col-span-4">Transaction</div>
                <div className="col-span-3">Transaction Type</div>
                <div className="col-span-3">Date</div>
                <div className="col-span-2 text-right">Amount</div>
              </div>

              {/* Table Rows */}
              <div className="flex flex-col gap-1">
                {txList.length > 0 ? (
                  txList.map((tx) => (
                    <div
                      key={tx.id}
                      className="grid grid-cols-12 items-center px-4 py-4 hover:bg-gray-50 rounded-2xl transition-colors"
                    >
                      <div className="col-span-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-100">
                          {tx.isPositive ? (
                            <Banknote
                              size={20}
                              className="text-[var(--green-200)]"
                            />
                          ) : (
                            <ShoppingBag
                              size={20}
                              className="text-[var(--primary-300)]"
                            />
                          )}
                        </div>

                        <div>
                          <div className="font-semibold text-[14px] text-gray-900 mb-0.5">
                            {tx.title}
                          </div>
                          <div className="text-[12px] text-gray-400 font-medium">
                            {tx.subtitle}
                          </div>
                        </div>
                      </div>

                      <div className="col-span-3 text-[13px] text-gray-500 font-medium">
                        {tx.category}
                      </div>

                      <div className="col-span-3 text-[13px] text-gray-500 font-medium">
                        {tx.date}
                      </div>

                      <div
                        className={`col-span-2 text-right font-bold text-[14px] ${
                          tx.isPositive
                            ? "text-[var(--green-200)]"
                            : "text-gray-900"
                        }`}
                      >
                        {tx.amount}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 text-gray-400 text-sm">
                    No transactions found
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-8 md:mt-10 mb-8 pb-4">
            <button className="bg-[var(--dashboard-btn-purple)] hover:bg-[var(--dashboard-btn-purple-hover)] text-white px-10 py-3 rounded-full text-sm font-semibold transition-all shadow-[0_8px_20px_rgba(162,18,255,0.25)] hover:shadow-[0_12px_24px_rgba(162,18,255,0.35)]">
              Load More
            </button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
