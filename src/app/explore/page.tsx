

// ─── STATIC CODE (COMMENTED OUT) ──────────────────────────

// "use client";

// import Section from "@/components/layout/Section";
// import Container from "@/components/layout/Container";
// import CelebrityGrid from "@/components/section/explore/CelebrityGrid";
// import ExploreSidebar from "@/components/section/explore/ExploreSidebar";

// const data = Array.from({ length: 20 }).map((_, i) => ({
//   id: i,
//   name: "John Beb",
//   image: "/images/hero/img2.jpg",
//   category: "Singer, Actor",
//   languages: "English, Hindi",
//   location: "Mumbai, India",
//   orders: 120,
//   subscribers: "1.2M",
//   rating: 4.8,
//   videoPrice: "₹500",
//   callPrice: "₹800",
//   chatPrice: "₹300",
// }));

// export default function ExplorePage() {
//   return (
//     <Section bg="gradient">
//       <Container>
//         {/* 🔥 HEADER (always top) */}
//         <CelebrityGrid.Header />
//         {/* 🔥 MAIN LAYOUT */}
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Sidebar */}
//           <div className="order-2 lg:order-1">
//             <ExploreSidebar />
//           </div>
//           {/* Grid */}
//           <div className="order-3 lg:order-2 flex-1">
//             <CelebrityGrid data={data} hideHeader />
//           </div>
//         </div>
//       </Container>
//     </Section>
//   );
// }


// ─── DYNAMIC CODE ──────────────────────────────────────────

// import Section from "@/components/layout/Section";
// import Container from "@/components/layout/Container";
// import CelebrityGrid, { Header } from "@/components/section/explore/CelebrityGrid";
// import ExploreSidebar from "@/components/section/explore/ExploreSidebar";
// import { getInfluencers } from "@/services/api";

// export default async function ExplorePage() {
//   const celebrities = await getInfluencers();

//   return (
//     <Section bg="gradient">
//       <Container>

//         {/* 🔥 HEADER (always top) */}
//         <Header />

//         {/* 🔥 MAIN LAYOUT */}
//         <div className="flex flex-col lg:flex-row gap-6">

//           {/* Sidebar */}
//           <div className="order-2 lg:order-1">
//             <ExploreSidebar />
//           </div>

//           {/* Grid */}
//           <div className="order-3 lg:order-2 flex-1">
//             <CelebrityGrid data={celebrities} hideHeader />
//           </div>

//         </div>

//       </Container>
//     </Section>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Section from "@/components/layout/Section";
// import Container from "@/components/layout/Container";
// import CelebrityGrid, { Header } from "@/components/section/explore/CelebrityGrid";
// import ExploreSidebar from "@/components/section/explore/ExploreSidebar";
// import { getInfluencers, getCategories } from "@/services/api";
// import { Influencer, Category } from "@/types";

// export default function ExplorePage() {
//   const [celebrities, setCelebrities] = useState<Influencer[]>([]);
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [selected, setSelected] = useState<string[]>([]);

//   useEffect(() => {
//     const load = async () => {
//       const [celeb, cat] = await Promise.all([
//         getInfluencers(),
//         getCategories(),
//       ]);
//       setCelebrities(celeb);
//       setCategories(cat);
//     };
//     load();
//   }, []);

//   const filtered =
//     selected.length === 0
//       ? celebrities
//       : celebrities.filter((c) =>
//           c.categories.some((cat) =>
//             selected.includes(cat.name)
//           )
//         );

//   return (
//     <Section bg="gradient">
//       <Container>

//         <Header />

//         <div className="flex flex-col lg:flex-row gap-6">

//           <div className="order-2 lg:order-1">
//             <ExploreSidebar
//               categories={categories}
//               selected={selected}
//               setSelected={setSelected}
//             />
//           </div>

//           <div className="order-3 lg:order-2 flex-1">
//             <CelebrityGrid data={filtered} hideHeader />
//           </div>

//         </div>

//       </Container>
//     </Section>
//   );
// }

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { Header } from "@/components/section/explore/CelebrityGrid";
import ExploreSidebar from "@/components/section/explore/ExploreSidebar";
import { getInfluencers, getCategories } from "@/services/api";

export default async function ExplorePage() {
  const [celebrities, categories] = await Promise.all([
    getInfluencers(),
    getCategories(),
  ]);

  return (
    <Section bg="gradient">
      <Container>

        <Header />

        <div className="mt-6">
          <ExploreSidebar
            categories={categories}
            celebrities={celebrities}
          />
        </div>

      </Container>
    </Section>
  );
}