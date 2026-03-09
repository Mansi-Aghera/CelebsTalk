"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="w-full">

      {/* Top Heading */}
      <div className="py-24 bg-[#F4F4F4] text-center">
        <Container>
          <h2
            className="font-semibold leading-tight 
            text-[32px] md:text-[44px] lg:text-[52px]
            bg-gradient-to-r from-[#ff4fa3] to-[#a300ff]
            bg-clip-text text-transparent"
          >
            The future of fan–celebrity interaction isn’t coming.
            <br />
            It’s already here at Celebs-Talks.
          </h2>
        </Container>
      </div>

      {/* Footer Gradient */}
      <div
        className="text-white pt-20 pb-12"
        style={{
          background:
            "linear-gradient(180deg,#FF8BBA 0%,#D28CFD 100%)",
        }}
      >
        <Container>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

            {/* Left Section */}
            <div className="lg:col-span-2">
              <Image
                src="/logo/logo.png"
                alt="Celebstalk"
                width={200}
                height={60}
                className="mb-6"
              />

              <p className="text-[15px] text-white/90 leading-relaxed max-w-md">
                Celebs-Talks connects fans with their favorite celebrities
                through video calls, chats, and personalized interactions,
                creating unforgettable fan experiences.
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-5">Company</h4>
              <ul className="space-y-3 text-[15px] text-white/90">
                <li><Link href="#">About us</Link></li>
                <li><Link href="#">Solutions</Link></li>
                <li><Link href="#">Portfolio</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-5">Legal</h4>
              <ul className="space-y-3 text-[15px] text-white/90">
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms & Conditions</Link></li>
                <li><Link href="#">Cookie Policy</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>

            {/* Contact + Download */}
            <div>
              <h4 className="font-semibold mb-5">Contact Us</h4>

              <div className="space-y-3 text-[15px] text-white/90">

                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>0123 456 789</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>support@celebstalks.com</span>
                </div>

                {/* Download */}
                <div className="pt-5">
                  <h4 className="font-semibold mb-4">Download App</h4>

                  <div className="flex flex-col gap-3">

                    {/* Google Play */}
                    <button className="flex items-center gap-3 border border-white/40 rounded-full px-5 py-2 hover:bg-white/10 transition">
                      <Image
                        src="/icons/google-play.svg"
                        alt="google play"
                        width={22}
                        height={22}
                      />
                      <span className="text-sm">
                        Get it on Google Play
                      </span>
                    </button>

                    {/* Apple */}
                    <button className="flex items-center gap-3 border border-white/40 rounded-full px-5 py-2 hover:bg-white/10 transition">
                      <Image
                        src="/icons/apple.svg"
                        alt="apple"
                        width={22}
                        height={22}
                      />
                      <span className="text-sm">
                        Available on App Store
                      </span>
                    </button>

                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-white/30 mt-16 pt-6"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between text-[14px] text-white/80 gap-4">

            <span>CIN : 21216515400000000</span>

            <span>Copyright © 2026 Vibe Venture</span>

            <div className="flex gap-6">
              <Link href="#">Twitter</Link>
              <Link href="#">YouTube</Link>
              <Link href="#">LinkedIn</Link>
            </div>

          </div>

        </Container>
      </div>

    </footer>
  );
}