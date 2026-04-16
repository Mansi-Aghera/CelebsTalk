// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X, MessageCircle, Phone } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// import Container from "./Container";
// import { cn } from "@/lib/utils";
// import Button from "../ui/Button";

// const navLinks = [
//   { label: "Explore", href: "/" },
//   { label: "Categories", href: "#" },
//   { label: "How it works", href: "#" },
//   { label: "Blog", href: "#" },
//   { label: "For Celebrity", href: "#" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[var(--neutral-200)]">
//       <Container>
//         <div className="flex items-center justify-between h-[72px]">

//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/logo/logo.png"
//               alt="Celebstalk"
//               width={160}
//               height={40}
//               priority
//               className="object-contain"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="text-[var(--neutral-800)] font-medium transition-all duration-300 hover:text-[var(--primary-300)]"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop CTA */}
//           <div className="hidden lg:flex items-center gap-3">

//             {/* Chat */}
//             <button
//               className={cn(
//                 "flex items-center gap-2 px-4 py-2 rounded-full border",
//                 "border-[var(--primary-300)] text-[var(--primary-300)]",
//                 "hover:bg-[var(--primary-300)] hover:text-white",
//                 "transition-all duration-300"
//               )}
//             >
//               <MessageCircle size={18} />
//               Chat
//             </button>

//             {/* Call */}
//             <button
//               className={cn(
//                 "flex items-center gap-2 px-4 py-2 rounded-full border",
//                 "border-[var(--secondary-200)] text-[var(--secondary-200)]",
//                 "hover:bg-[var(--secondary-200)] hover:text-white",
//                 "transition-all duration-300"
//               )}
//             >
//               <Phone size={18} />
//               Call
//             </button>

//             {/* Login */}
//             <button className="px-5 py-2 rounded-full text-white bg-[var(--gradient-primary)] hover:opacity-90 transition-all duration-300">
//               Login
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden"
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </Container>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden bg-white border-t border-[var(--neutral-200)]"
//           >
//             <Container>
//               <div className="flex flex-col py-6 gap-6">

//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.label}
//                     href={link.href}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-lg font-medium text-[var(--neutral-800)] hover:text-[var(--primary-300)] transition"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}

//                 {/* Mobile Buttons */}
//                 <div className="flex flex-col gap-3 pt-4">

//                   <Button variant="outline" iconLeft={<MessageCircle size={18} />}>
//   Chat
// </Button>

//                   <Button variant="secondary">
//   Call
// </Button>

//                   <Button>
//   Login
// </Button>

//                 </div>
//               </div>
//             </Container>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, MessageCircle, Phone } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// import Container from "./Container";
// import { cn } from "@/lib/utils";
// import Button from "../ui/Button";

// const navLinks = [
//   { label: "Explore", href: "/" },
//   { label: "Categories", href: "#" },
//   { label: "How it works", href: "#" },
//   { label: "Blog", href: "#" },
//   { label: "For Celebrity", href: "#" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[var(--neutral-200)]">
//       <Container>
//         <div className="flex items-center justify-between h-[72px]">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/logo/logo.png"
//               alt="Celebstalk"
//               width={160}
//               height={40}
//               priority
//               className="object-contain"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href;

//               return (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className={cn(
//                     "relative font-medium transition-colors duration-300 group",
//                     isActive
//                       ? "text-[var(--primary-300)]"
//                       : "text-[var(--neutral-800)] hover:text-[var(--primary-300)]",
//                   )}
//                 >
//                   {link.label}

//                   {/* underline */}
//                   <span
//                     className={cn(
//                       "absolute left-0 -bottom-1 h-[2px] bg-[var(--primary-300)] transition-all duration-300",
//                       isActive ? "w-full" : "w-0 group-hover:w-full",
//                     )}
//                   />
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Desktop CTA */}
//           <div className="hidden lg:flex items-center gap-3">
//             {/* Chat */}
//             <Button
//               variant="outline-primary"
//               iconLeft={<MessageCircle size={18} />}
//             >
//               Chat
//             </Button>

//             {/* Call */}
//             <Button variant="outline-secondary" iconLeft={<Phone size={18} />}>
//               Call
//             </Button>

//             <Button variant="soft">Login</Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden"
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </Container>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden bg-white border-t border-[var(--neutral-200)]"
//           >
//             <Container>
//               <div className="flex flex-col py-6 gap-6">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.label}
//                     href={link.href}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-lg font-medium text-[var(--neutral-800)] hover:text-[var(--primary-300)] transition"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}

//                 <div className="flex flex-col gap-3 pt-4">
//                   <Button
//                     variant="outline-primary"
//                     iconLeft={<MessageCircle size={18} />}
//                   >
//                     Chat
//                   </Button>

//                   <Button variant="secondary">Call</Button>

//                   <Button>Login</Button>
//                 </div>
//               </div>
//             </Container>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "./Container";
import { cn } from "@/lib/utils";
import Button from "../ui/Button";

const navLinks = [
  { label: "", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Categories", href: "/categories" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Blog", href: "/my-services" },
  { label: "For Celebrity", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Hide the navbar on the chat page
  if (pathname?.startsWith("/chat")) return null;

  return (
    <header className="w-full fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[var(--neutral-200)] overflow-x-hidden">
      <Container>
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="Celebstalk"
              width={160}
              height={40}
              priority
              className="object-contain w-auto h-8 md:h-9"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative font-medium transition-colors duration-300 group whitespace-nowrap",
                    isActive
                      ? "text-[var(--primary-300)]"
                      : "text-[var(--neutral-800)] hover:text-[var(--primary-300)]"
                  )}
                >
                  {link.label}

                  <span
                    className={cn(
                      "absolute left-0 -bottom-1 h-[2px] bg-[var(--primary-300)] transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Button
              href="/chat"
              variant="outline-primary"
              iconLeft={<MessageCircle size={18} />}
            >
              Chat
            </Button>

            <Button
              variant="outline-secondary"
              iconLeft={<Phone size={18} />}
            >
              Call
            </Button>

            <Button variant="soft" href="/login">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-[var(--neutral-200)]"
          >
            <Container>
              <div className="flex flex-col py-6 gap-5">

                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium text-[var(--neutral-800)] hover:text-[var(--primary-300)] transition"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="flex flex-col gap-3 pt-4">
                  <Button
                    href="/chat"
                    variant="outline-primary"
                    iconLeft={<MessageCircle size={18} />}
                    fullWidth
                  >
                    Chat
                  </Button>

                  <Button
                    variant="outline-secondary"
                    iconLeft={<Phone size={18} />}
                    fullWidth
                  >
                    Call
                  </Button>

                  <Button fullWidth variant="soft">
                    Login
                  </Button>
                </div>

              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}