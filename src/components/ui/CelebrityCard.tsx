

"use client";

import Image from "next/image";
import { Video, Phone, MessageSquare, Youtube } from "lucide-react";

interface CelebrityCardProps {
name: string;
image: string;
category: string;
languages: string;
location: string;
orders: number;
subscribers: string;
rating: number;
videoPrice: string;
callPrice: string;
chatPrice: string;
}

export default function CelebrityCard({
name,
image,
category,
languages,
location,
orders,
subscribers,
rating = 5,
videoPrice,
callPrice,
chatPrice,
}: CelebrityCardProps) {
return ( <div className="flex justify-between items-stretch bg-white border border-[#bdbdbd] rounded-xl w-full max-w-[720px] overflow-hidden">


  {/* LEFT SIDE */}
  <div className="flex gap-4 items-stretch">

    {/* IMAGE */}
   <div className="relative w-[180px] min-h-[130px] overflow-hidden rounded-l-xl">
  <Image
    src={image}
    alt={name}
    fill
    className="object-cover"
  />
</div>

    {/* DETAILS */}
    <div className="text-sm py-4  ">

      {/* NAME */}
      <div className="flex items-center gap-2 font-semibold text-[16px]">
        {name}
        <span className="flex items-center justify-center w-[16px] h-[16px] bg-[#3b82f6] text-white text-[10px] rounded-full">
  ✓
</span>
      </div>

      {/* YOUTUBE */}
      <div className="flex items-center gap-1 text-xs text-gray-600 mt-[2px] leading-[16px]">
  <span>YouTube :</span>

  <Youtube size={14} className="text-red-500 fill-red-500" />

  {subscribers}
</div>

      <p className="text-xs text-gray-700 mt-1">
        {category}
      </p>

      <p className="text-xs text-gray-600 leading-[16px]">
        {languages}
      </p>

      <p className="text-xs text-gray-600 leading-[16px]">
        {location}
      </p>

      <p className="text-xs text-gray-600 leading-[16px] pb-2">
        Orders: {orders}
      </p>

      {/* RATING */}
      <div className="flex items-center">

  <div className="bg-[#FFC107] text-black text-[11px] font-semibold px-2 py-[1px] rounded-l-sm">
    {rating.toFixed(1)}
  </div>

  <div className="bg-[#3a3a3a] text-[#FFC107] text-[11px] px-2 py-[1px] rounded-r-sm tracking-[2px]">
    ★★★★★
  </div>

</div>

    </div>
  </div>

  {/* RIGHT ACTIONS */}
  <div className="flex flex-col justify-center pr-5 gap-4">

    <div className="flex items-center gap-2 text-black text-xs">
      <div className="w-7 h-7 flex items-center justify-center border-[2px] border-[#16a34a] text-green-600 rounded-full">
        <Video size={16}/>
      </div>
      {videoPrice}
    </div>

    <div className="flex items-center gap-2 text-black text-xs">
      <div className="w-7 h-7 flex items-center justify-center border-[2px] border-[#16a34a] text-green-600 rounded-full">
        <Phone size={16}/>
      </div>
      {callPrice}
    </div>

    <div className="flex items-center gap-2 text-black text-xs">
      <div className="w-7 h-7 flex items-center justify-center border-[2px] border-[#16a34a] text-green-600 rounded-full">
        <MessageSquare size={16}/>
      </div>
      {chatPrice}
    </div>

  </div>

</div>


);
}
