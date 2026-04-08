// "use client";

// import Container from "./Container";
// import Link from "next/link";
// import { Phone, Mail } from "lucide-react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer
//       className="text-white pt-28 pb-10"
//       style={{
//         background:
//           "linear-gradient(180deg,#ffffff 0%,#FB51BC 45%,#940AEA 100%)",
//       }}
//     >
//       <Container className="max-w-[1400px]">

//       {/* TOP HEADING */}
// <div className="text-center mb-20 max-w-[1300px] mx-auto">
//   <h2 className="text-5xl md:text-5xl lg:5xl leading-[100%] bg-clip-text text-transparent"
//       style={{ backgroundImage: "linear-gradient(90deg,#FF4C95,#9D00FF)" }}>

//     <span className="block font-medium">
//       The future of fan–celebrity interaction isn’t coming.
//     </span>

//     <span className="block font-normal">
//       It’s already here at Celebs-Talks.
//     </span>

//   </h2>
// </div>

//         {/* FOOTER GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

//           {/* BRAND */}
//           <div className="max-w-[260px]">
// <Link href="/" className="flex items-center">
//             <Image
//               src="/logo/logo.png"
//               alt="Celebstalk"
//               width={200}
//               height={60}
//               className="mb-6"
//             />
// </Link>
//             <p className="text-sm text-white/90 leading-relaxed">
//               Celebs-Talks connects fans with their favorite celebrities
//               through video calls, chats, and personalized interactions,
//               creating unforgettable fan experiences.
//             </p>
//           </div>

//           {/* COMPANY */}
//           <div>
//             <h4 className="font-semibold mb-5">Company</h4>

//             <ul className="space-y-3 text-sm text-white/90">
//               <li><Link href="#">About us</Link></li>
//               <li><Link href="#">Solutions</Link></li>
//               <li><Link href="#">Portfolio</Link></li>
//               <li><Link href="#">Blog</Link></li>
//               <li><Link href="#">Contact</Link></li>
//             </ul>
//           </div>

//           {/* LEGAL */}
//           <div>
//             <h4 className="font-semibold mb-5">Legal</h4>

//             <ul className="space-y-3 text-sm text-white/90">
//               <li><Link href="#">Privacy Policy</Link></li>
//               <li><Link href="#">Terms & Conditions</Link></li>
//               <li><Link href="#">Cookie Policy</Link></li>
//               <li><Link href="#">Blog</Link></li>
//               <li><Link href="#">Contact</Link></li>
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h4 className="font-semibold mb-5">Contact Us</h4>

//             <div className="space-y-4 text-sm text-white/90">
//               <div className="flex items-center gap-3">
//                 <Phone size={16} />
//                 <span>0123 456 789</span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <Mail size={16} />
//                 <span>support@celebstalks.com</span>
//               </div>
//             </div>
//           </div>

//           {/* DOWNLOAD */}
//           <div>
//             <h4 className="font-semibold mb-5">Download App</h4>

//             <div className="flex flex-col gap-4">
//               <button className="border border-white/60 rounded-full px-6 py-3 text-sm flex items-center justify-center hover:bg-white/10 transition">
//                 Get it on Google Play
//               </button>

//               <button className="border border-white/60 rounded-full px-6 py-3 text-sm flex items-center justify-center hover:bg-white/10 transition">
//                 Available on App Store
//               </button>
//             </div>
//           </div>

//         </div>

//         {/* DIVIDER */}
//         <div className="border-t border-white/30 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/80 gap-4">
//           <span>CIN : 21216515400000000</span>

//           <span>Copyright © 2026 Vibe Venture</span>

//           <div className="flex gap-6">
//             <Link href="#">Twitter</Link>
//             <Link href="#">YouTube</Link>
//             <Link href="#">LinkedIn</Link>
//           </div>
//         </div>

//       </Container>
//     </footer>
//   );
// }

"use client";

import Container from "./Container";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/chat")) return null;

  return (
    <footer
      className="text-white pt-28 pb-10"
      style={{
        background:
          "linear-gradient(180deg,#ffffff 0%,#FB51BC 45%,#940AEA 100%)",
      }}
    >
      <Container className="max-w-[1400px]">
        {/* TOP HEADING */}
        <motion.div
          className="text-center mb-20 max-w-[1300px] mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[100%] bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg,#FF4C95,#9D00FF)",
            }}
          >
            <span className="block font-medium">
              The future of fan–celebrity interaction isn’t coming.
            </span>

            <span className="block font-normal">
              It’s already here at Celebs-Talks.
            </span>
          </h2>
        </motion.div>

        {/* FOOTER GRID */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* BRAND */}
          <motion.div
            className="col-span-2 lg:col-span-1 max-w-[260px]"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/logo.png"
                alt="Celebstalk"
                width={200}
                height={60}
                className="mb-6"
              />
            </Link>

            <p className="text-sm text-white/90 leading-relaxed">
              Celebs-Talks connects fans with their favorite celebrities through
              video calls, chats, and personalized interactions, creating
              unforgettable fan experiences.
            </p>
          </motion.div>

          {/* COMPANY */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-semibold mb-5">Company</h4>

            <ul className="space-y-3 text-sm text-white/90">
              <li className="hover:text-[var(--primary-300)]">
                <Link href="#">About us</Link>
              </li>
              <li className="hover:text-[var(--primary-300)]">
                <Link href="#">Solutions</Link>
              </li>
              <li className="hover:text-[var(--primary-300)]">
                <Link href="#">Portfolio</Link>
              </li>
              <li className="hover:text-[var(--primary-300)]">
                <Link href="#">Blog</Link>
              </li>
              <li className="hover:text-[var(--primary-300)]">
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </motion.div>

          {/* LEGAL */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-semibold mb-5">Legal</h4>

            <ul className="space-y-3 text-sm text-white/90">
              <li className="hover:text-[var(--primary-300)]">
                <Link href="#">Privacy Policy</Link>
              </li>
              <li className="hover:text-[var(--primary-300)]">
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li className="hover:text-[var(--primary-300)]">
                <Link href="#">Cookie Policy</Link>
              </li>
              <li className="hover:text-[var(--primary-300)]">
                <Link href="#">Blog</Link>
              </li>
              <li className="hover:text-[var(--primary-300)]">
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            className="col-span-2 md:col-span-1"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-semibold mb-5">Contact Us</h4>

            <div className="space-y-4 text-sm text-white/90">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>0123 456 789</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>support@celebstalks.com</span>
              </div>
            </div>
          </motion.div>

          {/* DOWNLOAD */}
          <motion.div
            className="col-span-2 md:col-span-1"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-semibold mb-5">Download App</h4>

            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/60 rounded-full px-6 py-3 text-sm flex items-center justify-center hover:bg-white/10 transition"
              >
                Get it on Google Play
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/60 rounded-full px-6 py-3 text-sm flex items-center justify-center hover:bg-white/10 transition"
              >
                Available on App Store
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          className="border-t border-white/30 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/80 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>CIN : 21216515400000000</span>

          <span>Copyright © 2026 Vibe Venture</span>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-[var(--primary-300)]">
              Twitter
            </Link>
            <Link href="#" className="hover:text-[var(--primary-300)]">
              YouTube
            </Link>
            <Link href="#" className="hover:text-[var(--primary-300)]">
              LinkedIn
            </Link>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}